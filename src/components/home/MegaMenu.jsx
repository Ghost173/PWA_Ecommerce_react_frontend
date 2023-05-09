import React, { Component, Fragment } from 'react'

class MegaMenu extends Component {

  constructor(props) {
    super();
  }



  MegaMenus() {
    var acc = document.getElementsByClassName("accordion");
    var accnumber = acc.length;
    for (var i = 0; i < accnumber; i++) {
      if (!acc[i].hasAttribute("data-clicked")) {
        acc[i].setAttribute("data-clicked", "true");
        acc[i].addEventListener("click", function () {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px"
          }
        });
      }
    }
  }

  render() {


    const CategoryList = this.props.data;
    const Myview = CategoryList.map((CategoryList, i) => {
      return <div key={i.toString()}>
        <button className='accordion'>
          <img src={CategoryList.category_icon} alt="" className='accordionMenuIcon' />
          &nbsp; {CategoryList.category_name}
        </button>
        <div className='panel'>
          <ul>
            <li>
              <a href='#' className='accordionItem'>Sarees</a>
            </li>
            <li>
              <a href='#' className='accordionItem'>Sarees</a>
            </li>
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
