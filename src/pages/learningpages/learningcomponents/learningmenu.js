import React from 'react';
import { Link } from 'react-router-dom';

function LearningMenu() {
	return (
		<div id='learningMenu'>
			<nav className='learningNavbar'>
				<ul>
					<li>
						<Link
							to={'../learning'}
							className='learningLink'>
							Wiki Home
						</Link>
					</li>
					<li>
						<Link
							to={'../codinglang'}
							className='learningLink'>
							Coding Languages
						</Link>
					</li>
					<li>
						<Link
							to={'../programming'}
							className='learningLink'>
							Programming
						</Link>
					</li>
					<li>
						<Link
							to={'../misc'}
							className='learningLink'>
							Miscellaneous
						</Link>
					</li>
					<li>
						<Link
							to={'../thiswiki'}
							className='learningLink'>
							This Wiki
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default LearningMenu;
