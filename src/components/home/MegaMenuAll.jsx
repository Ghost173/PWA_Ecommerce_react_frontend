import React, { Component } from 'react'
import axios from 'axios'
import AppUrl from '../../api/AppUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';



class MegaMenuAll extends Component {
    constructor() {
        super();
        this.state = {
            MenuData: [],
            retries: 0,
        }
    }


    fetchData = () => {
        axios.get(AppUrl.AllCategoryDetails).then(response => {
            let statuscode = response.status;
            if (statuscode == 200) {
                this.setState({
                    MenuData: response.data,
                    loaderDiv: "d-none",
                    mainDiv: "",
                    retries: 0, // Reset the retries count when the request succeeds
                })
            } else {
                this.handleFetchError();
            }
        }).catch(error => {
            this.handleFetchError();
        })
    }

    handleFetchError = () => {
        setTimeout(() => {
            this.setState({
                retries: this.state.retries + 1, // Increment the retries count
            });
            this.fetchData(); // Retry the request
        }, 3000);
    };

    componentDidMount() {
        this.fetchData();
    }

    MenuItemClick = (event) => {
        event.target.classList.toggle("active");
        var panel = event.target.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px"
        }
    }

    render() {
        const CategoryList = this.state.MenuData;
        const Myview = CategoryList.map((CategoryList, i) => {
            return <div key={i.toString()}>
                <button onClick={this.MenuItemClick} className='accordionAll'>
                    <img src={CategoryList.category_icon} alt="" className='accordionMenuIconAll' />
                    &nbsp; {CategoryList.category_name}
                </button>
                <div className='panelAll'>
                    <ul>

                        {
                            (CategoryList.subcat).map((SubCategorylist, i) => {
                                return <li>
                                    <Link to={"/productslistbysubcategory/" + CategoryList.id + "/" + SubCategorylist.id} className='accordionItem' target="_blank">
                                        {SubCategorylist.subcategory_name}
                                    </Link>
                                </li>
                            })
                        }
                    </ul>
                </div>

            </div>

        })

        return (
            <div className='accordionMenuDiv'>
                <div className='accordionMenuDivInside'>

                    {Myview}
                </div>

            </div>
        )
    }
}

export default MegaMenuAll
