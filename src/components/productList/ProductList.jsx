import React from 'react'
import Product from '../poroduct';
import { Dropdown, Icon } from 'react-bulma-components';
import { useGetGoodsQuery, useGetByCategoryQuery } from '../../services/shop';
import "./ProductLIst.scss"

function ProductList() {
  const { isSuccess, data} = useGetGoodsQuery()
 
  return (
    <>
      <div className="filter">
          <h3> Category: </h3> 
          <Dropdown label="Category:" closeOnSelect={false} icon={<Icon><i aria-hidden="false" className="fas fa-angle-down"/></Icon>}>
            <Dropdown.Item >mens</Dropdown.Item>
            <Dropdown.Item renderAs="a" value="woman">woman</Dropdown.Item>
            <Dropdown.Item renderAs="a" value="jewelary">jewelery</Dropdown.Item>
          </Dropdown>
        </div>
      <div className='product_list'>
        {isSuccess && data.map(e => {
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
