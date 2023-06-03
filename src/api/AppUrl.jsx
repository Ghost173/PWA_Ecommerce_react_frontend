class AppUrl {
  static BaseURL = "http://127.0.0.1:8000/api"
  static VisitorDetails = this.BaseURL + "/createvisitor"
  static contactpost = this.BaseURL + "/postcontact"
  static allsiteinfo = this.BaseURL + "/allsiteinfo"
  static AllCategoryDetails = this.BaseURL + "/allcategory"
  static FeatureProducts = this.BaseURL + "/featureProducts"
  static NewArrivalProducts = this.BaseURL + "/newarrivals"
  static ProductsCollections = this.BaseURL + "/productscolletions"
  static HomeSliderImages = this.BaseURL + "/getsliders"
  static Notifications = this.BaseURL + "/getnotifications"



  static ProductListByCategory(category) {
    return this.BaseURL+"/productlistbycategory/"+category;
  }

  static ProductSubcategoryList(categoryid, subcategoryid){
    return this.BaseURL+"/productlistbysubcategory/"+categoryid+"/"+subcategoryid;
  }

  static SingleProductDetails(product_id) {
    return this.BaseURL+"/productdetails/"+product_id;
  }


  static SuggestProducts(product_id) {
    return this.BaseURL+"/suggestproducts/"+product_id;
  }

  static ProductsSearch(key) {
    return this.BaseURL+"/search/"+key;
  }


  static ProductReviewsList(product_id) {
    return this.BaseURL+"/reviewlists/"+product_id;
  }

  static ProductCountInCart(id) {
    return this.BaseURL+"/cartcount/"+id;
  }

  // user related api calls 
  static UserLogion = this.BaseURL + "/login"

  static UserData = this.BaseURL + "/user"

  static UserRegister = this.BaseURL + "/register"
  static UserForgetPassword = this.BaseURL + "/forgotpassword"
  static UserRestPassword = this.BaseURL + "/restpassword"
  

  //Add to Cart
  static UserAddToCart = this.BaseURL + "/addtocart"

  //get cart items
  static GetCartDetails = this.BaseURL + "/getcartitems"

    //remove cart items
  static RemoveCartItem(cart_id) {
    return this.BaseURL+"/removecartitem/"+cart_id;
  }

  // increase cart item Quantity by +1 
  static IncreaseCartItem(cart_id) {
    return this.BaseURL+"/cartitemplus/"+cart_id;
  }
  
  //decrease art item Quantity by -1 
  static DecreaseCartItem(cart_id) {
    return this.BaseURL+"/cartitemminus/"+cart_id;
  }

  //orders
  static CartOrder = this.BaseURL + "/cartorders"

  //get all orders details of login users
  static AuthUserOrderDetails = this.BaseURL + "/authuserorders"

}

export default AppUrl
