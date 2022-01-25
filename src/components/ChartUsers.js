import React from 'react';
import ChartRowUsers from './ChartRowUsers';
import {useState, useEffect} from 'react';



function ChartUsers (){
    const [user, setUsers] = useState([]);
  
  useEffect(() => {
    
    fetch('/api/users')
    .then(response => response.json())
    .then(user => 
      
      {setUsers(user.users)
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
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Email Registrado</th>
                                
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Email Registrado</th>
                                
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                        
                           user.map( ( row , i) => {
                                return <ChartRowUsers { ...row} key={i}/>
                            })
                            
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default ChartUsers;