import React, { Component, Fragment } from 'react'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import Productsdetails from '../components/products/Productsdetails'
import SggestProdct from '../components/products/SggestProdct'
import withRouter from '../withRouter'
class ProductDetailsPage extends Component {

    constructor() {
        super();
        this.state ={
            ProductId: []
        };
    }

    componentDidMount() {
        window.scroll(0, 0);
        let productid = this.props.params.product_id
        this.setState({ 
            ProductId: productid
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

                {/* product page load here */}
                <Productsdetails/>
                <SggestProdct />


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

export default withRouter(ProductDetailsPage)
