import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const NavbarUser = () =>{

    const navLinks = [
        { name: "Home", path: "/user" },
        { name: "Profile", path: "/user/profile" },
        { name: "Campaigns", path: "/user/campaigns" },
        { name: "Request Help", path:"/user/help"}, 
    ];

    const navigate = useNavigate();

  const logout = () => {
    const confirmed = window.confirm("Are you sure you want to logout?");
    if (confirmed) {
      navigate('/'); 
    }
  };

    return (
        <div className=" bg-[#2563EB] text-3xl  px-10 py-3 text-white flex justify-between rounded-xl w-[90%] mx-auto">
                
                    <h1 className="text-white font-bold">Drop<span className="text-[#1E293B]">Hope</span></h1>
                
                <div className="">
                    <ul className="flex gap-4 text-[15px] md:text-xl">
                        {navLinks.map(link => (
                            <li key={link.name}>
                                <Link to={link.path} className="hover:text-[#bbf4f9b6]">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        
                    </ul>
                </div>
                <div>
                    <ul className="text-xl">
                        <li>

                            <button className="hover:text-[#bbf4f9b6]" onClick={logout}>Logout</button>
                        </li>
                    </ul>
                </div>

            </div>
    )


}
export default NavbarUser;