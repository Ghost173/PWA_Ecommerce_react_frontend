import React, { Component, Fragment } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
import AppUrl from '../../api/AppUrl';


class HomeSlider extends Component {

  constructor() {
    super();
    this.state = {
      sliderImages: [],
      loaderDiv: "",
      mainDiv: "d-none",
      retries: 0,
    }
  }


  fetchData = () => {
    axios
      .get(AppUrl.HomeSliderImages)
      .then((response) => {
        let statuscode = response.status;
        if (statuscode == 200) {
          this.setState({
            sliderImages: response.data,
            loaderDiv: "d-none",
            mainDiv: "",
            retries: 0, // Reset the retries count when the request succeeds
          });
        } else {
          this.handleFetchError();
        }
      })
      .catch((error) => {
        this.handleFetchError();
      });
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
        "It looks like there was a problem retrieving the Slider Images"
      );
    }
  };


  componentDidMount() {
    this.fetchData();
  }

  render() {

    const sliderimages = this.state.sliderImages;
    const data = sliderimages.map((sliderimages, i) => {
      return <div key={i.toString}>
        <img className='slider-img' src={sliderimages.slider_image} />
      </div>
    })




    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (

      <div>

        <div className={this.state.loaderDiv}>
          <div class="ph-item">
            <div class="ph-col-12">
              <div class="ph-picture"></div>
            </div>
          </div>
        </div>


        <div className={this.state.mainDiv}>
          <Slider {...settings}>
            {data}
          </Slider>
        </div>

      </div>
    )
  }
}

export default HomeSlider
