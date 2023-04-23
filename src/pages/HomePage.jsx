import React, { Component, Fragment } from 'react'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection'
import FeatureProduct from '../components/home/FeatureProduct'
import NewArrival from '../components/home/NewArrival'
import HomeTop from '../components/home/HomeTop'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'

class HomePage extends Component {
  render() {
    return (
        <Fragment>
          <NavMenuMobile />
          {/* <NavMenuDesktop /> */}
            <HomeTop />
            <FeatureProduct />
            <NewArrival />
            <Categories/>
            <Collection />
            
        </Fragment>
    )
  }
}

export default HomePage
