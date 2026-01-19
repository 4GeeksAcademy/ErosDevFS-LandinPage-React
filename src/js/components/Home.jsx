import React from "react";


import Navbar from "./Navbar";
import Card from "./Card";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer"

const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container col-md-8">
					<Jumbotron />
				<div class="w-100 pb-4">
					<div class="row g-4">
						<div class="col-md-3">
							<Card />
						</div>
						<div class="col-md-3">
							<Card />
						</div>
						<div class="col-md-3">
							<Card />
						</div>
						<div class="col-md-3">
							<Card />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;