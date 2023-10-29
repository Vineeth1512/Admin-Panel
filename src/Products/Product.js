import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import "./Product.css"
import { useState } from 'react'
import ProductTable from './ProductTable';
import AddNewProductForm from './AddNewProductForm'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import AddNewCategory from './AddNewCategory'
import CategoryTable from './CategoryTable'
function Product() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const [isFormVisible, setFormVisible] = useState(false);
  const [isCategory, setIsCategory] = useState(false);

  const productPageData = JSON.parse(localStorage.getItem('productPage')) || { products: [], categories: [] };
  console.log("productPageData:", productPageData);
  const productsTableData = productPageData.products;
  const productCategories = productPageData.categories;;
  const [products, setProducts] = useState(productsTableData);
  const [categories, setCategories] = useState(productCategories);

  const addProduct = (product) => {
    const updatedProductsTableData = [...productsTableData, product];
    setProducts(updatedProductsTableData);
    localStorage.setItem("productPage", JSON.stringify({ products: updatedProductsTableData, categories: productCategories }));
    setFormVisible(false);
  };


  const addCategory = (category) => {
    const updatedCategoriesData = [...productCategories, category];
    console.log(updatedCategoriesData)
    setCategories(updatedCategoriesData);
    localStorage.setItem("productPage", JSON.stringify({ products: productsTableData, categories: updatedCategoriesData }));
    setIsCategory(false);

  }

  useEffect(() => {
    const localProductsData = JSON.parse(localStorage.getItem('productPage')) || { products: [], categories: [] };
    if (localProductsData) {
      setProducts(localProductsData.products || []);
      setCategories(localProductsData.categories || []);
    }
  }, []);

  const deleteProduct = (productIndex) => {
    if (productIndex >= 0 && productIndex < products.length) {
      const updatedProducts = [...products];
      updatedProducts.splice(productIndex, 1);
      setProducts(updatedProducts);
      alert("Deleted the product successfully..!")
      const updatedProductPageData = {
        products: updatedProducts,
        categories: productCategories,
      };
      localStorage.setItem("productPage", JSON.stringify(updatedProductPageData));
    }
  };

  const deleteCategory = (categoryIndex) => {
    if (categoryIndex >= 0 && categoryIndex < categories.length) {
      const updatedCategories = [...categories];
      updatedCategories.splice(categoryIndex, 1);
      setProducts(updatedCategories);
      alert("Deleted the Category successfully..!")
      const updatedProductPageData = {
        products: productsTableData,
        categories: updatedCategories,
      };
      localStorage.setItem("productPage", JSON.stringify(updatedProductPageData));
    }
  };


  return (
    <>
      <Header />
      <div className='products-wrapper'>
        {isFormVisible ? <AddNewProductForm onAddProduct={addProduct} />
          : <div className='product-container'>
            <div>
              <div className='product-table-body'>
                <table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Product Name</th>
                      <th>Unit Sold</th>
                      <th>In Stock</th>
                      <th>Expire Date</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      productsTableData.map((product, i) => {
                        return <ProductTable
                          key={i}
                          index={i}
                          id={product.id}
                          name={product.name}
                          unitSold={product.unitSold}
                          stock={product.stock}
                          expireDate={product.expireDate}
                          onDelete={deleteProduct}

                        />
                      })
                    }
                  </tbody>
                </table>
              </div>
              <button class="btn" onClick={() => setFormVisible(true)}>Add New Product</button>
              <button class="btn" type="reset">Delete Selected Products</button>
            </div>
            <div>
              {isCategory ? <AddNewCategory onAddCategory={addCategory} /> :
                <>
                  <div className='product-categories'>
                    <table>
                      <tbody>
                        {productCategories.map((product, i) => {
                          return <CategoryTable
                            product={product}
                            index={i}
                            onDelete={deleteCategory}
                          />
                        })}
                      </tbody>
                    </table>
                  </div>
                  <button class="btn" onClick={() => setIsCategory(true)} >Add New Category</button>
                </>}

            </div>
          </div>}
      </div>
      <Footer />
    </>
  )
}

export default Product