import Product from "../../../models/Product";
import db from "../../../utils/db";

//create api to get product from backend in the mongodb based the id in the url
//connect api to the db
//get product in db using findByI and id in the URL to get the product based on the id in the url

const handler = async (req, res) => {
    await db.connect();
    const product = await Product.findById(req.query.id);
    await db.disconnect();
    res.send(product);
};

export default handler;