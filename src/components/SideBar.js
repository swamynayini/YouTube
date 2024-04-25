import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = ()=>{
    const isMenuOpen = useSelector(store=>store.app.isMenuOpen)
    if(!isMenuOpen)return null
    return(
        <div className="p-5 shadow-lg w-48">
            <ul>
                <li> <Link to = "/">Home </Link></li>
                <li>Shorts</li>
            </ul>
            <h1 className="font-bold pt-5">Subcription</h1>
            <ul>
                <li><Link to = "/">Swamy</Link></li>
                <li>V6 News</li>
                <li>Harsha Sai For-You</li>
                <li>Maa</li>
                <li>Zee Telugu</li>
            </ul>
            <h1 className="font-bold pt-5">Explore</h1>
            <ul>
                <li>Trending</li>
                <li>Music</li>
                <li>News</li>
                <li>Shopping</li>
                <li>Live</li>
                <li>Gaming</li>
            </ul>
        </div>
    )
}
export default SideBar;