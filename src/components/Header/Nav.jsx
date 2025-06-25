import React from 'react';
import { use } from 'react';
 import { Link } from 'react-router'; // Commented out for UI-only preview
import { AuthContext } from '../Auth/AuthProvider';
import logo from '../../../logo.json'
import Lottie from 'lottie-react';
import { ThemeToggle } from '../ThemToogle/ThemeToggle';



const Nav = () => {
    const {user,logout} = use (AuthContext)
    const handleLogoutClick = ()=>{
        logout()
    }
  return (
    <>

  
    <div className="navbar bg-base-100 shadow-md sticky top-0 z-50">
      <div className="navbar-start">
        {/* Mobile dropdown */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
             <li><Link className="text-blue-700" to="/">Home</Link></li>
          <li><Link className="text-blue-700" to='/find-tutior'>Find tutors</Link></li>
          <li><Link className="text-blue-700" to='/add-tutiour'>Add tutors</Link></li>
          <li><Link className="text-blue-700" to= {`/my-booked-tutors`}>My Booked tutors</Link></li>
          <li><Link className="text-blue-700" to= {`/my-tutor`}>My Add tutors</Link></li>
            {/* <li><Link to="/">Home</Link></li>
            <li><Link to="/allrecipe">All Recipes</Link></li>
            <li><Link to="/addmyrecipe">Add Recipe</Link></li>
            <li><Link to="/myrecipe">My Recipes</Link></li> */}
          
          </ul>
        </div>
        {/* <Link to="/" className="text-xl font-bold text-primary">Recipe Book</Link> */}
        <div className='flex'>
                <Lottie animationData={logo} loop={true} style={{width : '100px'}} /> 
                <span className="hidden lg:block text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
  Language Master
</span>
        </div>
      

      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link className="text-blue-700" to="/">Home</Link></li>
          <li><Link className="text-blue-700" to='/find-tutior'>Find tutors</Link></li>
          <li><Link className="text-blue-700" to='/add-tutiour'>Add tutors</Link></li>
          <li><Link className="text-blue-700" to= {`/my-booked-tutors`}>My Booked tutors</Link></li>
          <li><Link className="text-blue-700" to= {`/my-tutor`}>My Add tutors</Link></li>
          {/* <li className="text-blue-700">Home</li>
            <li>Find tutors
</li>
            <li>Add Tutorials</li>
            <li>My Tutorials
</li>
<li>My booked tutors
</li> */}
        </ul>
      </div>

      <div className="navbar-end space-x-4">
        {/* Theme Toggle Placeholder */}
        {/* <ThemeToggle className="text-blue-700" /> */}
        {/* <DarkModeToggle></DarkModeToggle> */}
        <ThemeToggle></ThemeToggle>
        
        {user ? (
          <>
            <Link onClick={handleLogoutClick} to="/" className="btn btn-outline btn-sm text-blue-700">Logout</Link>
            <div className="dropdown dropdown-center tooltip  tooltip-left" data-tip={user.displayName} >
              <div tabIndex={0} role="button" className=" m-1">
                <div className="avatar">
                  <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={user.photoURL} alt="Profile" />
                  </div>
                </div>
              </div>
              <ul tabIndex={0} className="dropdown-content dropdown-center menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li><span>{user.displayName}</span></li>
                <li><span>{user.email}</span></li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-outline btn-sm text-blue-700">Login</Link>
            <Link to="/register" className="btn btn-outline btn-sm text-blue-700">Register</Link>
          </>
        )}
       
     
      </div>
    </div>
    </>
  );
};

export default Nav;
