import trendingIcon from '../../images/trending-news.svg';
import { TrendingArticle } from './TrendingNews/TrendingArticle';

export const TrendingNews = () => {
    const trendingNews = [
        {
            id: 1,
            title: `My 2022 End of Year Lists`,
            author: `Barack Obama`,
            date: `Dec 23, 2022`,
            length: 3,
            authorImg: `https://miro.medium.com/fit/c/40/40/1*AwBz4NW9_M45J-sBlmH-lA.png`,
        },
        {
            id: 2,
            title: `How to Make Money While Learning Data Science in 2023`,
            author: `Natassha Selvaraj`,
            date: `Dec 28, 2022`,
            length: 7,
            authorImg: `https://miro.medium.com/max/1200/1*CJe3891yB1A1mzMdqemkdg.jpeg`,
            category: `Towards Data Science`,
        },
        {
            id: 3,
            title: `He Used AI to See Today’s Looks of The Famous People From the Past`,
            author: `Maria Milojković, MA`,
            date: `Dec 28, 2022`,
            length: 10,
            authorImg: `https://miro.medium.com/max/2400/1*sdNz531wQVb6IIumcHF76g.jpeg`,
            category: `Lessons from History`,
        },
        {
            id: 4,
            title: `9 Python Built-In Decorators That Optimize Your Code Significantly`,
            author: `Yang Zhou`,
            date: `Jan 1`,
            length: 7,
            authorImg: `https://media.glassdoor.com/sqll/3022717/tech-freedom-squarelogo-1647604137664.png`,
            category: `TechToFreedom`,
        },
        {
            id: 5,
            title: `100 Favorite Albums of 2022`,
            author: `Hanif Abdurraqib`,
            date: `Dec 30, 2022`,
            length: 9,
            authorImg: `https://i.guim.co.uk/img/media/a487b22b8b4813ce64b6507033d32c6979cbeb53/0_61_5612_3367/master/5612.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=1980fbfef0ebfa4a4948c6e79823a5ad`,
        },
        {
            id: 6,
            title: `Structure Your React Project Like a Senior Developer`,
            author: `Christopher Clemmons`,
            date: `Dec 31, 2022`,
            length: 3,
            authorImg: `https://s3.amazonaws.com/ballotpedia-api4/files/thumbs/200/300/Chris_Clemmons.png`,
            category: `Level Up Coding`,
        },
    ];

    return (
        <div className='container trending-news'>
            <h4 className='trending-title d-flex align-items-center mb-4'>
                <img src={trendingIcon} alt='' />
                <span>Trending on medium</span>
            </h4>
            <div className='row'>
                {trendingNews.map((news) => (
                    <TrendingArticle news={news} />
                ))}
            </div>
        </div>
    );
};