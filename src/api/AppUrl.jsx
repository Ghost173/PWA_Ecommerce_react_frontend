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

  static ProductListByCategory(category) {
    return this.BaseURL+"/productlistbycategory/"+category;
  }

  static ProductSubcategoryList(categoryid, subcategoryid){
    return this.BaseURL+"/productlistbysubcategory/"+categoryid+"/"+subcategoryid;
  }

}

export default AppUrl
