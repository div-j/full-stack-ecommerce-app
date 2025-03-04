import React from 'react'
import uplaod_area from '../assets/upload_area.svg'
import { MdAdd } from 'react-icons/md'
import { useState } from 'react'

export default function AddProduct() {
    const [image, setImage] = useState(false)
    const [product, setProduct] = useState({
        name: '',
        image:'',
        new_price: '',
        old_price: '',
        category:'women'
    })

    const handleImage = (e) => {
        setImage(e.target.files[0])
    }

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    const add_product = async () => {
        console.log(product);
        let responseData;
        const formData = new FormData();
        formData.append('product', image);

        await fetch('http://localhost:5000/upload', {
            method: 'POST',
            headers: {
                "Accept": 'application/json'
            },
            body: formData
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                responseData = data;
                }).catch(err => console.log(err.message))

        if(responseData.success){
            alert('Product added successfully')
            product.image = responseData.image_url

            fetch('http://localhost:5000/addproduct', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    },
                    body: JSON.stringify(product)
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        }).catch(err => console.log(err.message))
        }
        
    }


  return (
    <section className='bg-white p-8 w-full rounded-sm mt-4 lg:m-7'>
        <div className='mb-3'>
            <h2 className='bold-18 pb-2'>Product Title</h2>
            <input  value={product.name} onChange={handleChange} type="text"
            name='name' 
            placeholder='typehere'className='bg-primary outline-none max:w-80 w-full px-4 py-3 rounded-md' />
        </div>
        <div className='mb-3'>
            <h2 className='bold-18 pb-2'>Price</h2>
            <input 
            value={product.old_price} 
            onChange={handleChange} type="text" name='old_price' placeholder='typehere'className='bg-primary outline-none max:w-80 w-full px-4 py-3 rounded-md' />
        </div>   
        <div className='mb-3'>
            <h2 className='bold-18 pb-2'>Offer Price</h2>
            <input value={product.new_price} onChange={handleChange} name='new_price' type="text" placeholder='typehere'className='bg-primary outline-none max:w-80 w-full px-4 py-3 rounded-md' />
        </div>
        <div className='mb-3 flex items-center gap-x-4'>
            <h2 className='bold-18 pb-2'>Product Category</h2>
            <select value={product.category} onChange={handleChange} name="category" id="" className='bg-primary ring-1 ring-slate-900/5 outline-none medium-16 inline-block  px-4 rounded-sm'>
                <option value="women">Women</option>
                <option value="men">Men</option>
                <option value="kid">Kid</option>
            </select>
        </div>
        <div>
            <label htmlFor="file-input">
                <img src={image?URL.createObjectURL(image):uplaod_area} alt="" className='w-20 rounded-sm inline-block' />
            </label>
            <input onChange={handleImage} type="file" name='image' id='file-input' hidden className='bg-primary max-w-80 w-full py-3 px-4'  />
        </div>
        <button onClick={()=>add_product()} className='btn_dark_rounded mt-4 flexCenter gap-x-1'>
           <MdAdd/> Add Product
        </button>

        
        
    </section>
  )
}
