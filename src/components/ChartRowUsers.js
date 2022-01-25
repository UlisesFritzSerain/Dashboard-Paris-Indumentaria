import React from 'react';


function ChartRowUsers(props){
    return (
        <tr>
                    <td>{props.id}</td>
                    <td>{props.first_name}</td>
                    <td>{props.last_name}</td>
                    <td>
                        <ul>
                            {props.email}
                        </ul>
                    </td>
                    
                </tr>
            )
    }
    
        

export default ChartRowUsers;