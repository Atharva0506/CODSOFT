"use client"
import React, { useState } from 'react';
import products from '@/product.json';
import Image from 'next/image';
import "./ProductCatalog.css"

export interface ProductCatalog{
    id: number,
    name: string,
    price: number,
    image: string,
    category: string  
}
function ProductCatalog() {
  const [productData,setProductData] = useState<ProductCatalog[]>(products);
  const [categoryData,setCategoryData]= useState<any>([]);

   const filterData = (data: ProductCatalog[], field: string) => {
    let filteredData = data.map((currentElem: any) => {
      return currentElem[field]; 
    });
  return (filteredData=[...new Set(filteredData)]) 
  }
  
  const categoryType = filterData(products, "category"); 
  const rangeType = filterData(products, "range")
  const handleCategoryCheck = (event:any)=>{
  const category = event.target.value;
    if(event.target.checked){
      setCategoryData([...categoryData,category])
      console.log(categoryData);
    }else{
      setCategoryData(categoryData.filter((catg:any)=>{catg!==category}))
    }
  }
console.log(categoryData)
  return (
      <section id='Products'>
      <h2>Products</h2>
      <div className="catalog_nav">
        <ul>
       {categoryType.map((item,index)=>(
        <li key={index}>
            <div>
              <input type="checkbox" 
              value={item}
              checked={categoryData.includes(item)}
              onChange={()=>{handleCategoryCheck}}
              />
            </div>
            <div style={{color : 'white'}}>{item}</div>
        </li>
       ))}
      </ul>
      </div>
      <div className="container products_container">
      {
        // products.map((product)=>{
        //   return (
        //     <article key={product.id}>
        //     <div className='products_img'>
        //       <img src={product.image} alt="products_img" />
        //     </div>

        //     <h3>{product.name}&nbsp; {product.price}</h3>
            
        //     <div className='products_item-cta'>
        //       <button  >Add to Cart</button>
        //       <button  >Vist</button>
        //     </div>
        //   </article>
        //   )
        // })
      }

      </div>
    </section>
    
  );
}

export default ProductCatalog;
