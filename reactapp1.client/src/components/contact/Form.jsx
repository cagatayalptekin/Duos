


const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Here, access form data using event.target.elements or a library like React Hook Form

    // Example using event.target.elements
    const formData = {
        AdSoyad: event.target.elements.advesoyad.value,
        Email: event.target.elements.email.value,
        Numara: event.target.elements.numara.value,
        Mesaj: event.target.elements.message.value,
    };
    console.log(formData)
    fetch('https://localhost:7219/api/email/send', {
        method: 'POST',
        body: JSON.stringify(formData), // Convert object to JSON string
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Origin': 'http://localhost:5173' },
    })
        .then(response => response.json()) // Handle response from controller
        .catch(error => console.error(error));

     
};



const Form = () => {
    return (
        <form onSubmit={handleSubmit} className='h-full w-[450px] flex flex-col justify-center px-8 bg-white border border-secondary rounded-lg'>
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




