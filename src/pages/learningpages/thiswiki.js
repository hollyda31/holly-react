import React from 'react';
import LearningMenu from './learningcomponents/learningmenu.js';
import './learningcomponents/learning.css';

function ThisWiki() {
	return (
		<div className='learningBody'>
			<div className='learningMenu'>
				<LearningMenu />
			</div>
			<div id='main'>
				<h1>Notes About This Wiki</h1>
				<h2>Contributing to This Wiki</h2>
				<p>
					If you're interested in contributing to this wiki, well... I hate
					to break it to you, but I don't yet have a great and simple way
					to do that. You can just email me directly at{' '}
					<a href='mailto: holly@hollyantle.com'>holly@hollyantle.com</a>,{' '}
					and I'll let you know as soon as I have an easy way to contribute
					to this wiki, and you can follow me on GitHub at{' '}
					<a href='https://github.com/hollyda31'>
						https://github.com/hollyda31
					</a>
					.
				</p>
				<p>
					I don't yet have a repo up for this, as it's been difficult to
					stage it onto my existing host, but you can check out my other
					repos and just follow me, I guess. IDK. Whatever.
				</p>
			</div>
		</div>
	);
}

export default ThisWiki;
