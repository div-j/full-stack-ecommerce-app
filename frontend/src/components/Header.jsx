import { Button, Navbar } from "flowbite-react";
import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import {MdCategory, MdContacts, MdHomeFilled, MdShop2} from "react-icons/md"
import {FaOpencart, FaShoppingCart} from "react-icons/fa"
import './header.css'
import { ShopContext } from "../context/ShopContext";

export default function Header() {
  const { getTotalCartItems } = useContext(ShopContext);
  return (
    <div className="">
      <Navbar fluid rounded className=" shadow-md  p-4">
        <Navbar.Brand >
            <Link to={'/'}>
          <img
            src="assets/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="logo"
          />
        </Link>

        
        </Navbar.Brand>
        <div className="flex items-center space-x-1  md:order-2">

          <Navbar.Toggle className="mr-4 ring-1 ring-slate-900/30 hover:text-secondary rounded-full" />

              <Link to={'/cart-page'} className="  ml-5 flex items-center gap-1">
                    <FaOpencart className="p-1 w-10 h-10 ring-slate-900/30 ring-1 rounded-full"  /> <span className="relative  justify-center flex w-5 h-5 rounded-full bg-secondary text-white medium-14 text-center -top-4 -left-1">{getTotalCartItems()}</span>
              </Link>
                {/* <Link to={'/logout'} className="flex items-center gap-1 bg-secondary text-white rounded-full p-1 px-4">
                <img src="assets/logout.svg" alt="" width={35} />
                <div className=""> logout</div>
                </Link> */}
                <Link to={'/login'} className="flex items-center gap-1 bg-secondary text-white rounded-full p-2 px-4">
                    <img src="assets/user.svg" alt="" width={27} />
                    <div className=""> Login</div>
                </Link>

        </div>
        <Navbar.Collapse>
          <Navbar.Link className="flex gap-1 items-center" as={NavLink}  to={'/'} >
             <MdHomeFilled/> Home  
            </Navbar.Link>
          <Navbar.Link className="flex gap-1 items-center" as={NavLink}   to={'/kids'}  >
             <MdCategory/> Kid's 
              </Navbar.Link>
          <Navbar.Link className="flex gap-1 items-center" as={NavLink}  to={'/mens'} >
             <MdShop2/> Men's 
              </Navbar.Link>
          <Navbar.Link className="flex gap-1 items-center" as={NavLink}  to={'/womens'} >
             <MdContacts/> Womens
               </Navbar.Link>
       
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
