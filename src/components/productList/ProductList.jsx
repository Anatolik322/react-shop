import React, { useState } from 'react'
import Product from '../poroduct';
import { Dropdown, Icon } from 'react-bulma-components';
import { useGetGoodsQuery, useGetByCategoryQuery } from '../../services/shop';
import "./ProductLIst.scss"

function ProductList() {
  //const { isSuccess, data} = useGetGoodsQuery()
  
  const [category, setCategory] = useState(null);
  const {isSuccess, isFetching, isLoading, data} = useGetByCategoryQuery(category);
 isSuccess && console.log(data);
  return (
    <>
      <div className="filter">
          <h3> Category: </h3> 
          <Dropdown label="Category:" closeOnSelect={true} color={'dark'}icon={<Icon>V</Icon>} onChange={(e) => setCategory(e)}>
          <Dropdown.Item renderAs="a" value={null}>all</Dropdown.Item>
            <Dropdown.Item renderAs="a" value="smartphones">smartphones</Dropdown.Item>
            <Dropdown.Item renderAs="a" value="laptops">laptops</Dropdown.Item>
            <Dropdown.Item renderAs="a" value="fragrances">fragrances</Dropdown.Item>
            <Dropdown.Item renderAs="a" value="skincare">skincare</Dropdown.Item>
            <Dropdown.Item renderAs="a" value="groceries">groceries</Dropdown.Item>
            <Dropdown.Item renderAs="a" value="home-decoration">home-decoration</Dropdown.Item>
            <Dropdown.Item renderAs="a" value="furniture">furniture</Dropdown.Item>
            <Dropdown.Item renderAs="a" value="tops">tops</Dropdown.Item>
          </Dropdown>
        </div>
      <div className='product_list'>
        {isLoading || isFetching ? <h2>Loading...</h2>:
        isSuccess && data.products.map(e => {
          return <Product 
          img={e.images[0]}
          title={e.title}
          price={e.price}
          descr={e.description}/>
        })}
      </div>
    </>
  )
}

export default ProductList;
