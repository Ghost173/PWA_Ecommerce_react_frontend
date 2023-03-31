import React, { Component, Fragment } from 'react'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection'
import FeatureProduct from '../components/home/FeatureProduct'
import NewArrival from '../components/home/NewArrival'

class HomePage extends Component {
  render() {
    return (
        <Fragment>
            <FeatureProduct />
            <NewArrival />
            <Collection />
            <Categories/>
        </Fragment>
    )
  }
}

export default HomePage
