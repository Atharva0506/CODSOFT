"use client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Catalog from "@/components/ProductCatalog/ProductCatalog";
import Cart from "@/components/cart/cart";
import Footer from "@/components/Footer/Footer";
import { ShoppingCartProvider } from "@/context/ShoppingCartContext";
import { Toaster } from "react-hot-toast";
import { useEffect } from 'react';
export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') { 
    }
  }, []);
  return (
    <main>
      <BrowserRouter>
        <ShoppingCartProvider>
          <Toaster position="top-center" reverseOrder={false} />
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Catalog />
                </>
              }
            ></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
          <Footer />
        </ShoppingCartProvider>
      </BrowserRouter>
    </main>
  );
}
