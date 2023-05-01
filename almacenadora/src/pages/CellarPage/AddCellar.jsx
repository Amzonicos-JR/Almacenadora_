import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export const AddCellar = ()=>{
    const title = 'ADD CELLAR';
    const [cellars, setCellars] = useState([])

    const getCellars = async () => {
        try {
            const { data } = await axios('http://localhost:3000/cellar/get')
            setCellars(data.cellars)
        } catch (err) {
            console.log(err)
        }
    }

    const addCellar = async()=>{
        try{
            let cellar = {
                name: document.getElementById('inputName').value,
                description: document.getElementById('inputDescription').value,
                location: document.getElementById('inputLocation').value,
                size: document.getElementById('inputSize').value,
                availability: document.getElementById('inputAvailability').value,
                price: document.getElementById('inputPrice').value
            }
            const { data } = await axios.post('http://localhost:3000/cellar/add', cellar)
            alert(data.message)
        }catch(err){
            alert(err.response.data.message)
        }
    }

    useEffect(()=> getCellars, [])

    return (
        <>
            <h1>{title}</h1>
            <form className="m-5 text-center">
                <div className="mb-3">
                    <label htmlFor="inputName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="inputName" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputDescription" className="form-label">Description</label>
                    <input type="number" className="form-control" id="inputDescription" required/>
                </div>
                <div>
                    <label htmlFor="inputLocation" className="form-label">Location</label>
                    <input type="number" className="form-control" id="inputLocation" required/>
                </div>
                <div>
                    <label htmlFor="inputSize" className="form-label">Size</label>
                    <input type="number" className="form-control" id="inputSize" required/>
                </div>
                <div>
                    <label htmlFor="inputAvailability" className="form-label">Availability</label>
                    <input type="number" className="form-control" id="inputAvailability" required/>
                </div>
                <div>
                    <label htmlFor="inputPrice" className="form-label">Price</label>
                    <input type="number" className="form-control" id="inputPrice" required/>
                </div>
                <Link to="/cellar">
                    <button onClick={()=>addCellar()} className="btn btn-success">ADD</button>
                </Link>
                <Link to="/cellar">
                    <button className="btn btn-danger">Cancel</button>
                </Link>
            </form>
        </>
    )
}
