export const MainButton = ({ href, children, extraClass }) => {
    return (
        <a href={href} className={`btn main-btn ${extraClass}`}>
            {children}
        </a>
    );
};