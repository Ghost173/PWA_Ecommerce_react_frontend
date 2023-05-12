import React, { Component, Fragment } from 'react'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import CategoryProducts from '../components/products/CategoryProducts'
import withRouter from '../withRouter'
import { ToastContainer, toast } from 'react-toastify';

import axios from 'axios'
import AppUrl from '../api/AppUrl';


class ProductCategoryPage extends Component {

    constructor({ }) {

        super();
        this.state = {
            categoryid: [],
            CategoryProductLists: []
        }
    }

    componentDidMount() {
        window.scroll(0, 0);
        let catid = this.props.params.category
        this.setState({ categoryid: catid })

        axios.get(AppUrl.ProductListByCategory(catid)).then(response => {
            let statuscode = response.status;
            if (statuscode == 200) {
                this.setState({ CategoryProductLists: response.data })
                console.log(this.state.CategoryProductLists)
                console.log(this.state.categoryid)
            } else {
                toast.error("Something went wrong please try agin later")
            }
        }).catch(error => {
            setTimeout(() => {
                toast.error("It looks like there was a problem retrieving the category data. Please contact support if the problem persists")
            }, 3000); // wait for 3 seconds before showing the error message
        })


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

                {/* Products based on the selected category */}
                <CategoryProducts Category={this.state.categoryid} ProductsData = {this.state.CategoryProductLists}/>

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
export default withRouter(ProductCategoryPage)
