
import "../assets/scss/side_bar.scss"
import SideBar from "../components/SideBar";
import Main from "../components/Main";


const Home = () => {

    return (
            <div className="wrapper d-flex justify-content-space-between">
                <div className="side_bar">
                   <SideBar />
                </div>
                <div className="main">
                    <Main />
                </div>
            </div>
    );
}

export default Home