import React, { Component } from 'react'
import { Fragment } from 'react';
import { Routes, Route, Link } from 'react-router-dom'

import HomePage from '../pages/HomePage';
import UserLoginPage from '../pages/UserLoginPage';
import ContactPage from '../pages/ContactPage';

class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path='/login' element={<UserLoginPage/>} />
        <Route exact path='/contact' element={<ContactPage/>} />
        </Routes>

      </Fragment>
    )
  }
}

export default AppRoute
