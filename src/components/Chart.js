import React from 'react';
import ChartRow from './ChartRow';
import {useState, useEffect} from 'react';



function Chart (){
    const [product, setProducts] = useState([]);
  
  useEffect(() => {
    
    fetch('/api/productos')
    .then(response => response.json())
    .then(product => 
      
      {setProducts(product.data)
      }
    )
    .catch(error => {console.log(error);})
  },[]);
  
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Descripción</th>
                                <th>Precio</th>
                                <th>Categoria</th>
                                <th>Stock</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Producto</th>
                                <th>Descripción</th>
                                <th>Precio</th>
                                <th>Categoria</th>
                                <th>Stock</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                           product.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;