import clap from '../../../images/clap.svg';
import responses from '../../../images/responses.svg';
import articleShare from '../../../images/article-share.svg';
import bookmark from '../../../images/bookmark.svg';

export const SocialSection = () => {
    return (
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
    );
};