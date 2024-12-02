import { Route, Routes } from "react-router-dom";

import HomeScreen from "../modules/auth/screen/HomeScreen";
import LoginScreen from "../modules/auth/screen/LoginScreen";
import BuscarScreen from "../modules/auth/screen/BuscarScreen";
import DetalleProducto from "../modules/auth/screen/DetalleProducto";
import CarritoScreen from "../modules/auth/screen/CarritoScreen";



const AppNavigator=()=>{
  return(
    <Routes>
       <Route path="/" element={<HomeScreen/>} />
        <Route path="/pe/es/logon" element={<LoginScreen></LoginScreen>} />
        <Route path="/pe/es/search/home" element={<BuscarScreen />} />
        <Route path="/detalle/:id" element={<DetalleProducto />} />
        <Route path="/pe/es/shop/cart" element={<CarritoScreen />} />
       

    </Routes>


  );



}

export default AppNavigator;