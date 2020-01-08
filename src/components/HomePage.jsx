
import React, { Component } from 'react';

class HomePage extends Component {
  

    render() {
        return (
            <div class="number">
                <div class="phone-header">Phone Finder</div>
                <div class="form__group field">
                  <input type="input" class="form__field" placeholder="Enter your phone number" name="name" id='name' required />
                </div>
                <div class="">
                  <a href="#" class="btn btn-white btn-animation-1">search</a>
                </div>
            </div>
        );
    }
}

export default HomePage;
