import React from 'react';
import { useEffect, useState, useRef, Component } from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let moviesInDB = {
    title: 'Movies in Data Base',
    color: 'primary', 
    cuantity: 21,
    icon: 'fa-clipboard-list'
}

/* <!-- Total awards --> */

let totalAwards = {
    title:' Total awards', 
    color:'success', 
    cuantity: '79',
    icon:'fa-award'
}

/* <!-- Actors quantity --> */

let actorsQuantity = {
    title:'Actors quantity' ,
    color:'warning',
    cuantity:'49',
    icon:'fa-user-check'
}

// function productosApi(){
//     useEffect(()=>{
//         fetch('/api/productos')
//         .then(productosJSON => productosJSON.json())
//         .then( productos => productos.count)
//     })
// }
// function usuariosApi(){
//     useEffect(()=>{
//         fetch('/api/users')
//         .then(usersJSON => usersJSON.json())
//         .then( users => users.count)
//     })
// }


// SMALL CARDS
class ContentRowProducts extends Component {
    constructor() {
      super();
      this.state = {
        listadoProductos: [],
      };
    }
    componentDidMount() {
      fetch("/api/productos")
        .then((respuesta) => {
          return respuesta.json();
        })
        .then((products) => {
          this.setState({
            listadoProductos: products,
          });
        })
        .catch((error) => console.log(error));
    }

render(){
    
        return (
            <>
           <div className="container-fluid">
          <div className="container-fluid">
                
                {this.state.listadoProductos.map((product, i) => {
    
                    return <SmallCard {...product} key={i}/>
                
                })}
            </div>
            </div>
            </>
        )
    }
}
export default ContentRowProducts;



