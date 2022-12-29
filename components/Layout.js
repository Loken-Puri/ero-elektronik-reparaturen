import { signOut, useSession } from 'next-auth/react';
import Head from 'next/head'
import Link from 'next/link'
import Cookies from 'js-cookie';
import React, { useContext, useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { Menu } from '@headlessui/react';
import 'react-toastify/dist/ReactToastify.css'
import { Store } from '../utils/Store';
import DropdownLink from './DropdownLink';
import { useRouter } from 'next/router';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';


export default function Layout({title, children}) {
    const { status, data: session } = useSession();

    const { state, dispatch } = useContext(Store);
    const { cart } = state;
    const [cartItemsCount, setCartItemsCount] = useState(0);
    
    useEffect(() => {
        setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0))
    }, [cart.cartItems]);

    const logoutClickHandler = () => {
        //remove cart item
        Cookies.remove('cart');
        dispatch({ type: 'CART_RESET' });
        signOut({ callbackUrl: '/login' });
    };

    const [query, setQuery] = useState('');
    const router = useRouter();
    const submitHandler = (e) => {
        e.preventDefault();
        router.push(`/search?query=${query}`);
    };

    return (
    <>
        <Head>
        <title>{title ? title + ' - ERO ELEKTRONIK' : 'ERO ELEKTRONIK'}</title>
        <meta name="description" content="Electronic Repair Shop" />
        <link rel="icon" href="/favicon.ico" />
        </Head>

        <ToastContainer position="bottom-center" limit={1} />
        <div className="flex min-h-screen flex-col justify-between">
            <header>
                <nav className="flex h-12 items-center px-4 justify-between shadow-md">
                    <Link href="/" className='text-lg font-bold text-green-900 w-64'>
                        ERO ELEKTRONIK
                    </Link>

                    {/* ---------- Search box starts ----------*/}
                        <form onSubmit={submitHandler} className="mx-auto hidden w-full justify-center md:flex">
                        <input onChange={(e) => setQuery(e.target.value)} type="text" className="rounded-tr-none rounded-br-none p-1 text-sm focus:ring-0" placeholder="Search products" />
                        <button className="rounded rounded-tl-none rounded-bl-none bg-amber-300 p-1 text-sm dark:text-black" type="submit" id="button-addon2">
                            <MagnifyingGlassIcon className="h-5 w-5"></MagnifyingGlassIcon>
                        </button>
                        </form>
                        {/* ---------- Search box ends ----------*/}

                    <div className="w-64">
                        <Link href="/cart" className="p-2">Cart {cartItemsCount > 0 && (
                            <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-sx font-bold text-white">{cartItemsCount}</span>
                        )}
                        </Link>

                            {status === 'loading' ? ('loading') : 
                                session?.user ? (
                                    <Menu as="div" className="relative inline-block">
                                        <Menu.Button className="text-blue-600">
                                            {session.user.name}
                                        </Menu.Button>
                                        <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white shadow-lg">
                                            <Menu.Item>
                                                <DropdownLink className="dropdown-link" href="/profile">
                                                    Profile
                                                </DropdownLink>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <DropdownLink className="dropdown-link" href="/order-history">
                                                    Order History
                                                </DropdownLink>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <Link className="dropdown-link" href="#" 
                                            onClick={logoutClickHandler}>Logout</Link>
                                                </Menu.Item>
                                        </Menu.Items>
                                    </Menu>
                                )
                            : (
                                <Link href="/login" className="p-2">Login</Link>
                            )}
                            
                    </div>
                </nav>
            </header>
            <main className="container m-auto mt-4 px-4">
                {children}
            </main>
            <footer className="flex h-10 justify-center items-center shadow-inner">
                <p>Copyright @ 2022 ERO ELEKTRONIK</p>
            </footer>
        </div>
    </>
    )
}
