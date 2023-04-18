import React, { Component, Fragment } from 'react'

class MegaMenu extends Component {

  constructor() {
    super();
    console.log("MyComponent constructor called");
    this.MegaMenus = this.MegaMenus.bind(this);
  }

  componentDidMount() {
    console.log("MegaMenus mounted");
    this.MegaMenus();
  }

  MegaMenus() {
    var acc = document.getElementsByClassName("accordion");
    var accnumber = acc.length;
    for (var i = 0; i < accnumber; i++) {
      if (!acc[i].hasAttribute("data-clicked")) {
        acc[i].setAttribute("data-clicked", "true");
        acc[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if(panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight+ "px"
          }
        });
      }
    }
  }

  render() {
    return (
      <div className='accordionMenuDiv'>
        <div className='accordionMenuDivInside'>
          <button className='accordion'>
              <img src="https://img.icons8.com/material-outlined/1x/image.png" alt="" className='accordionMenuIcon'/>
              &nbsp; Cotton Items
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

          <button className='accordion'>
              <img src="https://img.icons8.com/material-outlined/1x/image.png" alt="" className='accordionMenuIcon'/>
              &nbsp; Cotton Items
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


          <button className='accordion'>
              <img src="https://img.icons8.com/material-outlined/1x/image.png" alt="" className='accordionMenuIcon'/>
              &nbsp; Cotton Items
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


          <button className='accordion'>
              <img src="https://img.icons8.com/material-outlined/1x/image.png" alt="" className='accordionMenuIcon'/>
              &nbsp; Cotton Items
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


          <button className='accordion'>
              <img src="https://img.icons8.com/material-outlined/1x/image.png" alt="" className='accordionMenuIcon'/>
              &nbsp; Cotton Items
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


          <button className='accordion'>
              <img src="https://img.icons8.com/material-outlined/1x/image.png" alt="" className='accordionMenuIcon'/>
              &nbsp; Cotton Items
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

          <button className='accordion'>
              <img src="https://img.icons8.com/material-outlined/1x/image.png" alt="" className='accordionMenuIcon'/>
              &nbsp; Cotton Items
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

          <button className='accordion'>
              <img src="https://img.icons8.com/material-outlined/1x/image.png" alt="" className='accordionMenuIcon'/>
              &nbsp; Cotton Items
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


          <button className='accordion'>
              <img src="https://img.icons8.com/material-outlined/1x/image.png" alt="" className='accordionMenuIcon'/>
              &nbsp; Cotton Items
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

          <button className='accordion'>
              <img src="https://img.icons8.com/material-outlined/1x/image.png" alt="" className='accordionMenuIcon'/>
              &nbsp; Cotton Items
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

          <button className='accordion'>
              <img src="https://img.icons8.com/material-outlined/1x/image.png" alt="" className='accordionMenuIcon'/>
              &nbsp; Cotton Items
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


          <button className='accordion'>
              <img src="https://img.icons8.com/material-outlined/1x/image.png" alt="" className='accordionMenuIcon'/>
              &nbsp; Cotton Items
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


          <button className='accordion'>
              <img src="https://img.icons8.com/material-outlined/1x/image.png" alt="" className='accordionMenuIcon'/>
              &nbsp; Cotton Items
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


          <button className='accordion'>
              <img src="https://img.icons8.com/material-outlined/1x/image.png" alt="" className='accordionMenuIcon'/>
              &nbsp; Cotton Items
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

          <button className='accordion'>
              <img src="https://img.icons8.com/material-outlined/1x/image.png" alt="" className='accordionMenuIcon'/>
              &nbsp; Cotton Itemsssss
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

      </div>
    )
  }
}

export default MegaMenu
