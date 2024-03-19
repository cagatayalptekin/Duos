import raf_logo from '../../assets/raf_logo.svg';

const Logo = () => {
    return (
        <div className='w-44 h-16 cursor-pointer'>
            <img
                src={raf_logo}
                alt='Duos Logo'
                className='w-full h-full object-center'
            />
        </div>
    );
};

export default Logo;
