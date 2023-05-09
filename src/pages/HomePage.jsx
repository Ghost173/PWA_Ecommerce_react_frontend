import React, { Component, Fragment } from 'react'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection'
import FeatureProduct from '../components/home/FeatureProduct'
import NewArrival from '../components/home/NewArrival'
import HomeTop from '../components/home/HomeTop'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import HomeTopMobile from '../components/home/HomeTopMobile'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import axios from 'axios'
import AppUrl from '../api/AppUrl'

class HomePage extends Component {

  componentDidMount() {
    window.scroll(0, 0);
    this.GetVisitorDetails();
  }

  GetVisitorDetails = ()=>{
    axios.get(AppUrl.VisitorDetails).then().catch()
  }

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
        <Categories />
        <Collection />


        <div className='Desktop'>
          <FooterDesktop />
        </div>
        <div className='Mobile'>
          <FooterMobile />
        </div>

      </Fragment>
    )
  }
}

export default HomePage
