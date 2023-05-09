import React, { Component } from 'react'
import axios from 'axios'
import AppUrl from '../../api/AppUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class MegaMenuAll extends Component {
    constructor() {
        super();
        this.state = {
            MenuData: []
        }
    }

    componentDidMount() {
        axios.get(AppUrl.AllCategoryDetails).then(response => {
            let statuscode = response.status;
            if (statuscode == 200) {
                this.setState({ MenuData: response.data })
            } else {
                toast.error("Something went wrong please try agin later")
            }
        }).catch(error => {
            toast.error("Unable to retrieve Menu data")
        })
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
                                return <li><a href='#' className='accordionItemAll'>{SubCategorylist.subcategory_name}</a></li>
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
