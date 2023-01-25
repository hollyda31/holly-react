import React from 'react';
import './threecard.css';
import Learn from '../../images/learn.jpg';
import ResumePic from '../../images/resume.jpg';
import PortfolioPic from '../../images/portfolio.jpg';
import { Link } from 'react-router-dom';

const Threecard = () => {
	return (
		<div className='threecard'>
			<div
				className='card'
				id='cardOne'
			>
				<h2>Let's Learn</h2>
				<div className='image'>
					<img
						src={Learn}
						alt=''
					/>
				</div>
				<p>
					As I continue to learn new things about programming, computer
					science, and working in the industry, I record all my knowledge
					in my own personal wiki-like documents. Follow along with me to
					find out all the things I wish I knew when I first started out.
				</p>
				<div className='cta'>
					<Link
						to='/learning'
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
				<h2>About Me</h2>
				<div className='image'>
					<img
						src={ResumePic}
						alt=''
					/>
				</div>
				<p>
					Just the facts? Looking for something quick and concise? Here's
					the quick link to my most current resume in HTML format.
					You'll be able to download a PDF for easy printing if you'd like
					to share it with your colleagues.
				</p>
				<div className='cta'>
					<Link
						to='/resume'
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
				<h2>Put Up or Shut Up</h2>
				<div className='image'>
					<img
						src={PortfolioPic}
						alt=''
					/>
				</div>
				<p>
					The proof is in the pudding. My resume might tell you what I{' '}
					<strong>think</strong> I know, but it's really my portfolio that
					shows you what I can do. Some of these projects include client
					work, but a lot of the stuff in my portfolio will allow you to
					see things that interest and excite me as passion projects, too.
				</p>
				<div className='cta'>
					<Link
						to='/portfolio'
						activeStyle
					>
						<button>Click Here</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Threecard;
