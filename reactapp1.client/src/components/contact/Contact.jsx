import { SectionWrapper } from '../../hoc';

import Form from './Form';
import Map from './Map';

const Contact = () => {
    return (
        <div className='my-40'>
            <h1 className='text-center text-primary text-5xl'>
                Bize Ulaşın
            </h1>
            <div className='flex h-[680px] mt-20 justify-between'>
                <Form />
                <Map />
            </div>
        </div>
    );
};

export default SectionWrapper(Contact);
