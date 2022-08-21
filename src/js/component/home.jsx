import React from "react";

//include images into your bundle
import Navbar from "./navbar.jsx"
import Card from "./card.jsx"
import Footer from "./footer.jsx"
import Jumbotron from "./jumbotron.jsx"

//create your first component
const Home = () => {
	return (
		<>
		<Navbar/>
		<br></br>
		<div className="container">
		<Jumbotron />
			<br></br>
			<div className="row">
				<div className="col-sm-12 col-md-6 col-xl-3"><Card/></div>
				<div className="col-sm-12 col-md-6 col-xl-3"><Card/></div>
				<div className="col-sm-12 col-md-6 col-xl-3"><Card/></div>
				<div className="col-sm-12 col-md-6 col-xl-3"><Card/></div>
			</div>
			
		</div>
		<br></br>
		<Footer/>
		</>
	);
};

export default Home;
