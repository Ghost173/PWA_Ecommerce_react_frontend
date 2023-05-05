import React, { Component, Fragment } from 'react'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import UserLogin from '../components/user/UserLogin'

class UserLoginPage extends Component {
    render() {
        return (
            <Fragment>

                <div className='Desktop'>
                    <NavMenuDesktop />
                </div>

                <div className='Mobile'>
                    <NavMenuMobile />
                </div>


                {/* User login componets for login  */}
                <UserLogin />

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

export default UserLoginPage
