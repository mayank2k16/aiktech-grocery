import React from 'react'
import { Addonbanner, TextHeading, Paragraph } from '../../Components'
import '../Terms/Terms.scss'
import { useSelector } from 'react-redux';

const mapStateToProps = ({ auth  }) => ({
  auth,
});

export default function Privacypolicy() {
  const {auth} = useSelector(mapStateToProps);
  return (
    <div>
        <Addonbanner heading="Useful Information" smallheading="Last updated: Febaury 22, 2022"/>
        
        <div className='addon-container'>
            <div className='addon-content'>
                <TextHeading fontWeight="bold" heading="About Us" id="Aboutus"/>
                <Paragraph lineHeight="2rem" text={auth.tenantDetails?.template_configs[0]?.config?.about_us?.description} />
                <br />
                
                <TextHeading fontWeight="bold" heading="Terms & conditions" id="TermsConditions" />
                <Paragraph lineHeight="2rem" text={auth.tenantDetails?.template_configs[0]?.config?.tnc?.description}/>
                <br />
                
                <TextHeading fontWeight="bold" heading={` ${auth.tenantDetails?.title} Delivery Services`} id="PhurtiDeliveryServices" />
                <Paragraph lineHeight="2rem" text={auth.tenantDetails?.template_configs[0]?.config?.delivery_services?.description}/>
                <br />
                
                <TextHeading fontWeight="bold" heading="Payment Methods" id="PaymentMethods"/>
                <Paragraph lineHeight="2rem" text="We accept Cash on Delivery(COD) and all type of online payment." />
                <br />

                <TextHeading fontWeight="bold" heading="Return Policy" id="ReturnPolicy" />
                <Paragraph lineHeight="2rem" text={auth.tenantDetails?.template_configs[0]?.config?.return_policy?.description} />
                <br />

                <TextHeading fontWeight="bold" heading="Privacy Policy" id="PrivacyPolicy"/>
                <Paragraph lineHeight="2rem" text={auth.tenantDetails?.template_configs[0]?.config?.privacy_policy?.description} />
                <br />
                
                <Paragraph lineHeight="2rem" text="We may use personal information in an aggregate form (i.e., not individually attributable to you) for business analysis, operational, marketing and other promotional purposes. These policies may be amended by us at any time and without notice but will be posted on this page. You agree that your continued use of our website and products after that date will constitute your consent and acceptance of the amendment." />
                 
                <br />

                {/* Contact Us Start  */}
                <TextHeading fontWeight="bold" heading="Contact Us" id="ContactUs"/>
                {/* <br /> */}

                <TextHeading fontWeight="bold" heading="Address"  fontSize=".8rem"/>
                <Paragraph lineHeight="2rem" text={auth.tenantDetails?.template_configs[0]?.config?.home?.footer?.contact_details[0]?.address} />
                
                <br />
                
                <TextHeading fontWeight="bold" heading="Phone"  fontSize=".8rem"/>
                <a href={`tel:${auth.tenantDetails?.template_configs[0]?.config?.home?.footer?.contact_details[0]?.phone_number}`}>
                  <Paragraph fontWeight="bold" text= {auth.tenantDetails?.template_configs[0]?.config?.home?.footer?.contact_details[0]?.phone_number} />
                </a>

                <br />
                
                <TextHeading fontWeight="bold" heading="E-mail"  fontSize=".8rem"/>
                <a href={`mailto:${auth.tenantDetails?.template_configs[0]?.config?.home?.footer?.contact_details[0]?.email}`}>
                  <Paragraph fontWeight="bold" text={auth.tenantDetails?.template_configs[0]?.config?.home?.footer?.contact_details[0]?.email} />
                </a>

              
                {/* Contact Us End  */}




            </div>
        </div>
        {/* <div className="addonCenter" id="ContactUs">
          <Paragraph text="For any further queries, drop us an email at" lineHeight="2rem"/>
          <a href="mailto:tech@phurti.in">
            <TextHeading fontWeight="bold" heading="team@phurti.in" id="PrivacyPolicy" fontSize="1.5rem"/> 
          </a>

        </div> */}
    </div>
  )
}
