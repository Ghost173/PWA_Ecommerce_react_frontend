import React, { Component } from 'react'
import { Fragment } from 'react';
import { Routes, Route, Link } from 'react-router-dom'

import HomePage from '../pages/HomePage';

class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Routes>
        <Route exact path="/" element={<HomePage/>} />
        </Routes>

      </Fragment>
    )
  }
}

export default AppRoute
