import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import AddProducts from "./components/AddProduct";
import ProductList from "./components/ProductsList";
import EditProduct from "./components/EditProduct";
function App(){
  return(
    <Router>
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
              <Routes>
               <Route exact path="/" element={<ProductList />} ></Route>
               <Route path="/add" element={<AddProducts />}></Route>
               <Route path="/Edit/:id" element={<EditProduct />} ></Route>
               
             </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
 export default App;
