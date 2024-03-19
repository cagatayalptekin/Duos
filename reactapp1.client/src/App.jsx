import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import FooterContainer from './components/footer/FooterContainer';
import ProductsContainer from './components/products/ProductsContainer';
import Video from './components/video/Video';
import Contact from './components/contact/Contact';

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Video />
            <ProductsContainer />
            <Contact />
            <FooterContainer />
        </>
    );
}

export default App;
