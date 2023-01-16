import star from '../../../images/star.svg';

export const ArticleCard = ({ article }) => {
    return (
        <article className='d-flex justify-content-between align-items-center article-card'>
            <div className='content'>
                <div className='author d-flex align-items-center mb-2'>
                    <img src={article.authorImg} alt={article.author} />
                    <p>
                        {article.author}
                        {article.category ? (
                            <>
                                <span style={{ color: '#757575' }}>in</span> {article.category}
                            </>
                        ) : (
                            ''
                        )}
                    </p>
                </div>

                <h3>{article.title}</h3>
                <p>{article.description}</p>

                <div className='infos'>
                    <span>{article.date}</span>
                    <span>{article.length} min read</span>
                    <span className='tag'>{article.tag}</span>
                    {article.featured ? <img src={star} alt='' /> : ''}
                </div>
            </div>
            <div className='article-picture'>
                <img src={article.articleImg} alt={article.title} />
            </div>
        </article>
    );
};