
import Logo from "../assets/logo-text.png"



const Navbar = () => {
    return (
        <div className="">
            <div className=" flex justify-between container mx-auto">
                <img src={Logo} alt="" />

                <ul className=" flex items-center gap-4 ">
                    <li><a href="">Home</a></li>
                    <li><a href="">Technologies</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                <div className=" flex items-center gap-2">
                    <button className="btn rounded-3xl">Log IN</button>
                    <button className="btn btn-active btn-primary rounded-3xl">Sing Up</button>
                </div>

            </div>
        </div>

    );
}

export default Navbar;