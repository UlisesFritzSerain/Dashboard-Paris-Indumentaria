import React from 'react';
import imagen from '../assets/images/mandalorian.jpg';
import { useEffect, useState } from 'react';

function LastMovieInDb(){

    const [products, setProducts] = useState([]);
  
  useEffect(() => {
   
    fetch('/api/productos')
    .then(response => response.json())
    .then(products => setProducts(products.last))  
    .catch(error => {console.log(error)})
  },[]);
    console.log(products.name);
    let nombreProducto = products.name;
    // let imagen = '../assets/images/1634059312561_img_.jpg';

    return(
        <>
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último Producto Agregado</h5>
                </div>
                
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagen} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <p>{nombreProducto}</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
                </div>
               
            </div>
        </div>
        </>
    )
}

export default LastMovieInDb;
