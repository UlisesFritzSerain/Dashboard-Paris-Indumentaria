
// CATEGORIAS DE PRODUCTOS

import React from "react";
import {useEffect, useState} from 'react';

function LastMovieInDb() {

  const [products, setProducts] = useState([]);
  
  useEffect(() => {
   
    fetch('/api/productos')
    .then(response => response.json())
    .then(products => setProducts(products))  
    .catch(error => {console.log(error)})
  },[]);
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Categorias
          </h5>
        </div>

    

        <div className="card-body">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Remeras
                <p className="mostrar-cantidad">Cantidad: {products.remeras} </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Buzos
                <p className="mostrar-cantidad">Cantidad: {products.buzos} </p>
                </div>
                
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Pantalones
                <p className="mostrar-cantidad">Cantidad: {products.pantalones} </p>
                </div>
               
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Camisas
                <p className="mostrar-cantidad">Cantidad: {products.camisas} </p></div>
                
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Trajes de Baño
                <p className="mostrar-cantidad">Cantidad: {products.mallas} </p>
                </div>
               
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Medias
                <p className="mostrar-cantidad">Cantidad: {products.medias} </p>
                </div>
               
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Gorras
                <p className="mostrar-cantidad">Cantidad: {products.gorras} </p></div>
               
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Camperas
                <p className="mostrar-cantidad">Cantidad: {products.camperas} </p></div>
               
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Bermudas
                <p className="mostrar-cantidad">Cantidad: {products.bermudas} </p></div>
              
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Accesorios
                <p className="mostrar-cantidad">Cantidad: {products.accesorios} </p></div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastMovieInDb;
