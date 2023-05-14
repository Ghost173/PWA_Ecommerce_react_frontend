import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';

export class SubCategoryProducts extends Component {
  render() {

    const categoryid = this.props.categoryid;
    const subcategoryid = this.props.subcategoryid;
    const categoryname = this.props.categoryname;
    const subcategoryname = this.props.subcategoryname;
    const SubCategoryProductLists = this.props.SubCategoryProductLists;



    const data = SubCategoryProductLists.map((SubCategoryProductLists, i) => {

      if (SubCategoryProductLists.discount_price === 'na') {
        return <Col className='p-0' key={i.toString} xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className='image-box card w-100'>
            <Card.Body>
              <img className="center w-75" alt="foo" src={SubCategoryProductLists.product_image} />
            </Card.Body>
            <p className='product-name-on-card'>{SubCategoryProductLists.product_title}</p>
            <p className='product-price-on-card'>Rs: {SubCategoryProductLists.product_price}</p>
          </Card>
        </Col>
      } else {
        return <Col className='p-0' key={i.toString} xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className='image-box card w-100'>
            <Card.Body>
              <img className="center w-75" alt="foo" src={SubCategoryProductLists.product_image} />
            </Card.Body>
            <p className='product-name-on-card'>{SubCategoryProductLists.product_title}</p>
            <p className='product-price-on-card'>Rs: <strike>{SubCategoryProductLists.product_price}</strike> {SubCategoryProductLists.discount_price}</p>
          </Card>
        </Col>
      }
    })

    return (


      <Fragment>
        <Container className="text-center" fluid={true}>
                    <div className="section-title text-center mb-55">
                        <h2>{categoryname}/{subcategoryname}</h2>
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

export default SubCategoryProducts
