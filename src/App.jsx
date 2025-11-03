import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './assets/components/Header/Header'
import { Footer } from './assets/components/Footer/Footer'
import { ItemListContainer } from './assets/components/ItemListContainer/ItemListContainer'

function App() {
  const arrayProductos = [
    {
      id: 1,
      nombre: "Remera",
      precio: 20000,
      descripcion: "Remara de algodon",
    },

    {
      id: 2,
      nombre: "Pantalon",
      precio: 8000, descripcion: "Pantalon de jean",
    },
    {
      id: 3,
      nombre: "Zapatillas",
      precio: 110000,
      descripcion: "Zapatillas deportivas",
    }
  ];
  //const prod = { nombre: "REmera", precio: 10000, descripcion: "lalala"};

  return (
    <>
      <div>
        <Header />
        <ItemListContainer titulo={"Bienvenidos a la tienda de Embark"}
          productos={arrayProductos}
        />
        <Footer />
      </div>
    </>
  );
}

export default App
