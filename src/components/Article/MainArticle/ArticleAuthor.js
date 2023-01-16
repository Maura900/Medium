import twitter from '../../../images/twitter.svg';
import facebook from '../../../images/facebook.svg';
import linkedin from '../../../images/linkedin.svg';
import share from '../../../images/share.svg';

export const ArticleAuthor = () => {
    return (
        <div className='main-article-author'>
            <div className='info d-flex align-items-center'>
                <div className='author-picture me-3'>
                    <img src='https://miro.medium.com/fit/c/96/96/1*XL5QclUh4RwVmsq8szytzg.png' alt='' />
                </div>
                <div className='details'>
                    <h3>Cassie Kozyrkov</h3>
                    <div className='date'>
                        <span>Dec 27, 2022</span>
                        <span>9 min read</span>
                    </div>
                </div>
            </div>
            <div className='social-icons d-flex align-items-center'>
                <a href='#'>
                    <img src={twitter} alt='' />
                </a>
                <a href='#'>
                    <img src={facebook} alt='' />
                </a>
                <a href='#'>
                    <img src={linkedin} alt='' />
                </a>
                <a href='#'>
                    <img src={share} alt='' />
                </a>
            </div>
        </div>
    );
};