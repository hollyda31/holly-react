import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import Learning from './pages/learning';
import MyWork from './pages/mywork';
import Resume from './pages/resume';
import Contact from './pages/contact';

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
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
			</Routes>
		</Router>
	);
}

export default App;
