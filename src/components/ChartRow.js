import React from 'react';


function ChartRow(props){
    return (
        <tr>
                    <td>{props.name}</td>
                    <td>{props.description}</td>
                    <td>{props.price}</td>
                    <td>
                        <ul>
                            {props.category_id}
                        </ul>
                    </td>
                    <td>{props.stock}</td>
                </tr>
            )
    }
    
        

export default ChartRow;