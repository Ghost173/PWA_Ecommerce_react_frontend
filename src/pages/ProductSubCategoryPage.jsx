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
import SubCategoryProducts from '../components/products/SubCategoryProducts'

export class ProductSubCategoryPage extends Component {


    constructor({ }) {

        super();
        this.state = {
            categoryid: [],
            subcategoryid: [],
            categoryname:[],
            subcategoryname:[],
            SubCategoryProductLists: []
        }
    }

    componentDidMount() {
        window.scroll(0, 0);
        let categoryid = this.props.params.category
        let subcategoryid = this.props.params.subcategory
        this.setState({ categoryid: categoryid , subcategoryid: subcategoryid});

      

        axios.get(AppUrl.ProductSubcategoryList(categoryid,subcategoryid)).then(response => {
            let statuscode = response.status;
            if (statuscode == 200) {
                let product_list_basedon_subcategory = (response.data)['product_list_basedon_subcategory'];
                let categoryname = response.data.category_name[0].category_name;
                let subcategoryname = response.data.subcategory_name[0].subcategory_name;
                this.setState({ SubCategoryProductLists:product_list_basedon_subcategory, categoryname: categoryname,subcategoryname:subcategoryname  })
                console.log(product_list_basedon_subcategory);
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

                {/* Products based on the selected subcategory */}
                <SubCategoryProducts 
                 categoryid={this.state.categoryid} subcategoryid={this.state.subcategoryid} 
                 categoryname={this.state.categoryname}
                 subcategoryname={this.state.subcategoryname}
                 SubCategoryProductLists={this.state.SubCategoryProductLists}
                />

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

export default withRouter(ProductSubCategoryPage)
