export var APP_URL_CONFIG = {
  BASE_URL: getConfigs()["BASE_URL"],
  SEARCH: "/apartments/search-apartments",
  SIGNUP: "/signup/",
  SIGNUP_DETAILS: '/signup',
  DISCUSSION_FORUM:'/discussionforum/',
  ADD_TOPIC:'/discussionforum/addtopic/',
  VIEW_DISCUSSION: '/discussionforum/',
  GET_ALL_PLACES:'/apartments/all-apartments',
  DELETE_APARTMENT: '/apartments/delete',
  ADD_BLOG: '/blog/addblog/',
  ALL_BLOGS: '/blog',
  GET_FEATURED_APARTMENTS: '/apartments/get-featured',
  PROPERTY_DETAILS: '/apartments/get-apartment-details',
  CONTACT_US: '/contact/'
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
