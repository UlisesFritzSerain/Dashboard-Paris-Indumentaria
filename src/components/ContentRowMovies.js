import React from 'react';
import { useEffect, useState, useRef} from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

function ContentRowProducts(){
const [product, setProducts] = useState([]);
  
  useEffect(() => {
    
    fetch('/api/productos')
    .then(response => response.json())
    .then(product => 
      
      {setProducts(product)
      }
    )
    .catch(error => {console.log(error);})
  },[]);

  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    
    fetch('/api/users')
    .then(response => response.json())
    .then(users => 
      
      {setUsers(users)
      }
    )
    .catch(error => {console.log(error);})
  },[])


/* <!-- Movies in DB --> */

let totalProducts = {
  title: 'Cantidad de Productos',
  color: 'primary', 
  cuantity: product.count,
  icon: 'fa-clipboard-list'
}

/* <!-- Total awards --> */

let totalCategorias = {
  title:' Total de Categorias', 
  color:'success', 
  cuantity: product.category,
  icon:'fas fa-tshirt'
}

/* <!-- Actors quantity --> */

let totalUsuarios = {
  title:'Cantidad de Usuarios' ,
  color:'warning',
  cuantity: users.count,
  icon:'fa-user-check'
}
// SMALL CARDS
     
    
let cartProps = [totalProducts, totalCategorias, totalUsuarios];

return (

    <div className=" row">
        
        {cartProps.map( (movie, i) => {

            return <SmallCard {...movie} key={i}/>
        
        })}

    </div>
)

  }  

export default ContentRowProducts;



