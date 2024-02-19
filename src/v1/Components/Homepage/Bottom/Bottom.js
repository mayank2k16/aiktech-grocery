import React from 'react'
import './Bottom.scss';
import backImg from '../../../Assets/Images/footer/bottom.png';
import playStoreIcon from '../../../Assets/Images/playstore.png';
import appStoreIcon from '../../../Assets/Images/appstore.png';
import { useSelector } from 'react-redux';

const mapStateToProps = ({ auth  }) => ({
    auth,
  });

const Bottom = (props) => {
    const {auth} = useSelector(mapStateToProps);
    return (
        <div className='bottom-wrapper' style={{ backgroundImage: `url(${backImg})` }}>
            <p>Get your Grocery Delivered Instantly with {auth.tenantDetails?.title}</p>
            <div className='bottom-image'>
                {/* <img src={playStoreIcon} alt="" /> */}
                {/* <img src={appStoreIcon} alt="" /> */}
            </div>

        </div>
    )
}

export default Bottom