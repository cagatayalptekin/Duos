import { SectionWrapper } from '../../hoc';

import Product from './Product';

const Products = () => {
    return (
        <div className='text-white'>
            <h1 className='text-center text-5xl'>Ürünlerimiz</h1>
            <div
                id='products_container'
                className='flex justify-between items-center mt-20'
            >
                <Product title='Depo Raf Sistemleri' />
                <Product title='Market Raf Sistemleri' />
                <Product title='Alışveriş Arabaları' />
                <Product title='Roll Arabaları' />
            </div>
        </div>
    );
};

export default SectionWrapper(Products);
