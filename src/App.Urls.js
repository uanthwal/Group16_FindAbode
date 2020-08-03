/**
 * @author Parsad Upendra(upendra@dal.ca)
 * BANNER ID: B00838095
 */

export var APP_URL_CONFIG = {
  BASE_URL: getConfigs()["BASE_URL"],
  SEARCH: "/apartments/search-apartments",
  USER_SIGNUP: "/user/signup",
  USER_SIGNIN: "/user/login",
  DELETE_USER: "/user/",
  UPDATE_USER_INFO: "/user/update-user-info",
  GET_USER_INFO: "/user/info",
  GET_APPOINTMENTS: "/appointment/get-appointments",
  BOOK_APPOINTMENT:"/appointment/book-appointment",
  DELETE_APPOINTMENT:"/appointment/delete/",
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
  FAQ: "/faq/get-faq-list",
  JOB_DEPARTMENTS: "/job/departments",
  JOB_LIST: "/jobdetails/job",
  ADD_APARTMENT: "/apartments/add-apartment",
  APPLY_JOB: "/jobdetails/apply",
  ADD_JOB: "/jobdetails/add",
  SURVEY_QUESTION: "/surveyQuestions/question",
  SURVEY_ANSWER: "/surveyAnswers/response",
  SAVE_RATING: "/rating/save",
  ADD_FAVOURITE: "/favourites/add-to-favourites",
  GET_FAVOURITES_FOR_USER: "/favourites/get-favourites",
  REMOVE_FROM_FAVOURITES:"/favourites/remove",
};

/**
 * This function was created to avoid changing the URLs while development.
 */

export function getConfigs() {
  let protocol = window.location.protocol + "//" + window.location.host;
  if (protocol === "http://localhost:3000") {
    return {
      BASE_URL: "http://localhost:5000",
    };
  } else {
    return {
      BASE_URL: "https://tutorial16-group16.herokuapp.com",
    };
  }
}
