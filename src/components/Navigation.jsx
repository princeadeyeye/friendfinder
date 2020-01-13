import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Navigation extends Component {

	state = {
		isSignedin: false
	}
 
   
    render() {
    	if(!this.state.isSignedin) {
    		return (
		        <div>
		        	<header>
						<div class='right-header'>
							<img src="img/phone.png" alt="phone" />
							<p>Friend Finder</p>
						</div>
						<div class="left-header">
							
						</div>
					   </header>
						<nav>
							<ul>
								<li><NavLink to="/home">Home</NavLink></li>
								<li><NavLink to="/contact">Contact</NavLink></li>
								<li><NavLink to="/about">About</NavLink></li>
								<li><NavLink to="/users">All Users</NavLink></li>

							</ul>
						</nav>
		      		</div>
        		);
    	} else {
    		return (
		        <div>
		        	<header>
						<div class='right-header'>
							<img src="img/phone.png" alt="phone" />
							<p>Friend Finder</p>
						</div>
						<div class="left-header">
							<span>
								<i class="fas fa-envelope-open-text"></i>
							</span>
							<span>
								<i class="fas fa-user-alt"></i>
							</span>

						</div>
					   </header>
						<nav>
							<ul>
								<li><NavLink to="/home">Home</NavLink></li>
								<li><NavLink to="/friends">Friends</NavLink></li>
								<li><NavLink to="/contact">Contact</NavLink></li>
								<li><NavLink to="/about">About</NavLink></li>

							</ul>
						</nav>
		      		</div>
        );
    	}
        
    }
}

export default Navigation;
