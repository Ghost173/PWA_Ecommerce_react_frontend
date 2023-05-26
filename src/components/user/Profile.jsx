import React, { Component, Fragment } from 'react'

import axios from 'axios';
import AppUrl from '../../api/AppUrl';

export class Profile extends Component {

    constructor() {
        super();
        this.state = {
          UserDetails: []
        }
        
    }
    
    componentDidMount() {
    const token = localStorage.getItem('token');
      axios.get(AppUrl.UserData, {
        headers: {
            Authorization: `Bearer ${token}` // Include the token in the Authorization header
          }
      })
      
      
      .then(response => {
          this.setState({UserDetails:response.data})
      }).catch(error => {
    
      })

      console.log("userdata test"+ this.state.UserDetails)
    }
    


    render() {
        return (
            <Fragment>
                <h1> User Profile Page </h1>

                <ul className="list-group">
                    <li className="list-group-item">Name : {this.state.UserDetails.name}  </li>
                    <li className="list-group-item">Email :  {this.state.UserDetails.email}  </li>
                </ul>
            </Fragment>
        )
    }
}

export default Profile
