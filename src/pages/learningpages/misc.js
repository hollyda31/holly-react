import React from 'react';
import LearningMenu from './learningcomponents/learningmenu.js';
import './learningcomponents/learning.css';

function Misc() {
	return (
		<div className='learningBody'>
			<div className='learningMenu'>
				<LearningMenu />
			</div>
			<div>
				<h1>Miscellaneous Category Page</h1>
				<p>This is the Miscellaneous Languages Category Page.</p>
				<div class='contents'>
					<ul>
						<li>
							<a href='./neurodivergence'>
								Neurodivergence & Mental Illness
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Misc;
