import  { Suspense } from 'react';
import Nav from './component/Nav';
import Banner from './component/Banner';
import Products from './component/Products';
import type { IProductTypeDeclared } from './component/ProductDataTypes/Product';
import { ToastContainer } from 'react-toastify';



const productDataFetch = async ():Promise<IProductTypeDeclared[]> => {
  const response = await fetch("/public/product.json");
  const data = await response.json();
  return data;
}


const App = () => {
  
const fetchData= productDataFetch();


  return (
    <div>


      <Nav/>
      <Banner/>

      <Suspense fallback={<h2>Loadding.... </h2>}>
          <Products fetchDataPushInProducts={fetchData}/>
      </Suspense>

      <ToastContainer />



    </div>
  );
};

export default App;