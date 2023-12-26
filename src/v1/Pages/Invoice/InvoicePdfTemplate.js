import './InvoicePdfTemplate.scss'

import logoImg from "../../Assets/Images/navbar/new_logo.svg";

const InvoicePdfTemplate = () => {
    return (
        <div className="invoice-wrapper flex-column gap-20" id="invoice-slip-pdf">
            <header className='flex-row items-between gap-10'>
                <img src={logoImg} />
                <h2>
                    RealValueMart
                </h2>
            </header>
            <div>
                <div>
                    <h6>Shipping Address : </h6>
                    <ul className='ul-style-none'>
                        <li>
                            {`Madhu B`}
                        </li>
                        <li>
                            {`Eurofins IT Solutions India Pvt Ltd,, 1st Floor,`}<br/>
                            {`Maruti Platinum, Lakshminarayana Pura, AECS`}
                        </li>
                        <li>
                            {`BENGALURU, KARNATAKA, 560037`}
                        </li>
                    </ul>
                </div>
            </div>

            <div className='flex-row justify-between'>
                <ul className='ul-style-none'>
                    <li className='flex-row gap-10'>
                        <span className='font-bold'>Order No :</span>{`403-3225714-7676307`}
                    </li>
                    <li className='flex-row gap-10'>
                        <span className='font-bold'>Order Date :</span>{`28.10.2023`}
                    </li>
                </ul>
                <ul className='ul-style-none'>
                    <li className='flex-row gap-10'>
                        <span className='font-bold'>Invoice No :</span>{`IN-761`}
                    </li>
                    <li className='flex-row gap-10'>
                        <span className='font-bold'>Invoice Details :</span>{`KA-310565025-1920`}
                    </li>
                    <li className='flex-row gap-10'>
                        <span className='font-bold'>Invoice Date :</span>{`28.10.2023`}
                    </li>
                </ul>
            </div>

            <table>
                <thead className='flex-row thead'>
                    <th>
                        Sl <br/>
                        No.
                    </th>
                    <th>
                        Description
                    </th>
                    <th>
                        Unit <br/>
                        Price
                    </th>
                    <th>
                        Qty
                    </th>
                    <th>
                        Total <br/>
                        Price
                    </th>
                    <th>
                        Discount <br/>
                        Price
                    </th>
                </thead>

                <tbody className='tbody flex-column'>

                    {/* product section */}

                    <tr className='flex-row trow'>
                        <td>
                            {`1`}
                        </td>
                        <td>
                            {`Varasiddhi Silks Men's Formal Shirt (SH-05-42, Navy Blue, 42) |B07KGF3KW8 ( SH-05--42 `}
                        </td>
                        <td>
                            ₹{`546`}
                        </td>
                        <td>
                            {`1`}
                        </td>
                        <td>
                            ₹{`546`}
                        </td>
                        <td>
                            ₹{`546`}
                        </td>
                    </tr>
                    
                    <tr className='flex-row trow'>
                        <td>
                            {`1`}
                        </td>
                        <td>
                            {`Varasiddhi Silks Men's Formal Shirt (SH-05-42, Navy Blue, 42) |B07KGF3KW8 ( SH-05--42 `}
                        </td>
                        <td>
                            ₹{`546`}
                        </td>
                        <td>
                            {`1`}
                        </td>
                        <td>
                            ₹{`546`}
                        </td>
                        <td>
                            ₹{`546`}
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className='flex-row justify-end gap-20'>
                <span className='font-bold'>Total : </span>₹{`546`}
            </div>

        </div>
    )
}

export default InvoicePdfTemplate;