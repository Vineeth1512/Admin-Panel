import React from 'react'
import "./Product.css"
import { useState } from 'react';
function AddNewProductForm(props) {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: ' ',
        stock: '',
        expireDate: '',
        unitSold: '',
    });

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            name: formData.name,
            unitSold: formData.unitSold,
            stock: formData.stock,
            expireDate: formData.expireDate,
            category: formData.category
        };
        props.onAddProduct(newProduct);
        // Clear the form data after submission
        setFormData({
            name: '',
            description: '',
            category: ' ',
            stock: '',
            expireDate: '',
            unitSold: '',
        });
    };

    return (
        <>
            <div className='product-container'>
                <div>
                    <div className='product-table-body-wrapper'>
                        <h2>Add Product</h2>
                        <form onSubmit={handleSubmit}>
                            <label for="Name">Name</label>
                            <input type="text"
                                required
                                name='name'
                                value={formData.name}
                                onChange={handleFormChange}
                            />
                            <label for="Description">Description</label>
                            <textarea></textarea>
                            <label for="Category" required>Category</label>
                            <select
                                required
                                name="category"
                                value={formData.category}
                                onChange={handleFormChange}
                            >
                                <option >Select category</option>
                                <option value="1" >New Arrival</option>
                                <option value="2" >Most Popular</option>
                                <option value="3" >Trending</option>
                            </select>
                            <label for="Stock">Stock</label>
                            <input type="text"
                                required
                                name="stock"
                                value={formData.stock}
                                onChange={handleFormChange}
                            />
                            <div class="display">
                                <label class="date" for="Expiry Date">Expiry Date</label>
                                <label class="unit" for="Unit Sold">Unit Sold</label>
                            </div><div><input class="expire" type="date"
                                required
                                name="expireDate"
                                value={formData.expireDate}
                                onChange={handleFormChange}
                            /></div>
                            <div><input class="unit-sold" type="text"
                                required
                                name="unitSold"
                                value={formData.unitSold}
                                onChange={handleFormChange}
                            /></div>
                            <button class="btn">Add Product</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddNewProductForm