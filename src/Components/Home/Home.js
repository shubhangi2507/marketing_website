
import React from 'react';
import { NavLink } from 'react-router-dom';
import rcpie from '../../assets/recipe.png';
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
								<img  alt="rcpie" src={srch_r}/>
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
								<img alt="helen" src={rcpie}/>
							</div>
							<div className="content">
								Search Menu
							</div>
						</div>
					</NavLink>
				</div>
			</div>
			<h1 className="center cursive">DEVELOPED BY__</h1>
			<div className="ui link cards flexMiddle">
				<div className="card"  id="developers">
				
				<div className="content">
				<div className="header">Daksh Pratap Singh</div>
				<div className="meta">
					<a>Developer</a>
				</div>
				<div className="description">
					Daksh developed landing page.
				</div>
				</div>
				</div>
				<div className="card"  id="developers">
				<div className="content">
				<div className="header">Shubhangi Rastogi</div>
				<div className="meta">
					<span className="date">Developer</span>
				</div>
				<div className="description">
					Shubhangi developed product related pages.
				</div>
				</div>
				</div>
				<div className="card"  id="developers">
				
				<div className="content">
				<div className="header">Rakesh Ranjan Sigh</div>
				<div className="meta">
					<a>Developer</a>
				</div>
				<div className="description">
					Rakesh developed contact page.
				</div>
				</div>
				
				</div>
				<div className="card"  id="developers">
				
				<div className="content">
				<div className="header">Vishal Punj</div>
				<div className="meta">
					<span className="date">Developer</span>
				</div>
				<div className="description">
					Vishal developed sign up page.
				</div>
				</div>
				</div>
				<div className="card"  id="developers">
				
				<div className="content">
				<div className="header">Shreya Srivastava</div>
				<div className="meta">
					<span className="date">Developer</span>
				</div>
				<div className="description">
					Shreya developed login page.
				</div>
				</div>
				</div>
			</div>
			
		</div>	
	
		
        </React.Fragment>
	);
};

export default Home;

