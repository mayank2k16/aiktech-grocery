import React, { useContext, useEffect, useState } from "react"
import './CardOrders.scss'
import {  useHistory } from "react-router-dom";
import { getBaseUrl } from "../../Lib/NetworkHandler";
import axios from "axios";


const CardOrders=({order})=>{
    const history=useHistory();
    
    const formatTime=(time)=>{
        const timestamp = new Date(time);
        const formattedDate = `${timestamp.getMonth() + 1}/${timestamp.getDate()}/${timestamp.getFullYear() % 100},`;
        const period = timestamp.getHours() >= 12 ? "PM" : "AM"
        const hours=(timestamp.getHours()) % 12
        const formattedTime=`${hours}:${timestamp.getMinutes()} ${period}`
        return `${formattedDate} ${formattedTime}`
    }
    const orderItemsDisplay=()=>{
        console.log("localstorage");
        console.log(localStorage);
            const config={
                params:{
                    "id":order.id
                },
                headers: {
                    'Content-Type': 'application/json', 
                },
            }
            localStorage.setItem(`${order.id}`,"1");
            axios.get(`${getBaseUrl()}/api/shop/order/items/`,config)
            .then((response)=>{
                console.log(response.data.message);
                const data =response.data.message;
                history.push({pathname:'/orderItems',state:data})
            }).catch((err)=>{
                console.error(err.message)
            })
    }
    
  
    return (
        <div>
            
        <div className="cardorder">
            <div className="cardorder-heading" style={(localStorage.getItem(`${order.id}`)==="1")?{"backgroundColor":"rgb(248,222,197)"}:{"backgroundColor":"rgb(215,234,215)"}}>{order.status}</div>
            <div className="cardorder-quantity">{order.id}</div>
            <div className="cardorder-price">Total: ₹ {parseFloat(order.total_price).toFixed(2)}</div>
            <div className="cardorder-date">Created at : {formatTime(order.created_on)}</div>
            <div>
            </div>
	    <div className="cardorder-customer">
                <div className="cardorder-customer-details">
                    Customer Name: {order.customer.name}
                </div>

                <div className="cardorder-customer-details">
                    Contact Number: {order.customer.phone_number}
                </div>

            </div>
            <div className="cardorder-address">
                Address: {order.fulfilment_address}
            </div>
            <div className="cardorder-button-wrapper">
                <button 
                className="cardorder-open-button"
                onClick={orderItemsDisplay}       
                >open</button>
            </div>
        </div>
        
        </div>
    )
}

export default CardOrders;
