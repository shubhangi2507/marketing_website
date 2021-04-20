
import React from 'react';
import { NavLink } from 'react-router-dom';
import rcpie from '../../assets/rcpie.jpg';
import srch_r from '../../assets/srch_r.jpeg';


const Home = () => {
    return (
        <React.Fragment>
        
		<div className="container" >  
			<div id="jumbotron">
			<div className="middle">
				<h1 id="foodacular">FOODACULAR</h1>
			</div>
			<div id="subtext">A fun website to play around with food. You can browse and find recipe's for your favourite food!</div>
				
			</div>
			<div className="ui two column grid pad" >
				<div className="column">
					<NavLink className="header" to="/SearchRecipe">
						<div className="ui fluid card">
							<div className="image">
								<img  alt="rcpie" src={rcpie}/>
							</div>
							<div className="content">
								Search Recipe
							</div>
						</div>
					</NavLink>
				</div>
			
				<div className="column">
					<NavLink className="header" to="/Restraunts">
						<div className="ui fluid card">
							<div className="image">
								<img alt="helen" src={srch_r}/>
							</div>
							<div className="content">
								Search Menu
							</div>
						</div>
					</NavLink>
				</div>
			</div>
			
			
			
		</div>	
	
		
        </React.Fragment>
	);
};

export default Home;

