const SectionWrapper = (Component) =>
    function HOC() {
        return (
            <section className='mx-auto relative z-0 max-w-7xl'>
                <Component />
            </section>
        );
    };

export default SectionWrapper;
