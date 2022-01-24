import React from 'react';
import imagenFondo from '../assets/images/mandalorian.jpg';
import { useEffect, useState } from 'react';

function LastMovieInDb(){

    const [product, setProducts] = useState([]);
  
  useEffect(() => {
   
    fetch('/api/productos')
    .then(response => response.json())
    .then(product => 
      
      {setProducts(product)}
      
    )
  
    .catch(error => {console.log(error);})
  },[]);
  let nombreProducto = product.data[((product.data).length)-1];
  console.log(nombreProducto)

    return(
        <>
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último Producto Agregado</h5>
                </div>
                
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
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
