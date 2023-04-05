import React from 'react';
import PortfolioInner from '../components/sections/portfolioinner';
import Email from '../images/email.png';
import './portfolio.css';

const Portfolio = () => {
	return (
		<>
			<PortfolioInner />
			<div className='info'>
				<h1>Contact Me</h1>
				<div className='contactimg'>
					<a href='mailto:holly@hollyantle.com'>
						<p>Email Me!</p>
						<img
							src={Email}
							alt='email'
						/>
					</a>
				</div>
			</div>
		</>
	);
};

export default Portfolio;
