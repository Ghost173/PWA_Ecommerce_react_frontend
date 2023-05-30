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
}

export default AppUrl
