import { SectionWrapper } from '../../hoc';

import Logo from './Logo';

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between py-8'>
            <Logo />
            <ul className='flex space-x-14 h-full items-center'>
                <li>
                    <a href='#' className='custom-link'>
                        Anasayfa
                    </a>
                </li>
                <li>
                    <a href='#' className='custom-link'>
                        Hakkımızda
                    </a>
                </li>
                <li>
                    <a href='#' className='custom-link'>
                        İletişim
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default SectionWrapper(Navbar);
