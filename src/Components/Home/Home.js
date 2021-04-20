
import React from 'react';
import { NavLink } from 'react-router-dom';
import rcpie from '../../assets/rcpie.jpg';
import srch_r from '../../assets/srch_r.jpeg';


const Home = () => {
    return (
        <React.Fragment>
        
		<div className="container" >  
			<div id="jumbotron">
			<div id="middle">
				<h1 id="foodacular">FOODACULAR</h1>
			</div>
			<div id="subtext">A fun website to play around with food. You can browse and find recipe's for your favourite food!</div>
				
			</div>
			<div className="ui two column grid pad" >
				<div className="column">
					<div className="ui fluid card">
						<div className="image">
							<img  alt="rcpie" src={rcpie}/>
						</div>
						<div className="content">
							<NavLink className="header" to="/SearchRecipe">Search Recipe</NavLink>
						</div>
					</div>
				</div>
			
				<div className="column">
					<div className="ui fluid card">
						<div className="image">
							<img alt="helen" src={srch_r}/>
						</div>
						<div className="content">
							<NavLink className="header" to="/Restraunts">Search Menu</NavLink>
						</div>
					</div>
				</div>
			</div>
			
			
			
		</div>	
	
		
        </React.Fragment>
	);
};

export default Home;

