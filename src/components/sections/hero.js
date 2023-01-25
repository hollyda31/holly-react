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
						<div className='heroSkills'>
							<p>HTML/CSS</p>
							<p>JavaScript</p>
							<p>React</p>
							<p>MongoDB</p>
							<p>SQL</p>
							<p>PHP</p>
							<p>Node.js</p>
							<p>AWS</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
