import { HeroSection } from '../components/Home/HeroSection';
import { MainArticles } from '../components/Home/MainArticles';
import { Navbar } from '../components/Home/Navbar';
import { TrendingNews } from '../components/Home/TrendingNews';

export const Home = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <TrendingNews />
            <MainArticles />
        </>
    );
};