import follow from '../../images/follow.svg';

export const Sidebar = () => {
    return (
        <div className='col-4 article-sidebar'>
            <div className='author-info'>
                <div className='picture'>
                    <img src='https://miro.medium.com/fit/c/176/176/1*i1WWOMu_4fGxDkzGtgJn2A@2x.jpeg' alt='' />
                </div>
                <h4>Cassie Kozyrkov</h4>
                <span>115K Followers</span>
                <p>
                    Chief Decision Scientist, Google. ❤️ Stats, ML/AI, data, puns, art, theatre, decision science. All
                    views are my own. twitter.com/quaesita
                </p>
                <div className='buttons d-flex align-items-center gap-2'>
                    <a href='#' className='follow-btn'>
                        Follow
                    </a>
                    <a href='#' className='subscribe-btn'>
                        <img src={follow} alt='' />
                    </a>
                </div>
            </div>

            <div className='more-from-medium'>
                <h5>More from Medium</h5>
                <div className='d-flex flex-column gap-4'>
                    <div className='suggested-article-card d-flex align-items-start justify-content-between'>
                        <div className='content'>
                            <div className='author d-flex align-items-center gap-2 mb-2'>
                                <img src='https://miro.medium.com/fit/c/25/25/1*L3EseGfcfGdmiwe56qrmgg.jpeg' alt='' />
                                <p>Kurtis Pykes</p>
                            </div>
                            <h5>Don’t Just Set Goals. Build Systems</h5>
                        </div>
                        <div className='picture'>
                            <img src='https://miro.medium.com/focal/70/70/50/50/0*V3XDwTwCJyUZQ2rS' alt='' />
                        </div>
                    </div>

                    <div className='suggested-article-card d-flex align-items-start justify-content-between'>
                        <div className='content'>
                            <div className='author d-flex align-items-center gap-2 mb-2'>
                                <img src='https://miro.medium.com/fit/c/25/25/1*L3EseGfcfGdmiwe56qrmgg.jpeg' alt='' />
                                <p>Kurtis Pykes</p>
                            </div>
                            <h5>How to Make Money While Learning Data Science in 2023</h5>
                        </div>
                        <div className='picture'>
                            <img src='https://miro.medium.com/focal/70/70/50/50/0*V3XDwTwCJyUZQ2rS' alt='' />
                        </div>
                    </div>

                    <div className='suggested-article-card d-flex align-items-start justify-content-between'>
                        <div className='content'>
                            <div className='author d-flex align-items-center gap-2 mb-2'>
                                <img src='https://miro.medium.com/fit/c/25/25/1*L3EseGfcfGdmiwe56qrmgg.jpeg' alt='' />
                                <p>Kurtis Pykes</p>
                            </div>
                            <h5>Don’t Just Set Goals. Build Systems</h5>
                        </div>
                        <div className='picture'>
                            <img src='https://miro.medium.com/focal/70/70/50/50/0*V3XDwTwCJyUZQ2rS' alt='' />
                        </div>
                    </div>

                    <div className='suggested-article-card d-flex align-items-start justify-content-between'>
                        <div className='content'>
                            <div className='author d-flex align-items-center gap-2 mb-2'>
                                <img src='https://miro.medium.com/fit/c/25/25/1*L3EseGfcfGdmiwe56qrmgg.jpeg' alt='' />
                                <p>Kurtis Pykes</p>
                            </div>
                            <h5>Don’t Just Set Goals. Build Systems</h5>
                        </div>
                        <div className='picture'>
                            <img src='https://miro.medium.com/focal/70/70/50/50/0*V3XDwTwCJyUZQ2rS' alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};