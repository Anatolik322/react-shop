import {
  useGetByCategoryQuery,
  useGetByPaginationQuery,
  useState,
  Product,
  LoadingImg,
  Dropdown,
  Icon,
  Pagination
} from './imports'


function ProductList() {
  
  const [category, setCategory] = useState(null);
  const [page, setPage] = useState(1);
  const {isSuccess, isFetching, isLoading, data} = useGetByCategoryQuery(category);
  const { isSuccess: pageS, data: pageD, isFetching: pageFetch, isLoading: pageLoad} = useGetByPaginationQuery(page)
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
        {category == null ?
        pageLoad || pageFetch ? <img src={LoadingImg}></img>:
        pageS && pageD.products.map(e => {
          return <Product
          img={e.images[0]}
          title={e.title}
          price={e.price}
          descr={e.description}
          key={Math.random()}
          id={e.id}
          isInCart={false}/>
        }):
        isLoading || isFetching ? <img src={LoadingImg}></img>:
        isSuccess && data.products.map(e => {
          return <Product 
          img={isLoading || isFetching ? LoadingImg : e.images[0]}
          title={e.title}
          price={e.price}
          descr={e.description}
          key={Math.random()}
          id={e.id}
          isInCart={false}/>
        })}
      </div>
      {category == null && <Pagination
        className='pagination'
        current={page}
        showFirstLast
        onChange={(e) => {
          setPage(e);
          window.scrollTo({
            top: 700,
            left: 0,
            behavior: 'smooth' 
          });
        }}
        total={5}
        align='center'
      />}
     
    </>
  )
}

export default ProductList;
