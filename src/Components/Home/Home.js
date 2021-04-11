
import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <React.Fragment>
		<div className="container">
                	<h1>Hello</h1>
			<div className="ui three column grid">
				<div className="column">
					<div className="ui fluid card">
						<div className="image">
							<img alt="daniel" src="/images/avatar/large/daniel.jpg"/>
						</div>
						<div className="content">
							<NavLink className="header" to="/SearchRecipe">Search Recipe</NavLink>
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
				<div className="column">
					<div className="ui fluid card">
						<div className="image">
							<img alt="elliot" src="/images/avatar/large/elliot.jpg"/>
						</div>
						<div className="content">
							<a className="header">Elliot Fu</a>
						</div>
					</div>
				</div>
			</div>	
		
		</div>		
        </React.Fragment>
	);
};

export default Home;

