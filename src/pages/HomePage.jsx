import React, { Component, Fragment } from 'react'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection'
import FeatureProduct from '../components/home/FeatureProduct'
import NewArrival from '../components/home/NewArrival'
import HomeTop from '../components/home/HomeTop'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import HomeTopMobile from '../components/home/HomeTopMobile'

class HomePage extends Component {
  render() {
    return (
        <Fragment>

          <div className='Desktop'>
          <NavMenuDesktop />
          <HomeTop />
          </div>

          <div className='Mobile'>
          <NavMenuMobile />
          <HomeTopMobile />
          </div>
        
          {/* <NavMenuDesktop /> */}
            <FeatureProduct />
            <NewArrival />
            <Categories/>
            <Collection />
            
        </Fragment>
    )
  }
}

export default HomePage
