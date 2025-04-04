import mongoose from "mongoose";
import express from "express";
import multer from "multer";
import dotenv from "dotenv";

dotenv.config()
const app = express();
const port = 5000;



const storage = multer.diskStorage({
destination: 'upload/images',
filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({ storage: storage })
app.use('/images', express.static('upload/images'))

app.post('/upload', upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
})


const Product = mongoose.model('Product', {
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    new_price:{
        type:Number,
        required:true
    },
    old_price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    available:{
        type:Boolean,
        default:true
    }
})

app.post('/addproducts', async (req, res) => {
    let products = await Product.find({})
    let id;
    if(products.length > 0){
        let last_product_array = products.slice(-1)
        let last_product = last_product_array[0]
        id = last_product.id + 1
    }else{
        id =  1
    }

    const product = new Product({
        id:req.body.id,
        name:req.body.name,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
        image:req.body.image,
        category:req.body.category
    })
    console.log(product)
    await product.save()
    res.json({
        success:true,
        name:req.body.name,
        message:"Product added successfully"
        })
    
})

app.post('/removeproducts', async (req, res) => {
    let id = req.body.id
    await Product.findOneAndDelete({id:id})
    res.json({
        success:true,
        name:req.body.name,
        message:"Product removed successfully"
    })
})


app.get('/allproducts', async (req, res) => {

    let products = await Product.find({})
    res.send(products)
})



app.get('/', (req, res) => {
    res.send('Hello World!')
})



mongoose.connect( process.env.MONGO_URL)
.then(() => {
    console.log("Connected to MongoDB")
})
.catch((err) => {
    console.log("Error connecting to MongoDB", err)
})
app.listen(port, (error) => {
    if (error) {
        console.error("Error",error)
        } else {
    console.log('serrver is running on port', port);
        }
})

