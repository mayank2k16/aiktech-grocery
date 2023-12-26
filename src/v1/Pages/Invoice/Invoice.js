import React from 'react'
import Invoiceslip from './Invoiceslip'
import './Invoice.scss'
import { useParams } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import htmlToPdfMake from 'html-to-pdfmake';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import InvoicePdfTemplate from './InvoicePdfTemplate';
import ReactDOMServer from "react-dom/server";

import Button from '../../Components/Homepage/Button/Button';

import html2pdf from 'html2pdf.js';

pdfMake.vfs = pdfFonts.pdfMake.vfs;
export default function Invoice(props) {

    const { orderid } = useParams();
    console.log(orderid, "order id");

    const doc = new jsPDF();

    const handleDownloadInvoice = () => {
        // doc.autoTable({html:'.invoice-container'})
        // doc.save('invoice.pdf')

        // const pdfContent=ReactDOMServer.renderToStaticMarkup(<InvoicePdfTemplate/>)

        // const pdfMakeContent = htmlToPdfMake(pdfContent);
        // const pdfDoc = {
        //     content: [pdfMakeContent],
        //   };
        // pdfMake.createPdf(pdfDoc).download('invoice.pdf');

        const inputElement = document.getElementById('invoice-slip-pdf');

        if (inputElement) {
            html2pdf(inputElement, {
                margin: 10,
                filename: 'output.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
            }).then((pdf) => {
                const blob = pdf.output('blob');
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'output.pdf';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            });
        }

    };


    return (
        <>
            <div className="invoice-container">
                <Invoiceslip id={orderid} />

                <div style={{
                    transform: 'translateX(200%)',
                    position: 'absolute',
                }}>
                    <InvoicePdfTemplate />
                </div>
            </div>
            <div style={{
                backgroundColor :'#f2f2f2',
                display : 'flex',
                justifyContent : 'center', 
                paddingBottom : '2rem'
            }}>
                <Button
                    text="Download Invoice"
                    clicker={handleDownloadInvoice}
                />
            </div>
        </>
    )
}