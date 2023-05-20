import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Gallery from "../Gallery/Gallery";
import NewArivial from "../NewArival/NewArivial";
import Offer from "../Offer/Offer";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery />
            <Categories></Categories>
            <NewArivial></NewArivial>
            <Offer/>
        </div>
    );
};

export default Home;