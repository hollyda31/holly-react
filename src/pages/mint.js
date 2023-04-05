import React from 'react';
import './portfolio.css';
import AppTop from '../images/applicationtop.png';
import AppMid from '../images/applicationmid.png';
import AppBottom from '../images/applicationbottom.png';
import CompList from '../images/complist.png';
import AdminEntries from '../images/adminentries.png';
import AdminEligible from '../images/admineligible.png';
import JudgeTop from '../images/judgetop.png';
import JudgeBottom from '../images/judgebottom.png';

const Mint = () => {
	return (
		<div className='portContent'>
			<h1 className='porth1'>The U.S. Mint</h1>
			<p>
				In my current position, I work as a full-stack developer for
				InfoMarines, currently on loan to the U.S. Mint.
			</p>
			<p>
				In this position, I've worked extensively with WordPress and custom
				plugin design, architecture, development, and troubleshooting. The
				ecosystem I was handed when I started contained a lot of legacy code
				from custom plugins and themes that were created with minimal
				documentation, and because of the unique nature of working within a
				government system, extensive custom development has been frequently
				required.
			</p>
			<h2 className='porth2'>Artist Portal</h2>
			<p>
				One of the first large projects I was given was the Artist Portal.
				This is a custom plugin that was started before I began working
				here, but the plugin was never finished. Its purpose is to create a
				foundation for contests, but there are some unique requirements that
				make it a challenging piece to work on.
			</p>
			<ul>
				<li>
					The purpose of these contests is to find and identify talented
					artists who can design future coins for the Mint. Thus, it's a{' '}
					<strong>BIG DEAL!</strong> Imagine being an artist and having
					your work immortalized by appearing on the face of a legal tender
					coin? That's pretty awesome!
				</li>
				<li>
					Artists who are selected are then commissioned by the United
					States government to create a coin design. Thus, from a
					governmental perspective, this is about government procurement,
					which is heavy regulated and strictly governed.
				</li>
				<li>
					Every element of these contests must be conducted perfectly in
					accordance with the rules and regulations. We have no leeway to
					make changes or adjustments to the procedure, lest it be unfair
					to the participants.
				</li>
				<li>
					Because this is a federal government website, everything here is
					covered by Section 508 and must be fully accessible. The fact
					that this portion of the site also deals with procurement (and
					thus, there could be monetary damages incurred if we're not doing
					our job right) only further enhances the level of scrutiny that
					this work falls under.
				</li>
			</ul>
			<h3 className='porth3'>The Beginning</h3>
			<p>
				I was given a plugin that was designed by a previous employee or
				contractor - someone that I hadn't personally heard of or met -
				called the "Mint Artist" plugin. This plugin had some foundational
				tables built out in PHP and a few limited functions, but it didn't
				operate fully and didn't perform the tasks we needed it to perform.
			</p>
			<p>
				About 13 months before I joined the project (and 10 months before I
				joined the team!), it was assigned to one person to bring the plugin
				up to the standards. They had Requirements Meetings and wrote up
				Requirements Documents and made lots of plans. That person
				subsequently left the company and the project was given to my
				predecessor. He believed that the most efficient way to complete the
				project was to use a pre-built, off-the-shelf WordPress plugin
				designed for competitions, and he worked to get that plugin
				approved, eventually getting it implemented in the Dev and QA
				environments. But eventually he, too, left the organization.
			</p>
			<p>
				The project was handed to me a week before we were due to give a
				progress update to the client. My predecessor told me that it was
				mostly done and needed only a few cosmetic improvements, so I went
				into the meeting feeling confident.
			</p>
			<p>My confidence was unwarranted.</p>
			<p>
				The client hated it. The plugin didn't meet any of the client's
				requirements. The client pulled up the Requirements Document (which
				I wasn't even aware had existed), and as we went over the
				requirements, it was clear to me that the off-the-shelf plugin
				wasn't going to meet them.
			</p>
			<p>
				The client had a hard deadline for this. They needed to run a
				contest with the new plugin in 6 weeks. So we had two choices:
			</p>
			<ol>
				<li>Fix the WordPress plugin to meet their requirements, or</li>
				<li>Fix up the custom plugin to meet their requirements.</li>
			</ol>
			<p>
				I realized I was woefully underprepared, so I asked for a day to
				examine the code for each plugin. I determined that the fastest way
				to get their requirements met was to work on the custom plugin, and
				I put together a timeline to get that plugin sorted. I explained to
				the client which requirements could be safely met, which ones would
				probably have to be resolved in a later update (but would not impact
				the pending launch), and about how long everything would take.
				Fortunately, the clients approved the updated schedule, so I began
				work on this.
			</p>
			<h3 className='porth3'>The Big Push</h3>
			<p>
				When the bulk of work on this project occurred, we were making
				changes over the Thanksgiving and Christmas holiday period. As my
				predecessor had departed, I was the only person in my department at
				that time, trying to tend to the Artist Portal rebuild while also
				managing tickets, rebuilding from a DDoS attack, covering regular
				maintenance, and taking on AWS chores to cover for another loss to
				our team in another department.
			</p>
			<p>
				I spent Christmas morning unwrapping gifts with my children. While
				they played with their new gifts on Christmas afternoon, I worked on
				Artist Portal in my home office.
			</p>
			<p>
				It was an unexpected and overwhelming welcome to my new job! But I'm
				proud of the work we did, and I'm pleased to report that we did get
				the Artist Portal plugin up and running (and meeting the required
				specifications) in time for their contest!
			</p>
			<h3 className='porth3'>The Aftermath</h3>
			<p>
				I still work on Artist Portal. As their initial contest submission
				period has passed, I'm now working on fixing all of the things that
				were on their "Wants" list. There were a few things they asked for
				in their initial Requirements document that we were able to
				accomplish manually (for example, by making a manual SQL update
				rather than a PHP-to-SQL function in the plugin), so those items
				were shifted lower onto the priority list and are being worked on
				for the next major version release later this year. And as the
				client is able to enjoy the current build, they're starting to
				notice other things that would be nice to have, so those features
				are being added to the "Wish List" for future versions.
			</p>
			<h3 className='porth3'>The Work</h3>
			<p>
				Because this is a feature that is still in active use, I have in
				some cases anonymized the screenshots and/or the code or data.
			</p>
			<h4 className='porth4'>Artist Submissions</h4>
			<p>
				After the contest is created by the Contest Administrator, we use WP
				Shortcodes to place the pre-built contest application forms onto
				pages. Using shortcodes allows our content team to easily place the
				application data wherever they need it placed.
			</p>

			<img
				src={AppTop}
				alt='top of the sample application'
				caption='Top part of a sample application, created by shortcode'
				className='portImage'
			/>

			<img
				src={AppMid}
				alt='middle of the sample application'
				caption='Middle part of a sample application, created by shortcode'
				className='portImage'
			/>

			<img
				src={AppBottom}
				alt='bottom of the sample application'
				caption='Bottom part of a sample application, created by shortcode'
				className='portImage'
			/>

			<h4 className='porth4'>Admin View</h4>
			<p>The contest administrator needs to be able to do three things:</p>
			<ul>
				<li>
					Create and edit contests (to include starting and stopping them),
				</li>
				<li>Reviewing all contests, and</li>
				<li>Reviewing entries before judging to determine eligibility.</li>
			</ul>

			<img
				src={CompList}
				alt='list of competitions'
				caption='List of all Competitions'
				className='portImage'
			/>

			<img
				src={AdminEntries}
				alt='list of all entries in a competition (admin view)'
				caption='List of all Entries in a Competition (Admin View)'
				className='portImage'
			/>

			<img
				src={AdminEligible}
				alt='administrative eligibility determination screen'
				caption='Administrative View: Eligibility Determination Screen'
				className='portImage'
			/>

			<h4 className='porth4'>Judging View</h4>
			<p>
				For our use case, judges are not always employed directly by the
				Mint. They may be external experts invited to judge competitions.
				This is important for several reasons:
			</p>
			<ul>
				<li>
					As the judges are not employees, they cannot be expected to be
					intimately familiar with any internal computer systems we use.
					Any system or dashboard we design for the judges must be
					intuitive and very easy to use with minimal instruction.
				</li>
				<li>
					Judges do not need access to any other portion of the website,
					including any aspect of the contest administration. It is
					confusing and violates the Least Access Principle to show the
					judges areas of the site that they shouldn't be accessing.
				</li>
			</ul>
			<p>
				The Judge Dashboard is still a work in progress, and one of the
				elements that we're working on is an easier-to-use login process for
				the judges. The existing login still makes use of the WordPress
				login, which causes the new user to be routed to a different page
				than the one we'd like them to land on, but I did manage to create a
				relatively workable system in the limited time I had.
			</p>
			<p>
				After logging in, the judge goes to a Judge Dashboard, which
				displays a list of contests that the judge has been assigned to.
				Once they click on the Contest ID, they're able to see all the
				eligible entries in that competition, with entries they haven't
				scored being (by default) placed near the top. Clicking on the Entry
				ID will bring up the judging page, where judges can score entries
				and simply move backward and forward through entries without the
				need to return to the Competition Page.
			</p>

			<img
				src={JudgeTop}
				alt='top of judging page'
				caption='Top Section of Judging Page (Judge View)'
				className='portImage'
			/>

			<img
				src={JudgeBottom}
				alt='bottom of judging page'
				caption='Bottom Section of Judging Page (Judge View)'
				className='portImage'
			/>
		</div>
	);
};

export default Mint;
