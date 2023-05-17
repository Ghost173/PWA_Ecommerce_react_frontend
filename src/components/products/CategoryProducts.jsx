import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';

import 'react-toastify/dist/ReactToastify.css';
import Alert from 'react-bootstrap/Alert';
import LoadinAnimation from '../../validation/LoadinAnimation';
import { Link } from 'react-router-dom';

class CategoryProducts extends Component {
  render() {



    const catproductlist = this.props.ProductsData;
    const catgeory = this.props.Category;
    const CatgegoryName = this.props.CatgegoryName;

    const data = catproductlist.map((catproductlist, i) => {

      if (catproductlist.discount_price === 'na') {
        return <Col className='p-0' key={i.toString} xl={3} lg={3} md={3} sm={6} xs={6}>
          <Link className='text-link' to={"/singleproductdetails/"+ catproductlist.id}>
          <Card className='image-box card w-100'>
            <Card.Body>
              <img className="center w-75" alt="foo" src={catproductlist.product_image} />
            </Card.Body>
            <p className='product-name-on-card'>{catproductlist.product_title}</p>
            <p className='product-price-on-card'>Rs: {catproductlist.product_price}</p>
          </Card>
          </Link>
         
        </Col>
      } else {
        return <Col className='p-0' key={i.toString} xl={3} lg={3} md={3} sm={6} xs={6}>
          <Link className='text-link' to={"/singleproductdetails/"+ catproductlist.id}>
          <Card className='image-box card w-100'>
            <Card.Body>
              <img className="center w-75" alt="foo" src={catproductlist.product_image} />
            </Card.Body>
            <p className='product-name-on-card'>{catproductlist.product_title}</p>
            <p className='product-price-on-card'>Rs: <strike className="text-secondary">{catproductlist.product_price}</strike> {catproductlist.discount_price}</p>
          </Card>
          </Link>
         
        </Col>
      }


    })
    return (
      <Fragment>
      <Container className="text-center" fluid={true}>
                    <div className="section-title text-center mb-55">
                        <h2>{CatgegoryName}</h2>
                        <p>Some of Our Exclusive Collection, You May like!</p>

                    </div>
                
                        <Row>
                            {data}
                        </Row>



                </Container>
      </Fragment>
    )
  }
}

export default CategoryProducts
