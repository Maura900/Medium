import twitter from '../../images/twitter.svg';
import facebook from '../../images/facebook.svg';
import linkedin from '../../images/linkedin.svg';
import share from '../../images/share.svg';
import clap from '../../images/clap.svg';
import responses from '../../images/responses.svg';
import articleShare from '../../images/article-share.svg';
import bookmark from '../../images/bookmark.svg';
import follow from '../../images/follow.svg';

export const MainArticle = () => {
    return (
        <div className='col-8 main-article-wrapper'>
            <div className='ps-4'>
                <div style={{ paddingRight: 72 }}>
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
                    <div className='main-content'>
                        <h1 className='content-title'>The best New Year’s resolutions you can make</h1>
                        <h5 className='content-subtitle'>
                            Resolutions that actually work, according to a decision scientist
                        </h5>
                        <p className='content-desc'>
                            Happy almost-2023! Chances are that you’re contemplating making some New Year’s resolutions,
                            so let’s get you set up for success with a few resolutions that will unlock the best version
                            of you.
                        </p>
                        <img src='https://miro.medium.com/max/1400/1*IPZF1hcDWwpPqOz2vL7NxQ.webp' alt='' />
                        <p className='imgCaption'>All copyright belongs to the author.</p>
                        <div className='extra-content'>
                            <h2>#1 — Resolve to stop borrowing resolutions</h2>
                            <p>
                                Different people are different, so what works for you might not be what works for anyone
                                else.
                            </p>
                            <p>
                                Understanding this is the single biggest step you can take in the direction of success.
                                That’s precisely why I’m not going to do the standard guru thing of suggesting you copy
                                my exact wellness plan after proving to you that I have a stack of credentials (I do)
                                and I’m in shape (I am). My plan fits me, but you need a plan that fits you.
                            </p>
                            <h2>Quit borrowing other people’s resolutions</h2>
                            <p>
                                Whenever you’re tempted to copy your favorite celeb’s latest health plan, take a moment
                                to think about some potential reasons that person is able to stick with it (assuming
                                they are) which you might not know about. Do they have a private chef who prevents them
                                from making food decisions? Do they secretly loooove cabbage? Is their job less
                                stressful than yours? And so on.
                            </p>
                        </div>
                        <div className='social-section d-flex align-items-center justify-content-between'>
                            <div className='d-flex align-items-center gap-4'>
                                <div className='d-flex align-items-center gap-2'>
                                    <img src={clap} alt='' />
                                    <span>1.5K</span>
                                </div>
                                <div className='d-flex align-items-center gap-2'>
                                    <img src={responses} alt='' />
                                    <span>30</span>
                                </div>
                            </div>

                            <div className='d-flex align-items-center gap-4'>
                                <img src={articleShare} alt='' />
                                <img src={bookmark} alt='' />
                            </div>
                        </div>
                        <div className='related-tags d-flex gap-2 flex-wrap mb-4'>
                            <div>Resolutions</div>
                            <div>Decision Making</div>
                            <div>Psychology</div>
                            <div>Self Improvement</div>
                            <div>Science</div>
                        </div>
                    </div>
                </div>
                <div className='pe-4 more-from-author'>
                    <div className='author-info'>
                        <div className='header d-flex align-items-center justify-content-between mb-2'>
                            <h2>More from Cassie Kozyrkov</h2>
                            <div className='buttons d-flex align-items-center gap-2'>
                                <a href='#' className='follow-btn'>
                                    Follow
                                </a>
                                <a href='#' className='subscribe-btn'>
                                    <img src={follow} alt='' />
                                </a>
                            </div>
                        </div>
                        <p>
                            Chief Decision Scientist, Google. ❤️ Stats, ML/AI, data, puns, art, theatre, decision
                            science. All views are my own. twitter.com/quaesita
                        </p>
                    </div>
                    <div className='more-articles pt-4'>
                        <div className='more-article-wrapper ps-4'>
                            <hr />
                            <div className='more-article-card'>
                                <p className='date'>Dec 24, 2022</p>
                                <div className='d-flex align-items-start justify-content-between'>
                                    <div className='content'>
                                        <h2>2022: The year that changed the way we work</h2>
                                        <p>
                                            Remember 2020? So many of us thought that was going to be the big one for
                                            the way we work. I thought it would be the year that changes productivity
                                            forever. And in many ways it was; it forced us to spring clean our dusty
                                            attic of beliefs about what…
                                        </p>
                                        <div className='infos d-flex gap-2 align-items-center'>
                                            <a href='#' className='tag'>
                                                Productivity
                                            </a>
                                            <span>8 min read</span>
                                        </div>
                                    </div>
                                    <div className='picture'>
                                        <img
                                            src='https://miro.medium.com/fit/c/250/168/1*-kbWgTfVb3CZZ6xS6i8O9g.png'
                                            alt=''
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='more-article-wrapper ps-4'>
                            <hr />
                            <div className='more-article-card'>
                                <p className='date'>Dec 24, 2022</p>
                                <div className='d-flex align-items-start justify-content-between'>
                                    <div className='content'>
                                        <h2>2022: The year that changed the way we work</h2>
                                        <p>
                                            Remember 2020? So many of us thought that was going to be the big one for
                                            the way we work. I thought it would be the year that changes productivity
                                            forever. And in many ways it was; it forced us to spring clean our dusty
                                            attic of beliefs about what…
                                        </p>
                                        <div className='infos d-flex gap-2 align-items-center'>
                                            <a href='#' className='tag'>
                                                Productivity
                                            </a>
                                            <span>8 min read</span>
                                        </div>
                                    </div>
                                    <div className='picture'>
                                        <img
                                            src='https://miro.medium.com/fit/c/250/168/1*-kbWgTfVb3CZZ6xS6i8O9g.png'
                                            alt=''
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='more-article-wrapper ps-4'>
                            <hr />
                            <div className='more-article-card'>
                                <p className='date'>Dec 24, 2022</p>
                                <div className='d-flex align-items-start justify-content-between'>
                                    <div className='content'>
                                        <h2>2022: The year that changed the way we work</h2>
                                        <p>
                                            Remember 2020? So many of us thought that was going to be the big one for
                                            the way we work. I thought it would be the year that changes productivity
                                            forever. And in many ways it was; it forced us to spring clean our dusty
                                            attic of beliefs about what…
                                        </p>
                                        <div className='infos d-flex gap-2 align-items-center'>
                                            <a href='#' className='tag'>
                                                Productivity
                                            </a>
                                            <span>8 min read</span>
                                        </div>
                                    </div>
                                    <div className='picture'>
                                        <img
                                            src='https://miro.medium.com/fit/c/250/168/1*-kbWgTfVb3CZZ6xS6i8O9g.png'
                                            alt=''
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='more-article-wrapper ps-4'>
                            <hr />
                            <div className='more-article-card'>
                                <p className='date'>Dec 24, 2022</p>
                                <div className='d-flex align-items-start justify-content-between'>
                                    <div className='content'>
                                        <h2>2022: The year that changed the way we work</h2>
                                        <p>
                                            Remember 2020? So many of us thought that was going to be the big one for
                                            the way we work. I thought it would be the year that changes productivity
                                            forever. And in many ways it was; it forced us to spring clean our dusty
                                            attic of beliefs about what…
                                        </p>
                                        <div className='infos d-flex gap-2 align-items-center'>
                                            <a href='#' className='tag'>
                                                Productivity
                                            </a>
                                            <span>8 min read</span>
                                        </div>
                                    </div>
                                    <div className='picture'>
                                        <img
                                            src='https://miro.medium.com/fit/c/250/168/1*-kbWgTfVb3CZZ6xS6i8O9g.png'
                                            alt=''
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='more-article-wrapper ps-4'>
                            <hr />
                            <div className='more-article-card'>
                                <p className='date'>Dec 24, 2022</p>
                                <div className='d-flex align-items-start justify-content-between'>
                                    <div className='content'>
                                        <h2>2022: The year that changed the way we work</h2>
                                        <p>
                                            Remember 2020? So many of us thought that was going to be the big one for
                                            the way we work. I thought it would be the year that changes productivity
                                            forever. And in many ways it was; it forced us to spring clean our dusty
                                            attic of beliefs about what…
                                        </p>
                                        <div className='infos d-flex gap-2 align-items-center'>
                                            <a href='#' className='tag'>
                                                Productivity
                                            </a>
                                            <span>8 min read</span>
                                        </div>
                                    </div>
                                    <div className='picture'>
                                        <img
                                            src='https://miro.medium.com/fit/c/250/168/1*-kbWgTfVb3CZZ6xS6i8O9g.png'
                                            alt=''
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};