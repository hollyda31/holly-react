import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import Learning from './pages/learning';
import MyWork from './pages/mywork';
import Resume from './pages/resume';
import Contact from './pages/contact';
import CodingLang from './pages/learningpages/codinglang';
import Bash from './pages/learningpages/bash';
import Javascript from './pages/learningpages/javascript';
import Programming from './pages/learningpages/programming';
import Aws from './pages/learningpages/aws';
import FrontEnd from './pages/learningpages/frontend';
import Misc from './pages/learningpages/misc';
import Neurodivergence from './pages/learningpages/neurodivergence';
import ThisWiki from './pages/learningpages/thiswiki';

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route
					exact
					path='/'
					element={<Home />}
				/>
				<Route
					exact
					path='/index'
					element={<Home />}
				/>
				<Route
					path='/learning'
					element={<Learning />}
				/>
				<Route
					path='/resume'
					element={<Resume />}
				/>
				<Route
					path='/mywork'
					element={<MyWork />}
				/>
				<Route
					path='/contact'
					element={<Contact />}
				/>
				<Route
					path='/codinglang'
					element={<CodingLang />}
				/>
				<Route
					path='/bash'
					element={<Bash />}
				/>
				<Route
					path='/javascript'
					element={<Javascript />}
				/>
				<Route
					path='/programming'
					element={<Programming />}
				/>
				<Route
					path='/aws'
					element={<Aws />}
				/>
				<Route
					path='/frontend'
					element={<FrontEnd />}
				/>
				<Route
					path='/misc'
					element={<Misc />}
				/>
				<Route
					path='/neurodivergence'
					element={<Neurodivergence />}
				/>
				<Route
					path='/thiswiki'
					element={<ThisWiki />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
