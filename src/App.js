import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "react-use-cart";
import Container from '@mui/material/Container';
import Navbar from "./compont/Navbar";
import Home from "./compont/Home";
import ProductInventory from "./compont/ProductInventory";
import Cart from "./compont/Cart";
import { Routes, Route } from 'react-router-dom';
import ProductTable from "./compont/ProductTable";
import Login from "./compont/Login";
import Registration from "./compont/Registration";
import Grid from '@mui/material/Grid'; 

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <CartProvider>
              <Container>
                <Grid container spacing={0}>
                  <Grid item xs={5} md={8}>
                    <Home />
                  </Grid>
                  <Grid item xs={2} md={4}>
                    <Cart />
                  </Grid>
                </Grid>
              </Container>
            </CartProvider>
          </>
        } />
        
        <Route path='/ProductInventory' element={<ProductInventory />} />
        <Route path='/ProductTable' element={<ProductTable />} />
        
        <Route path='/Login' element={<Login />} />
        <Route path='/Registration' element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
