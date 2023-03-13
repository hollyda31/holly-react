import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavLink = styled(Link)`
	background-color: #679436;
	color: #000000;
	display: flex;
	align-items: center;
	font-weight: bold;
	font-size: 1.1rem;
	text-decoration: none;
	padding: 0 1.7rem;
	cursor: pointer;
	&.active {
		color: #147bc1;
	}
`;

/* not used
export const Bars = styled(FaBars)`
	display: none;
	background-color: #679436;
	color: #000000;
	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 75%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;
*/