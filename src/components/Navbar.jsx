 import { Link } from "react-router-dom";
 import './navbar.css'

// const links = [
//   {
//     title: "Home",
//     link: "/"
//   },
//   {
//     title: "About",
//     link: "/about"
//   },
//   {
//     title: "Products",
//     link: "/products"
//   }
//   //   add the other link as well
// ];
export const Navbar = () => { 
  return (
  <>
     {/* <h1>This is navbar</h1> */}
    <Link to="/" className='linking'>Home</Link>
    <Link to="/about" className='linking'>About</Link>
    <Link to="/products" className='linking'>Products</Link>
  
  </>
  );

};
