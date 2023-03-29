import React, { Component, Fragment } from 'react'
import Categories from '../components/home/Categories'
import FeatureProduct from '../components/home/FeatureProduct'

class HomePage extends Component {
  render() {
    return (
        <Fragment>
            <FeatureProduct />
            <Categories/>
        </Fragment>
    )
  }
}

export default HomePage
