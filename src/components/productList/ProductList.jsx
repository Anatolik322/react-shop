import React, { useState } from 'react'
import Product from '../poroduct';
import { Dropdown, Icon } from 'react-bulma-components';
import { useGetGoodsQuery, useGetByCategoryQuery } from '../../services/shop';
import "./ProductLIst.scss"

function ProductList() {
  //const { isSuccess, data} = useGetGoodsQuery()
  
  const [category, setCategory] = useState(null);
  const {isSuccess, isLoading, data} = useGetByCategoryQuery(category);
 // s&& console.log(d )

  return (
    <>
      <div className="filter">
          <h3> Category: </h3> 
          <Dropdown label="Category:" closeOnSelect={true} color={'dark'}icon={<Icon>V</Icon>} onChange={(e) => setCategory(e)}>
          <Dropdown.Item renderAs="a" value={null}>all</Dropdown.Item>
            <Dropdown.Item renderAs="a" value="electronics">electronics</Dropdown.Item>
            <Dropdown.Item renderAs="a" value="jewelery">jewelery</Dropdown.Item>
            <Dropdown.Item renderAs="a" value="jewelery">jewelery</Dropdown.Item>
          </Dropdown>
        </div>
      <div className='product_list'>
        {isLoading ? <h2>Loading...</h2>:
        isSuccess && data.map(e => {
          return <Product 
          img={e.image}
          title={e.title}
          price={e.price}
          descr={e.description}/>
        })}
      </div>
    </>
  )
}

export default ProductList;
