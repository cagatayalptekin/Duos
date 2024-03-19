const Product = ({ title }) => {
    return (
        <div>
            <div className='w-[280px] h-[250px] rounded-md bg-gray-200'></div>
            <h3 className='mt-4 text-center'>{title}</h3>
        </div>
    );
};

export default Product;
