import { SectionWrapper } from '../../hoc';

const Video = () => {
    return (
        <div className='my-40 w-full h-[600px] bg-gray-200 rounded-md flex items-center justify-center'>
            <div className='text-center text-xl font-bold'>VİDEO</div>
        </div>
    );
};

export default SectionWrapper(Video);
