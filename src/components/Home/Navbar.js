import logoBig from '../../images/logo-big.svg';

export const Navbar = () => {
    return (
        <header>
            <div className='container d-flex justify-content-between align-items-center py-3'>
                <div>
                    <img src={logoBig} alt='' />
                </div>
                <nav>
                    <ul className='d-flex main-nav align-items-center'>
                        <li>
                            <a href='#'>Our Story</a>
                        </li>
                        <li>
                            <a href='#'>Membership</a>
                        </li>
                        <li>
                            <a href='#'>Write</a>
                        </li>
                        <li>
                            <a href='#'>Sign In</a>
                        </li>
                        <li>
                            <a href='#' className='btn home-btn'>
                                Get Started
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};