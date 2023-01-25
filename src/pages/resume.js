import React from 'react';
import './resume.css';

const Resume = () => {
	// Function will execute on click of button
	const downloadResume = () => {
		// using Java Script method to get PDF file
		fetch('AntleHollyFullStack.pdf').then((response) => {
			response.blob().then((blob) => {
				// Creating new object of PDF file
				const fileURL = window.URL.createObjectURL(blob);
				// Setting various property values
				let alink = document.createElement('a');
				alink.href = fileURL;
				alink.download = 'AntleHollyFullStack.pdf';
				alink.click();
			});
		});
	};

	return (
		<div className='body'>
			<h1>Resume</h1>
			<div className='btnDiv'>
				<button
					id='downloadBtn'
					onClick={downloadResume}
					value='download'
				>
					Download Now
				</button>
			</div>
			<p>This resume displays best on a desktop or tablet.</p>
			<tbody>
				<table>
					<tr>
						<th colspan='2'>
							<h2>Holly Antle</h2>
						</th>
					</tr>
					<tr>
						<td>Based in Texas, open to Fully Remote positions</td>
						<td className='rightAlign'>Phone: 940-613-1574</td>
					</tr>
					<tr>
						<td>
							Email:{' '}
							<a href='mailto: holly@hollyantle.com'>
								holly@hollyantle.com
							</a>
						</td>
						<td className='rightAlign'>
							Website:{' '}
							<a href='http://www.hollyantle.com'>
								http://www.hollyantle.com
							</a>
						</td>
					</tr>
					<tr>
						<td>
							LinkedIn:{' '}
							<a href='https://www.linkedin.com/in/hollyantle'>
								https://www.linkedin.com/in/hollyantle
							</a>
						</td>
						<td className='rightAlign'>
							GitHub:{' '}
							<a href='https://github.com/hollyda31'>
								https://github.com/hollyda31
							</a>
						</td>
					</tr>
				</table>
			</tbody>
			<h2>Summary</h2>
			<p>
				I am an M-shaped full-stack developer with supplemental skills in
				marketing and data analytics. I create responsive websites,
				accessible interfaces, functional databases, and clean code that
				works fast and does what it is supposed to do. I have worked
				cross-functionally throughout my career, gaining domain knowledge in
				sales, marketing, business strategy, procurement, product
				development, and leadership.
			</p>
			<h2>Experience</h2>
			<h3>August 2022 - Present:</h3>
			<p>
				<strong>Full-Stack Developer.</strong> InfoMarines, on loan to the
				U.S. Mint
			</p>
			<h4>Accomplishments</h4>
			<ul>
				<li>
					Worked with a multi-disciplinary remote team in an Agile setting
					to resolve user tickets, upgrade existing computer systems, and
					correct errors on multiple large websites and interfaces
				</li>
				<li>
					Worked within my team to create new features in a WordPress
					environment that merged off-the-shelf WordPress tools with custom
					code to function smoothly and efficiently
				</li>
				<li>
					Audited existing pages for compliance with Section 508 and mobile
					responsiveness, making corrections and updates as necessary
				</li>
				<li>
					Single-handedly created high-profile plugins with minimal
					guidance for internal and public use
				</li>
				<li>
					Worked with AWS tools to manage multiple builds and environments,
					including EC2, EB, IAM, and RDS
				</li>
				<li>
					Redesigned the processes and procedures for the organization,
					creating a new set of onboarding procedures from scratch to
					assist new employees. This included a redesign of GitHub
					structure, a streamline of the CI/CD procedures, and a
					redevelopment of the IAM process to ensure proper accountability
					and transparency for future changes
				</li>
			</ul>
			<h3>December 2021 - June 2022:</h3>
			<p>
				<strong>Head of Marketing & Web Development.</strong> Confidential
				(by NDA)
			</p>
			<h4>Accomplishments</h4>
			<ul>
				<li>
					Led a team at Director level, managing and overseeing the rollout
					and transition to a new website with more than 150 pages
				</li>
				<li>
					Performed a wide range of data analytics to provide critical
					information to key stakeholders; gathered data from internal and
					external sources to perform data analysis, cleaning, and
					presentation
				</li>
				<li>
					Worked extensively with internal and external developers in a
					wide range of disciplines and specialties to manage the new
					website build project, ensuring that the website rollout was
					completed in a timely manner and on budget
				</li>
				<li>
					Transitioned the company to a new e-commerce website with zero
					downtime, resulting in no lost revenue. The company's average
					daily website revenue was $16-17k.
				</li>
			</ul>
			<h3>February 2020 - July 2021:</h3>
			<p>
				<strong>Co-Founder and CEO</strong> Meriluna
			</p>
			<p>
				Meriluna was a failed startup. Unfortunately, we began our startup
				just prior to the pandemic and were unable to secure funding before
				we ran out of runway. While the startup failed, it was a tremendous
				learning experience.
			</p>
			<h4>Accomplishments</h4>
			<ul>
				<li>
					Led a SaaS Pre-Seed startup focused on creating a new
					communication app
				</li>
				<li>
					Led an Agile software development team using a Kanban
					organization
				</li>
				<li>
					Managed multiple projects within a CI/CD environment while
					communicating frequently with shareholders
				</li>
				<li>
					Worked with AWS S3 buckets, Elastic Beanstalk, EC2 instances, and
					ECS containers to manage and maintain daily operations
				</li>
			</ul>
			<h3>March 2019 - April 2020:</h3>
			<p>
				<strong>Web Marketing Manager. </strong> ERNow Wichita Falls
			</p>
			<h4>Accomplishments</h4>
			<ul>
				<li>
					Performed all marketing, advertising, and public relations for a
					healthcare facility
				</li>
				<li>
					Worked with creating landing pages and new web assets for the
					facility, to include performing UI/UX work on the new assets and
					customizing those pages and modules in a custom CMS.
				</li>
			</ul>
			<h3>September 2018 - February 2019:</h3>
			<p>
				<strong>Front End Developer/UX Designer. </strong> PAI Health
			</p>
			<h4>Accomplishments</h4>
			<ul>
				<li>
					Worked with a Series A insurtech/healthtech startup with over
					$10m ARR
				</li>
				<li>
					Assisted the Product Development Team with UX and UI design for
					desktop, tablet, and mobile devices for a custom app
				</li>
				<li>
					Created multiple dashboards to meet the needs of different
					audiences that would help them understand complex data in a
					visual and comprehensible way
				</li>
			</ul>
			<h3>September 2017 - July 2018:</h3>
			<p>
				<strong>Junior Full-Stack Web Developer. </strong> InboundLabs GmbH
			</p>
			<h4>Accomplishments</h4>
			<ul>
				<li>
					Worked with Content Management Systems including WordPress and
					custom-built systems
				</li>
				<li>
					Maintained, updated, and optimized websites using WordPress,
					Drupal, HTML, CSS, JavaScript, and PHP
				</li>
				<li>Performed simple database maintenance using MySQL</li>
			</ul>
			<h3>June 2015 - October 2017:</h3>
			<p>
				<strong>Project Manager. </strong> Laurel Books
			</p>
			<h4>Accomplishments</h4>
			<ul>
				<li>
					Recruited, hired, onboarded, trained, mentored, and managed a
					fully remote team of more than 25 people
				</li>
				<li>
					Worked with third-party hosting services, proxy servers, and
					content delivery networks to optimize website performance
				</li>
				<li>
					Used Google Webmaster tools to optimize website performance,
					focusing on page load time, site speed, and clean code
				</li>
			</ul>
			<h3>April 2014 - July 2015:</h3>
			<p>
				<strong>Junior UX Designer and Copywriter. </strong> BK Dental, LLC
			</p>
			<h4>Accomplishments</h4>
			<ul>
				<li>Wrote Content and Copy</li>
				<li>Assisted with UX design</li>
			</ul>
			<h3>January 2012 - March 2014:</h3>
			<p>
				<strong>Junior UX Designer and Copywriter. </strong> CopyGirl
			</p>
			<h4>Accomplishments</h4>
			<ul>
				<li>Wrote Content and Copy</li>
				<li>Assisted with UX design</li>
			</ul>
			<h3>Additional Notes:</h3>
			<ul>
				<li>Currently hold a Public Trust Clearance</li>
				<li>Currently attending Texas A&amp;M University - Central Texas</li>
				<ul>
					<li>Majoring in Computer Science</li>
					<li>Expected completion of B.S. in 2025</li>
				</ul>
			</ul>
		</div>
	);
};

export default Resume;
