import React, { Component, Fragment } from 'react'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import About from '../components/others/About'

class AboutUsPage extends Component {
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

                {/* aboutus page load here */}
                <About />

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

export default AboutUsPage
