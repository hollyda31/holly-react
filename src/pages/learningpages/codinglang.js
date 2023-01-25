import React from 'react';
import LearningMenu from './learningcomponents/learningmenu.js';
import './learningcomponents/learning.css';

function CodingLang() {
	return (
		<div className='learningBody'>
			<div className='learningMenu'>
				<LearningMenu />
			</div>
			<div>
				<h1>Coding Languages Category Page</h1>
				<p>This is the Coding Languages Category Page.</p>
				<div class='contents'>
					<ul>
						<li>
							<a href='./bash'>BASH</a>
						</li>
						<li>
							<a href='./javascript'>JavaScript</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default CodingLang;
