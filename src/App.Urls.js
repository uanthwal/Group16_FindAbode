export var APP_URL_CONFIG = {
  BASE_URL: getConfigs()["BASE_URL"],
  SEARCH: "/apartments/search-apartments",
  SIGNUP: "/signup/",
  SIGNUP_DETAILS: "/signup",
  DISCUSSION_FORUM: "/discussionforum/",
  ADD_TOPIC: "/discussionforum/addtopic/",
  VIEW_DISCUSSION: "/discussionforum/",
  GET_ALL_PLACES: "/apartments/all-apartments",
  DELETE_APARTMENT: "/apartments/delete",
  ADD_BLOG: "/blog/addblog/",
  ALL_BLOGS: "/blog/",
  EDIT_BLOG: "/blog/modifyblog/",
  GET_ONE_BLOG: "/blog/oneblog/",
  DELETE_BLOG: "/blog/deleteblog/",
  GET_FEATURED_APARTMENTS: "/apartments/get-featured",
  GET_APARTMENT_DETAILS_BY_ID: "/apartments/get-apartment-details",
  UPDATE_APARTMENT_DETAILS: "/apartments/update-apartment-details",
  CONTACT_US: "/contact/",
  JOB_DEPARTMENTS: "/job/departments",
  JOB_LIST: "/jobdetails/job",
  ADD_APARTMENT:"/apartments/add-apartment"
};

export function getConfigs() {
  let protocol = window.location.protocol + "//" + window.location.host;
  if (protocol === "http://localhost:3000") {
    return {
      BASE_URL: "http://localhost:5000",
    };
  } else {
    return {
      BASE_URL: "https://project-group16.herokuapp.com",
    };
  }
}
