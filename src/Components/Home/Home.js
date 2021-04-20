
import React from 'react';
import { NavLink } from 'react-router-dom';
import recipe from '../../../assets/rcpie.jpeg';


const Home = () => {
    return (
        <React.Fragment>
        <div style ={ background-image: 'url(' + Image + ')', background-size: 'auto' }>
		<div className="container" >
                	<h1>Hello</h1>
			<div className="ui three column grid">
				<div className="column">
					<div className="ui fluid card">
						<div className="image">
							<img alt="daniel" src="./images/avatar/large/rcpie.jpeg"/>
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
				
			</div>	
		
		</div>	
		</div>	
        </React.Fragment>
	);
};

export default Home;

