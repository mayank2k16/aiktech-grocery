import React, { useState, useEffect } from 'react'
import './Invoice.scss';
import { useSelector } from 'react-redux';

const mapStateToProps = ({  auth }) => ({
    auth
  });

export default function Invoiceslip({ id, invoice }) {
    const {
        auth
      } = useSelector(mapStateToProps);
    
    const { data: invoiceDetails = {}, items: invoiceitem = [], final_delivery_charge = 0, packaging_charge = 0, promotional_discount, default_delivery_charge = 0 } = invoice || {}
    const { invoice_id, final_price = 0 } = invoiceDetails || {};

    
    return (
        <div className="invoice-details" id='invoice'>
            <div className="item-details">
                <h5 className="small_headline fill-color">GST-NO:- {auth.tenantDetails.business_details && 
                                                    auth.tenantDetails.business_details.hasOwnProperty("gst")
                                                        ? auth.tenantDetails.business_details["gst"]
                                                        : "N/A"}</h5>
                                                              
                <h5 className="small_headline fill-color">#{invoice_id}</h5>
                <div className="b-top w-100 mt-4"></div>
                <div className="table-wrapper">

                    <table className="table" id='invoice-table'>
                        <thead className='table-head'>
                            <th>Product</th>
                            <th>Qty</th>
                            <th>Price <small>(per unit)</small> </th>
                            <th>Total Price</th>
                            <th>Discount Price</th>
                        </thead>
                        <tbody className='table-row'>
                            {invoiceitem ?
                                invoiceitem.map((i, index) => (
                                    <>
                                        <tr key={index}>
                                            <td>{i.title ? i.title : "-"}{i.description ? ` (${i.description})` : ''}</td>

                                            <td>{parseFloat(i.quantity).toFixed(2)} {i.unit_id}</td>

                                            <td><span className="ruppe">₹</span>  {parseFloat(parseFloat(i.price)/i.quantity)!==0?parseFloat(parseFloat(i.price).toFixed(2)/i.quantity).toFixed(2): "pending"}</td>

                                            <td><span className="ruppe">₹</span>  {parseFloat(i.price)!==0? parseFloat(i.price).toFixed(2):"pending"}</td>

                                            <td><span className="ruppe">₹</span>  {parseFloat(i.final_price)!==0? parseFloat(i.final_price).toFixed(2): "pending"}</td>

                                        </tr>
                                    </>
                                ))
                                : null
                            }
                        </tbody>
                    </table>
                </div>


                {(promotional_discount?.code && promotional_discount?.value) &&
                    <div className={"discount-card-invoice"}>
                    <React.Fragment>
                        {promotional_discount.discount_code_type === "A" ?
                            <React.Fragment>
                                <div>Thanks For Purchasing, Use code <span className={"highlight-message"}>{promotional_discount.code}</span></div>
                                <div>and get flat {promotional_discount.value} Rs off on minimum order value of {promotional_discount.minimum_order_value} Rs on your next order !!</div>
                            </React.Fragment> :
                            <React.Fragment>
                                <div>Thanks For Purchasing, Use code <span className={"highlight-message"}>{promotional_discount.code}</span></div>
                                <div>and get {promotional_discount.value} % off upto {promotional_discount.maximum_discount} Rs for minimum order value of {promotional_discount.minimum_order_value} Rs on your next order !!</div>
                            </React.Fragment>
                        }
                    </React.Fragment>
                    </div>}
                    <div>
                    

                    </div>
                    
            </div>


            <div className="price-details">
                <h5 className="small_headline fill-color">PRICE DETAILS</h5>
                <div className="b-top w-100"></div>

                <div className="row p-2 mt-4">
                    <div className="col-lg-7 col-md-7 col-7 col-sm-7">Price</div>
                    <div className="col-lg-5 col-md-5 col-5 col-sm-5 text-end">{parseFloat(final_price)!==0 ? `₹${final_price - final_delivery_charge - packaging_charge}` : "pending"}</div>
                </div>
                <div className="row p-2 mt-2">
                    <div className="col-lg-7 col-md-7 col-7 col-sm-7">Delivery Charge</div>
                    <div className="col-lg-5 col-md-5 col-5 col-sm-5 text-end">{final_delivery_charge>default_delivery_charge ? `₹${default_delivery_charge}` : `₹${final_delivery_charge}`}</div>
                </div>
                {
                    final_delivery_charge>default_delivery_charge?
                    <div className="row p-2 mt-2">
                        <div className="col-lg-7 col-md-7 col-7 col-sm-7">Night Surcharge</div>
                        <div className="col-lg-5 col-md-5 col-5 col-sm-5 text-end">{`₹${final_delivery_charge-default_delivery_charge}`}</div>
                    </div>
                    :null
                }
                <div className="row p-2 mt-2">
                    <div className="col-lg-7 col-md-7 col-7 col-sm-7">Packaging Charge</div>
                    <div className="col-lg-5 col-md-5 col-5 col-sm-5 text-end">{packaging_charge ? `₹${packaging_charge}` : "-"}</div>
                </div>
                <div className="b-top w-100"></div>

                <div className="row p-2 mt-4 my-auto">
                    <div className="col-lg-7 col-md-7 col-7 col-sm-7">Total Amount</div>
                    <div className="col-lg-5 col-md-5 col-5 col-sm-5 text-end"><span className="ruppe">₹</span> {parseFloat(final_price)!==0?parseFloat(final_price).toFixed(2):"pending"}</div>
                </div>

                <div className="b-top w-100 mt-4"></div>

            </div>
            
        </div>
    )
}