import Header from "../atoms/Header";
import PostCardsContainer from "../atoms/PostHomePage/PostCardContainer";
import Navbar from "../molecules/Navbar";

function HomePage() {
    return (
        <>
            <Header />
            <PostCardsContainer />
            <Navbar />
        </>
    );
}

export default HomePage;
