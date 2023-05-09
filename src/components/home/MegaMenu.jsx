import React, { Component, Fragment } from 'react'

class MegaMenu extends Component {

  constructor(props) {
    super();
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


    const CategoryList = this.props.data;
    const Myview = CategoryList.map((CategoryList, i) => {
      return <div key={i.toString()}>
        <button onClick={this.MenuItemClick} className='accordion'>
          <img src={CategoryList.category_icon} alt="" className='accordionMenuIcon' />
          &nbsp; {CategoryList.category_name}
        </button>
        <div className='panel'>
          <ul>

            {
              (CategoryList.subcat).map((SubCategorylist, i) => {
                return <li><a href='#' className='accordionItem'>{SubCategorylist.subcategory_name}</a></li>
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

export default MegaMenu
