const Form = () => {
    return (
        <form className='h-full w-[450px] flex flex-col justify-center px-8 bg-white border border-secondary rounded-lg'>
            <label
                htmlFor='advesoyad'
                className='text-primary text-lg ml-1 mb-1'
            >
                Ad ve Soyad
            </label>
            <input
                type='text'
                name='advesoyad'
                id='advesoyad'
                className='rounded-full py-2 px-3 border border-secondary mb-5 outline-none'
            />
            <label
                htmlFor='email'
                className='text-primary text-lg ml-1 mb-1'
            >
                Email
            </label>
            <input
                type='email'
                name='email'
                id='email'
                className='rounded-full py-2 px-3 border border-secondary mb-5 outline-none'
            />
            <label
                htmlFor='numara'
                className='text-primary text-lg ml-1 mb-1'
            >
                Numara
            </label>
            <input
                type='text'
                name='numara'
                id='numara'
                className='rounded-full py-2 px-3 border border-secondary mb-5 outline-none'
            />
            <label
                htmlFor='message'
                className='text-primary text-lg ml-1 mb-1'
            >
                Mesajınız
            </label>
            <textarea
                name='message'
                id='message'
                className='rounded-2xl py-2 px-3 border border-secondary outline-none'
                rows='8'
            />
            <button
                className='self-start bg-primary text-white mt-6 py-2 px-6 rounded-full'
                type='submit'
            >
                Gönder
            </button>
        </form>
    );
};

export default Form;
