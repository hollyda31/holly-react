import React from 'react';
import './hero.css';

const Hero = () => {
	return (
		<div className='hero'>
			<div className='heroBackground'>
				<div className='heroGrid'>
					<div className='heroLeft'>
						<h1 className='heroHeadline'>Holly Antle</h1>
						<div  className='heroSubtext'>Full Stack Developer</div>
					</div>
					<div className='heroRight'>
						<ul className='heroSkills'>
							<li>HTML/CSS</li>
							<li>JavaScript</li>
							<li>React</li>
							<li>MongoDB</li>
							<li>SQL</li>
							<li>PHP</li>
							<li>Node.js</li>
							<li>AWS</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
