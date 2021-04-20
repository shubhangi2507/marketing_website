
import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <React.Fragment>
        
		<div className="container">
                	<h1>Welcome</h1>
			<div className="ui three column grid">
				<div className="column">
					<div className="ui fluid card">
						<div className="image">
							<img alt="daniel" src="../../../assets/rcpie.jpeg"/>
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

