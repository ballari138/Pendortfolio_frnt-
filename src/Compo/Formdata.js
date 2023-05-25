import React, { useEffect, useState } from 'react'
import Service from '../Service/Service';
import './Formdata.css';
const Formdata = () => {
    const [data,setData]=useState({})
    const [themeData, setThemeData] = useState({
        data: [],
        loading: true
    })
    function del(themeName){
        Service.deleteTheme(themeName)
        .then((response)=>{
            setData(response.data)
        })
        .catch((error)=>{console.log(error)})
    }
    
    useEffect(()=>{
        Service.getData().then((response)=>{
            //console.log(response)
            setThemeData({
                data:response.data,
                loading:false
            })
        }).catch((error)=>{
            console.log(error)
        })
    },[data])

    //console.log(themeData)
    return (
        <div className="total">
            <div className="container table-center">
                <table >
                    <thead>
                        <tr >
                            <th>Theme Name</th>
                            <th>Investment Horizon</th>
                            <th>Risk</th>
                            <th>Commodities</th>
                            <th>Equities</th>
                            <th>Bonds</th>
                            <th> actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            themeData.loading?"":themeData.data.map((item,index)=>{
                                return (
                                    <tr key={item.themeName}>
                                        <td>{item.themeName}</td>
                                        <td>{item.investmentHorizon}</td>
                                        <td>{item.risk}</td>
                                        <td>{item.commodities}</td>
                                        <td>{item.equities}</td>
                                        <td>{item.bonds}</td>
                                        <td> 
                                            <div className="action-buttons button">
                                            { <button class="edit-btn"><i class="fa fa-pencil"></i></button> }
                                            <button  onClick={()=>del(item.themeName)}>-</button>
                                        </div>
                                        </td>
                                    </tr>
                                )
                            })    
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Formdata