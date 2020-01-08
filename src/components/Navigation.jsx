import React, { Component } from 'react';

class Navigation extends Component {
 
   
    render() {
        return (
        <div>
        	<header>
				<div class='right-header'>
					<img src="img/phone.png" alt="phone" />
					<p>Phone Finder</p>
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
						<li><a href="#">Home</a></li>
						<li><a href="#">Friends</a></li>
						<li><a href="#">Contact</a></li>
						<li><a href="#">About</a></li>

					</ul>
				</nav>
      		</div>
        );
    }
}

export default Navigation;
