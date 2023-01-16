import { MainArticle } from '../components/Article/MainArticle';
import { MainButton } from '../components/Article/MainButton';
import { Sidebar } from '../components/Article/Sidebar';
import { SlimNav } from '../components/Article/SlimNav';
import authorPic from '../images/author-picture.png';
import followIcon from '../images/follow.svg';

export const Article = () => {
    return (
        <>
            <SlimNav />
            <div className='container-article'>
                <div className='row'>
                    <MainArticle />
                    <Sidebar />
                </div>
            </div>
        </>
    );
};