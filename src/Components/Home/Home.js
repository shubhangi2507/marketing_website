
import React from 'react';
import { NavLink } from 'react-router-dom';
import rcpie from '../../assets/rcpie.jpg';
import srch_r from '../../assets/srch_r.jpeg';


const Home = () => {
    return (
        <React.Fragment>
        
		<div className="container" >  
	
			<div id="title">
				<h1 id="foodacular">FOODACULAR</h1>
			</div>
				
				
			
			<div className="ui three column grid">
				<div className="column">
					<div className="ui fluid card">
						<div className="image">
							<img alt="rcpie" src={rcpie}/>
						</div>
						<div className="content">
							<NavLink className="header" to="/SearchRecipe">Search Recipe</NavLink>
						</div>
					</div>
				</div>
			</div>
			<div className="column">
				<div className="ui fluid card">
					<div className="image">
						<img alt="helen" src="/images/avatar/large/helen.jpg"/>
					</div>
					<div className="content">
						<NavLink className="header" to="/Restraunts">Search Menu</NavLink>
					</div>
				</div>
			</div>	      
			
		</div>	
	
		
        </React.Fragment>
	);
};

export default Home;

