import React from 'react';
import { NavLink } from './NavbarElements';
import './navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
	return (
		<>
			<div className='Nav'>
				<div className='NavMenu'>
					<Link
						to='/index'
						className='navbarLink'
					>
						Home
					</Link>
					<Link
						to='/learning'
						activeStyle
						className='navbarLink'
					>
						Learning
					</Link>
					<Link
						to='/resume'
						activeStyle
						className='navbarLink'
					>
						Resume
					</Link>
					<Link
						to='/mywork'
						activeStyle
						className='navbarLink'
					>
						My Work
					</Link>
					<Link
						to='/contact'
						activeStyle
						className='navbarLink'
					>
						Contact Us
					</Link>
				</div>
			</div>
		</>
	);
};

export default Navbar;
