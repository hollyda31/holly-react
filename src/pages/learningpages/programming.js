import React from 'react';
import LearningMenu from './learningcomponents/learningmenu.js';
import './learningcomponents/learning.css';

function Programming() {
	return (
		<div className='learningBody'>
			<div className='learningMenu'>
				<LearningMenu />
			</div>
			<div>
				<h1>Programming Category Page</h1>
				<p>This is the Programming Category Page.</p>
				<div class='contents'>
					<ul>
						<li>
							<a href='./aws'>Amazon Web Services (AWS)</a>
						</li>
						<li>
							<a href='./frontend'>Front End Development</a>
						</li>
						<ul>
							<li>This section includes HTML & CSS</li>
						</ul>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Programming;
