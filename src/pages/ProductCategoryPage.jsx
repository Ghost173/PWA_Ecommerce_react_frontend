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
            categoryname:[],
            CategoryProductLists: [],
            retries: 0,
        }
    }

    componentDidMount() {
        window.scroll(0, 0);
        let catid = this.props.params.category
        this.setState({ categoryid: catid })
        this.fetchData()

    }

    fetchData = () => {
        let catid = this.props.params.category
        axios.get(AppUrl.ProductListByCategory(catid)).then(response => {
            let statuscode = response.status;
            if (statuscode == 200) {
                let product_list_basedon_category = (response.data)['product_list_basedon_category'];
                let categoryname = response.data.category_name[0].category_name;
                this.setState({ CategoryProductLists:product_list_basedon_category, categoryname: categoryname})
                console.log(this.state.CategoryProductLists)
                console.log(this.state.categoryid)
            } else {
                this.handleFetchError();
            }
        }).catch(error => {
            this.handleFetchError();
        })
    }

    handleFetchError = () => {
        const { retries } = this.state;
        if (this.state.retries === 0) {
            setTimeout(() => {
                this.setState({ retries: retries + 1 });
                this.fetchData();
            }, 60000)

        } else {
            // Subsequent retries after 1 minute
            setTimeout(() => {
                this.setState({ retries: retries + 1 });
                this.fetchData();
            }, 180000);
        }
        if (retries === 0) {
            toast.error(
                "It looks like there was a problem retrieving the Products"
            );
        }
    };


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

                <CategoryProducts Category={this.state.categoryid} ProductsData = {this.state.CategoryProductLists} CatgegoryName= {this.state.categoryname}/>

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
