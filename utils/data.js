import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Loken',
            email: 'admin@ero.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
        },

        {
            name: 'Krishna',
            email: 'user@ero.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false,
        },
    ],
    products: [
        {
            name: 'Cuisinart',
            slug: 'Cuisinart',
            category: 'Coffee-Mechine',
            image: '/images/Cuisinart-159.jpg',
            price: 159,
            brand: 'Cuisinart',
            rating: 4.5,
            numReviews: 8,
            countInStock: 20,
            description: 'A popular Coffee Mechine',
            isFeatured: true,
            banner: '/images/Cuisinart-159.jpg',
        },
        {
            name: 'Fit Shirt',
            slug: 'fit-shirt',
            category: 'Shirts',
            image: '/images/shirt2.jpg',
            price: 80,
            brand: 'Adidas',
            rating: 3.2,
            numReviews: 10,
            countInStock: 20,
            description: 'A popular shirt',
            isFeatured: true,
            banner: '/images/banner2.jpg',
        },
        {
            name: 'Slim Shirt',
            slug: 'slim-shirt',
            category: 'Shirts',
            image: '/images/shirt3.jpg',
            price: 90,
            brand: 'Raymond',
            rating: 4.5,
            numReviews: 3,
            countInStock: 20,
            description: 'A popular shirt',
        },
        {
            name: 'Golf Pants',
            slug: 'golf-pants',
            category: 'Pants',
            image: '/images/pants1.jpg',
            price: 90,
            brand: 'Oliver',
            rating: 2.9,
            numReviews: 13,
            countInStock: 20,
            description: 'Smart looking pants',
        },
        {
            name: 'Fit Pants',
            slug: 'fit-pants',
            category: 'Pants',
            image: '/images/pants2.jpg',
            price: 95,
            brand: 'Zara',
            rating: 3.5,
            numReviews: 7,
            countInStock: 20,
            description: 'A popular pants',
        },
        {
            name: 'Classic Pants',
            slug: 'classic-pants',
            category: 'Pants',
            image: '/images/pants3.jpg',
            price: 75,
            brand: 'Casely',
            rating: 2.4,
            numReviews: 14,
            countInStock: 20,
            description: 'A popular pants',
        },
        ],
};


export default data;








// import bcrypt from 'bcryptjs';

// const data = {
//     users: [
//         {
//             name: 'Loken',
//             email: 'admin@ero.com',
//             password: bcrypt.hashSync('123456'),
//             isAdmin: true,
//         },

//         {
//             name: 'Krishna',
//             email: 'user@ero.com',
//             password: bcrypt.hashSync('123456'),
//             isAdmin: false,
//         },
//     ],
//     products: [
//         {
//             name: 'Cuisinart',
//             slug: 'Cuisinart',
//             category: 'Coffee-Mechine',
//             image: '/images/Cuisinart-159.jpg',
//             price: 159,
//             brand: 'Cuisinart',
//             rating: 4.5,
//             numReviews: 8,
//             countInStock: 20,
//             description: 'A popular Coffee Mechine',
//             isFeatured: true,
//             banner: '/images/Cuisinart-159.jpg',
//         },
//         {
//             name: 'Keurig-coffee-mechine-155',
//             slug: 'Keurig-coffee-mechine-155',
//             category: 'Coffee Mechine',
//             image: '/images/Keurig-coffee-mechine-155.jpg',
//             price: 155,
//             brand: 'Keurig',
//             rating: 3.2,
//             numReviews: 10,
//             countInStock: 20,
//             description: 'A popular Coffee Mechine',
//             isFeatured: true,
//             banner: '/images/Keurig-coffee-mechine-155.jpg',
//         },
//         {
//             name: 'Lor-barista-189',
//             slug: 'Lor-barista-189',
//             category: 'Coffee Mechine',
//             image: '/images/Lor-barista-189.jpg',
//             price: 189,
//             brand: 'LOR',
//             rating: 4.5,
//             numReviews: 3,
//             countInStock: 20,
//             description: 'A popular Coffee Mechine',
//         },
//         {
//             name: 'Philips-espresso-mechine-799',
//             slug: 'Philips-espresso-mechine-799',
//             category: 'Coffee Mechine',
//             image: '/images/Philips-espresso-mechine-799.jpg',
//             price: 799,
//             brand: 'Philips',
//             rating: 2.9,
//             numReviews: 13,
//             countInStock: 20,
//             description: 'A popular Coffee Mechine',
//         },
//         {
//             name: 'Philips-latest-series-549',
//             slug: 'Philips-latest-series-549',
//             category: 'Coffee Mechine',
//             image: '/images/Philips-latest-series-549.jpg',
//             price: 549,
//             brand: 'Philips',
//             rating: 3.5,
//             numReviews: 7,
//             countInStock: 20,
//             description: 'A popular Coffee Mechine',
//         },
//         {
//             name: 'Spinn-coffee-maker-799',
//             slug: 'Spinn-coffee-maker-799',
//             category: 'Coffee Mechine',
//             image: '/images/Spinn-coffee-maker-799.jpg',
//             price: 75,
//             brand: 'Spinn',
//             rating: 2.4,
//             numReviews: 14,
//             countInStock: 20,
//             description: 'A popular Coffee Mechine',
//         },
//         ],
// };


// export default data;