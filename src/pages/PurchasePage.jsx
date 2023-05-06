import React, { Component } from 'react'
import { Fragment } from 'react'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import Purchase from '../../src/components/others/Purchase'

class PurchasePage extends Component {
    componentDidMount() {
        window.scroll(0, 0)
    }

    render() {
        return (
            <Fragment>
                
                <div className='Desktop'>
                    <NavMenuDesktop />
                </div>

                <div className='Mobile'>
                    <NavMenuMobile />
                </div>

                {/* Purchase page load here */}
                <Purchase />


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

export default PurchasePage
