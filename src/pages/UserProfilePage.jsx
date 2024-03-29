import React, { Component } from 'react'
import { Fragment } from 'react'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import Profile from '../components/user/Profile'

export class UserProfilePage extends Component {
    render() {

        const user = this.props.user;

        return (
            <Fragment>

                <div className='Desktop'>
                    <NavMenuDesktop />
                </div>

                <div className='Mobile'>
                    <NavMenuMobile />
                </div>


                {/* User profile components  */}
                <Profile/>

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

export default UserProfilePage
