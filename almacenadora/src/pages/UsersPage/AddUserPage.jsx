import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export const AddProduct = ()=>{
    const title = 'ADD PRODUCT';
    const [categories, setCategories] = useState([])

    const getCategories = async()=>{
        try{
            const { data } = await axios('http://localhost:3200/category/get')
            setCategories(data.categories)
        }catch(err){
            console.log(err);
        }
    }

    const addProduct = async()=>{
        try{
            let product = {
                name: document.getElementById('inputName').value,
                price: document.getElementById('inputPrice').value,
                stock: document.getElementById('inputStock').value,
                category: document.getElementById('inputCategory').value
            }
            const { data } = await axios.post('http://localhost:3200/product/add', product)
            alert(data.message)
        }catch(err){
            alert(err.response.data.message)
        }
    }

    useEffect(()=> getCategories, [])

    return (
        <>
            <h1>{title}</h1>
            <form className="m-5 text-center">
                <div className="mb-3">
                    <label htmlFor="inputName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="inputName" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPrice" className="form-label">Price</label>
                    <input type="number" className="form-control" id="inputPrice" required/>
                </div>
                <div>
                    <label htmlFor="inputStock" className="form-label">Stock</label>
                    <input type="number" className="form-control" id="inputStock" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputCategory" className="form-label">Category</label>
                    <select className="form-control" id="inputCategory">
                        {
                            categories.map(({_id, name}, i)=>{
                                return(
                                    <option key={i} value={_id}>{name}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <Link to="/products">
                    <button onClick={()=>addProduct()} className="btn btn-success">ADD</button>
                </Link>
                <Link to="/products">
                    <button className="btn btn-danger">Cancel</button>
                </Link>
            </form>
        </>
    )
}