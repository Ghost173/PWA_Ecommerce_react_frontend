import React, { Component, Fragment } from 'react'

import axios from 'axios';
import AppUrl from '../../api/AppUrl';
import { Navigate } from 'react-router-dom';

export class Profile extends Component {

    constructor() {
        super();
        this.state = {
            UserDetails: []
        }

    }

    componentDidMount() {

        // Redirect to login if token is not present
       
        const token = localStorage.getItem('token');

        if (!token) {
            // Use your preferred method for redirecting to the login page
            window.location.href = '/login';
            return null; // Render nothing
        }

        axios.get(AppUrl.UserData, {
            headers: {
                Authorization: `Bearer ${token}` // Include the token in the Authorization header
            }
        }).then(response => {
            this.setState({ UserDetails: response.data })
        }).catch(error => {
            localStorage.removeItem('token');
            window.location.href = '/login';
        })

    }



    render() {
        const token = localStorage.getItem('token');

        // Redirect to login if token is not present
        if (!token) {
            // Use your preferred method for redirecting to the login page
            return <Navigate to={'/login'} />
        }
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
