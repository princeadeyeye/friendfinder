import React, { Component } from 'react';
import Register from './Register'

class Login extends Component {

	state = {
		email: '',
		password: '',
	}

	handleChange = name => event => {
		this.setState({ [name] : event.target.value})
	}
  handleSubmit = () => {
  	this.props.submit()
  }
    render() {
        return (
		      <div class="session">
				<div class="Register">
					<Register />
				</div>
				<form className="login_form">
					<h4>Welcome to Friend Finder</h4>
					<p>Login to access your account</p>
					<div class="floating-label">
						<label for="email">Email:</label>
						<input 
							type="text" 
							placeholder="" 
							name="email" 
							id="email" 
							autocomplete="off" 
							value= {this.state.email}
							onChange={this.handleChange('email')}
							/>
						
					</div>
					<div class="floating-label">
						<label for="password">Password:</label>
						<input 
							type="password" 
							name="password" 
							placeholder="" 
							id="password" 
							autocomplete="off" 
							value={this.state.password}
							onChange={this.handleChange('password')}
							/>
						
					</div>
					<button 
						type="submit" 
						onclick={this.handleSubmit}>
						Enter
						</button>
				</form>
			</div>
        );
    }
}

export default Login;
