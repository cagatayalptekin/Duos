import React from 'react';
import footer_logo from '../../assets/raf_footer.svg';

const FooterLogo = () => {
    return (
        <div className='h-52 w-52 cursor-pointer my-auto rounded-full'>
            <img
                src={footer_logo}
                alt='Duos Logo'
                className='w-full h-full object-center'
            />
        </div>
    );
};

export default FooterLogo;
