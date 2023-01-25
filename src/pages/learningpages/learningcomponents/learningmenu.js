import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LearningMenu() {
	return (
		<div id='learningMenu'>
			<nav class='navbar'>
				<ul>
					<li>
						<Link to='../learning'>Wiki Home</Link>
					</li>
					<li>
						<Link to={'../codinglang'}>Coding Languages</Link>
					</li>
					<li>
						<Link to={'../programming'}>Programming</Link>
					</li>
					<li>
						<Link to={'../misc'}>Miscellaneous</Link>
					</li>
					<li>
						<Link to={'../thiswiki'}>This Wiki</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default LearningMenu;
