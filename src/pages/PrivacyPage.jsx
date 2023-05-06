import React, { Component, Fragment } from 'react'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import Privacy from '../../src/components/others/Privacy'

class PrivacyPage extends Component {
  
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

                {/* Privacy page load here */}
                <Privacy />


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

export default PrivacyPage
