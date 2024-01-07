import RightContent from "./RightContent";
import Title from "./Title";
import Vertical from "./Vertical/Vertical";


const Home = () => {
    return (
        <div className="bg-[#F2E3DB] grid lg:grid-cols-3 grid-cols-1">
            <Title></Title>
            <Vertical></Vertical>
            <RightContent></RightContent>
        </div>
    );
};

export default Home;