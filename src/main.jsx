import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import SidebarProvider from "./assets/Contexts/SidebarContext.jsx";
import CartProvider from "./assets/Contexts/CartContext.jsx";
import WishProvider from "./assets/Contexts/WishContext.jsx";

// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById("root")).render(
  <SidebarProvider>
    <CartProvider>
      <WishProvider>
        <React.StrictMode>
          <App />
          {/* <ToastContainer /> Add this line */}
        </React.StrictMode>
      </WishProvider>
    </CartProvider>
  </SidebarProvider>
);
