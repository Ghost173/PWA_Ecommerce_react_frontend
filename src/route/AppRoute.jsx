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
import NotificatioPage from '../pages/NotificatioPage';
import FavouuritePage from '../pages/FavouuritePage';
import CartPage from '../pages/CartPage';
import AboutUsPage from '../pages/AboutUsPage';
import ProductCategoryPage from '../pages/ProductCategoryPage';
import ProductSubCategoryPage from '../pages/ProductSubCategoryPage';
import SearchProductsPage from '../pages/SearchProductsPage';
import RegisterPage from '../pages/RegisterPage';
import FogetPasswordPage from '../pages/FogetPasswordPage';
import RestPasswordPage from '../pages/RestPasswordPage';

class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path='/login' element={<UserLoginPage />} />
          <Route exact path='/register' element={<RegisterPage />} />
          <Route exact path='/forgetpassword' element={<FogetPasswordPage />} />
          <Route exact path='/restpassword' element={<RestPasswordPage />} />

          <Route exact path='/contact' element={<ContactPage />} />
          <Route exact path='/purchase' element={<Purchase />} />
          <Route exact path='/privacy' element={<PrivacyPage />} />
          <Route exact path='/refund' element={<RefundPage />} />
          
          {/* single product details page */}
          <Route exact path='/singleproductdetails/:product_id' element={<ProductDetailsPage />} />

          {/* notification */}
          <Route exact path='/notification' element={<NotificatioPage />} />

          {/* favourite */}
          <Route exact path='/favourite' element={<FavouuritePage />} />

          {/* cart route */}
          <Route exact path='/cart' element={<CartPage />} />

          {/* About */}
          <Route exact path='/about' element={<AboutUsPage />} />



        {/* search products productbysearch */}
        <Route exact path='/productbysearch/:key' element={<SearchProductsPage />} />
        <Route exact path='/productbysearch/' element={<SearchProductsPage />} />

          <Route exact path='/productslistbycategory/:category' element={<ProductCategoryPage />} />
          <Route exact path='/productslistbysubcategory/:category/:subcategory' element={<ProductSubCategoryPage />} />




        </Routes>

      </Fragment>
    )
  }
}

export default AppRoute
