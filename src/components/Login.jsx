import React, { Component } from 'react';
import Register from './Register'

class Login extends Component {
  


    render() {
        return (
		      <div class="session">
				<div class="Register">
					<Register />
				</div>
				<form className="login_form">
					<h4>Welcome to Phone Finder</h4>
					<p>Welcome Back! Login to access your account</p>
					<div class="floating-label">
						<label for="email">Email:</label>
						<input type="text" placeholder="" name="email" id="email" autocomplete="off" />
						
					</div>
					<div class="floating-label">
						<label for="password">Password:</label>
						<input type="password" name="password" placeholder="" id="password" autocomplete="off" />
						
					</div>
					<button type="submit" onclick="">Enter</button>
				</form>
			</div>
        );
    }
}

export default Login;
