import React from 'react';
import './threecard.css';
import Mint from '../../images/mintlogo.png';
import GitHub from '../../images/github.png';
import LinkedIn from '../../images/linkedin.png';
import { Link } from 'react-router-dom';

const PortfolioInner = () => {
	return (
		<>
			<div id='spacer'></div>
			<div className='threecard'>
				<div
					className='card'
					id='cardOne'
				>
					<h2>U.S. Mint</h2>
					<div className='image'>
						<img
							src={Mint}
							alt='Mint'
							className={'cardpic'}
						/>
					</div>
					<p>My work with the U.S. Mint</p>
					<div className='cta'>
						<Link
							to='/mint'
							activeStyle
						>
							<button>Click Here</button>
						</Link>
					</div>
				</div>
				<div
					className='card'
					id='cardTwo'
				>
					<h2>My GitHub Repos</h2>
					<div className='image'>
						<img
							src={GitHub}
							alt='GitHub'
							className={'cardpic'}
						/>
					</div>
					<p>Various GitHub repos</p>
					<div className='cta'>
						<Link
							to='https://github.com/hollyda31'
							activeStyle
						>
							<button>Click Here</button>
						</Link>
					</div>
				</div>
				<div
					className='card'
					id='cardThree'
				>
					<h2>My Linkedin</h2>
					<div className='image'>
						<img
							src={LinkedIn}
							alt='LinkedIn'
							className={'cardpic'}
						/>
					</div>
					<p>Connect with me on LinkedIn</p>
					<div className='cta'>
						<Link
							to='https://www.linkedin.com/in/hollyantle'
							activeStyle
						>
							<button>Click Here</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default PortfolioInner;
