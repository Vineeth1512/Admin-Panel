import React from 'react'
import "./Product.css"
import { useState } from 'react';
function AddNewProductForm(props) {

    const productPageData = JSON.parse(localStorage.getItem('productPage'))
    const productCategories = productPageData.categories;;
   
    const [imageData, setImageData] = useState(null);
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
    const [fileValidationError, setFileValidationError] = useState('');
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (validateImageFile(file)) {
                setFileValidationError('');
                const reader = new FileReader();
                reader.onload = (event) => {
                    setImageData(event.target.result);
                };
                reader.readAsDataURL(file);
            } else {
                setFileValidationError('File size should be in below 1Mb');
            }
        }
    };
    const validateImageFile = (file) => {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/bmp', 'image/svg+xml', 'image/webp'];
        const maxSize = 1024 * 1024; // 1MB
        if (allowedTypes.includes(file.type) && file.size <= maxSize) {
            return true;
        }
        return false;
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            name: formData.name,
            unitSold: formData.unitSold,
            stock: formData.stock,
            expireDate: formData.expireDate,
            category: formData.category,
            image: imageData

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
        setImageData(null);

    };

    return (
        <>
            <div className='product-container'>
                <div className='pic-details-wrapper'>
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
                                {productCategories.map((cat) => {
                                    return <option key={cat} value={cat}>{cat}l</option>
                                })}

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
                <div class="image-container">
                    <input id="fileInput" type="file"

                        accept="image/*"
                        onChange={handleImageChange}
                        required
                    />
                    {fileValidationError && <p className="error-message">{fileValidationError}</p>}
                    {imageData && (
                        <img
                            src={imageData}
                            alt="Product"
                            style={{ maxWidth: '100px' }}
                        />
                    )}
                </div>
            </div>
        </>
    )
}

export default AddNewProductForm