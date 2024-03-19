import { SectionWrapper } from '../../hoc';

import FooterLogo from './FooterLogo';

import { FaArrowRight } from 'react-icons/fa';
import { IoMailSharp } from 'react-icons/io5';
import { FaSquarePhone, FaLocationDot } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='flex justify-between'>
            <FooterLogo />
            <div id='contact_container' className='text-white'>
                <div
                    id='header'
                    className='mb-10 pl-4 py-2 border-l-2 border-white'
                >
                    <h1 className='text-4xl'>İletişim Bilgileri</h1>
                </div>
                <div className='mb-3 flex items-center gap-x-2'>
                    <div>
                        <FaSquarePhone className='h-6 w-6' />
                    </div>
                    <p>+90 224 443 02 03</p>
                </div>
                <div className='mb-3 flex items-center gap-x-2'>
                    <div>
                        <IoMailSharp className='h-6 w-6' />
                    </div>
                    <p>info@duoscorp.com</p>
                    <div className='ml-3'>
                        <IoMailSharp className='h-6 w-6' />
                    </div>
                    <p>office@duoscorp.com</p>
                </div>
                <div className='flex items-center gap-x-2'>
                    <div>
                        <FaLocationDot className='h-6 w-6' />
                    </div>
                    <p>
                        Altınşehir Mah. 163.(280) Sk. B Apt. No:11 B / 64 Nilüfer
                        - Bursa / Türkiye
                    </p>
                </div>
                {/* #ffdbb7 -> turuncu */}
                <button className='bg-transparent border border-white transition-all hover:bg-white hover:text-primary text-white py-2 px-6 rounded-full mt-7 flex items-center'>
                    <div className='text-lg'>İletişim Formu</div>
                    <div className='ml-3'>
                        <FaArrowRight />
                    </div>
                </button>
            </div>
        </div>
    );
};

export default SectionWrapper(Footer);
