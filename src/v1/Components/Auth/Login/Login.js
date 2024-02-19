import React, { useState } from 'react';
import '../Auth.scss';
import { Button, InputField } from '../../../Components';
import { findError } from '../../../Utils';
import { useSelector } from 'react-redux';

const mapStateToProps = ({ auth  }) => ({
  auth,
});

export default function Login({ submitHandler, controls, errors, showErr, onChange, loading }) {
  const { phone_number, password } = controls;
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const {auth} = useSelector(mapStateToProps);
  console.log(auth.tenantDetails?.template_configs[0]?.config?.home?.header?.login_signup?.login_via_voice_otp);

  return (
    <div className="signup-content login-content">
      <InputField
        type='number'
        placeholder='Mobile Number'
        value={phone_number}
        onChange={(e) => onChange(e, 'PHONE')}
        error={findError('phone_number', errors, showErr)}
      />
       {
         auth.tenantDetails?.template_configs[0]?.config?.home?.header?.login_signup?.login_via_voice_otp &&
        <Button loading={loading} text={'Login via voice OTP'} width='80%' margin='0.5rem auto' type={'button'} clicker={submitHandler} />
       }
    </div>
  );
}
