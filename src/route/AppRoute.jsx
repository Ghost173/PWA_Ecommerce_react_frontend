import React, { Component } from 'react'
import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage';
import UserLoginPage from '../pages/UserLoginPage';
import ContactPage from '../pages/ContactPage';
import Purchase from '../pages/PurchasePage';
import PrivacyPage from '../pages/PrivacyPage';
import RefundPage from '../pages/RefundPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';

class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path='/login' element={<UserLoginPage />} />
          <Route exact path='/contact' element={<ContactPage />} />
          <Route exact path='/purchase' element={<Purchase />} />
          <Route exact path='/privacy' element={<PrivacyPage />} />
          <Route exact path='/refund' element={<RefundPage />} />

          <Route exact path='/productdetails' element={<ProductDetailsPage />} />


        </Routes>

      </Fragment>
    )
  }
}

export default AppRoute
