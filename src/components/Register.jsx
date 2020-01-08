import React, { Component } from 'react';


class Register extends Component {
   

    render() {
        return (
        	<div className= 'Register-form'>
				<div className="c-formContainer">
				  <div className="c-welcome">Welcome aboard!</div>
				  <form className="c-form" action="">
				    <div className="c-form__group">
				      <label className="c-form__label" for="username">
				             <input
		                        type="text"
		                        id="username"
		                        className="c-form__input"
		                        placeholder=" "
		                        pattern="[^\s]+"
		                        required />

		                    <label className="c-form__next" for="progress2" role="button">
		                        <span className="c-form__nextIcon"></span>
		                    </label>
		      <span className="c-form__groupLabel">username</span>
		      <b className="c-form__border"></b>
		      </label>
		    </div>
		    <div className="c-form__group">
				      <label className="c-form__label" for="fullname">
				             <input
		                        type="text"
		                        id="fullname"
		                        className="c-form__input"
		                        placeholder=" "
		                        pattern="[^\s]+"
		                        required />

		                    <label className="c-form__next" for="progress2" role="button">
		                        <span className="c-form__nextIcon"></span>
		                    </label>
		      <span className="c-form__groupLabel">Enter your name?</span>
		      <b className="c-form__border"></b>
		      </label>
		    </div>
		    		    <div className="c-form__group">
				      <label className="c-form__label" for="phonenumber">
				             <input
		                        type="text"
		                        id="phonenumber"
		                        className="c-form__input"
		                        placeholder=" "
		                        pattern="[^\s]+"
		                        required />

		                    <label className="c-form__next" for="progress2" role="button">
		                        <span className="c-form__nextIcon"></span>
		                    </label>
		      <span className="c-form__groupLabel">Enter your phone number</span>
		      <b className="c-form__border"></b>
		      </label>
		    </div>
		    <div className="c-form__group">
		      <label className="c-form__label" for="femail">
		                    <input
		                        type="email"
		                        id="femail"
		                        className="c-form__input"
		                        placeholder=" "
		                        pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
		                        required />

		                    <label className="c-form__next" for="progress3" role="button">
		                        <span className="c-form__nextIcon"></span>
		                    </label>

		      <span className="c-form__groupLabel">Enter your email?</span>
		      <b className="c-form__border"></b>
		      </label>
		    </div>

		    <div className="c-form__group">
		      <label className="c-form__label" for="fpass">
		                    <input
		                        type="password"
		                        id="fpass"
		                        className="c-form__input"
		                        placeholder=" "
		                        required />

		                    <label className="c-form__next" for="finish" role="button">
		                        <span className="c-form__nextIcon"></span>
		                    </label>

		      <span className="c-form__groupLabel">Create your password.</span>
		      <b className="c-form__border"></b>
		      </label>
		    </div>

		    <button type="submit" onclick="">Register</button>
		  </form>
		</div>
	</div>
        );
    }
}

export default Register;
