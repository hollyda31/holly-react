import React from 'react';
import { NavLink } from './NavbarElements';
import './navbar.css';

const Navbar = () => {
	return (
		<>
			<div className='Nav'>
				<div className='NavMenu'>
					<NavLink
						to='/index'
						activeStyle
					>
						Home
					</NavLink>
					<NavLink
						to='/learning'
						activeStyle
					>
						Learning
					</NavLink>
					<NavLink
						to='/resume'
						activeStyle
					>
						Resume/CV
					</NavLink>
					<NavLink
						to='/mywork'
						activeStyle
					>
						My Work
					</NavLink>
					<NavLink
						to='/contact'
						activeStyle
					>
						Contact Us
					</NavLink>
				</div>
			</div>
		</>
	);
};

export default Navbar;
