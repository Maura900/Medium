import { ArticleCard } from './MainArticles/ArticleCard';
import articles from '../../articles.json';

export const MainArticles = () => {
    const tags = [
        'Programming',
        'Data Science',
        'Technology',
        'Self Improvement',
        'Writing',
        'Relationships',
        'Machine Learning',
        'Productivity',
        'Politics',
    ];

    const sidebarMenuItems = [
        { label: 'Help', link: '#' },
        { label: 'Status', link: '#' },
        { label: 'Writers', link: '#' },
        { label: 'Blog', link: '#' },
        { label: 'Careers', link: '#' },
        { label: 'Privacy', link: '#' },
        { label: 'Terms', link: '#' },
        { label: 'About', link: '#' },
        { label: 'Text to speech', link: '#' },
    ];

    return (
        <div className='main-articles'>
            <div className='container'>
                <div className='row'>
                    <div className='col-8 p-0'>
                        <div className='articles-wrapper'>
                            {articles.articles.map((article) => (
                                <ArticleCard article={article} key={`article-${article.id}`} />
                            ))}
                        </div>
                    </div>
                    <div className='col-4 p-0'>
                        <div className='article-tags'>
                            <h4>Discover more of what matters to you</h4>
                            <div className='d-flex flex-wrap'>
                                {tags.map((tag) => (
                                    <div className='single-tag'>{tag}</div>
                                ))}
                            </div>
                        </div>

                        <div className='sidebar-menu d-flex flex-wrap'>
                            {sidebarMenuItems.map((item) => (
                                <a href={item.link}>{item.label}</a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};