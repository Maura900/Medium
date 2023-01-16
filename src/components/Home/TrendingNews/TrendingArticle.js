export const TrendingArticle = ({ news }) => {
    return (
        <div className='col-4'>
            <article className='trending-article d-flex align-items-start'>
                <div className='number'>0{news.id}</div>
                <div className='content'>
                    <div className='info d-flex align-items-center'>
                        <img src={news.authorImg} alt={news.author} />
                        <p>
                            {news.author}
                            {news.category ? (
                                <>
                                    <span className='date mx-1'>in</span>
                                    {news.category}
                                </>
                            ) : (
                                ''
                            )}
                        </p>
                    </div>
                    <h4 className='title'>{news.title}</h4>
                    <div className='date'>
                        <span>{news.date}</span>
                        <span>{news.length} min read</span>
                    </div>
                </div>
            </article>
        </div>
    );
};