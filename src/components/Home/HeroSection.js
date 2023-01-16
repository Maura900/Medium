import heroSectionPicture from '../../images/hero-section.svg';

export const HeroSection = () => {
    return (
        <div className='hero-section position-relative'>
            <div className='position-absolute end-0 bottom-0 '>
                <img src={heroSectionPicture} alt='' />
            </div>
            <div className='container d-flex mt-4'>
                <div className='hero-content'>
                    <h1>Stay curious</h1>
                    <p>Discover stories, thinking, and expertise from writers on any topic.</p>
                    <a href='#' className='btn'>
                        Start reading
                    </a>
                </div>
            </div>
        </div>
    );
};