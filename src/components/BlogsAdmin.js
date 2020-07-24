//Author: Simranbanu Roshansha Diwan (B00833562)

import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { APP_URL_CONFIG } from "../App.Urls";
import axios from "axios";

import blogimg from '../images/landingpage_sub.jpg';
import { UserContext } from "../contexts/UserContext";

import Links from './Links';
import Footer from './Footer';

//resuable blogs component which is iterated as per number of blogs while rendering 
const Blog = (props) => (
	<div>
	<div className="card bg-light border-dark mx-auto" style={{ width: '80%' }}>
					<img
						className="card-img-top mx-auto rounded d-block"
						src={blogimg}
						style={{ width: '70%' }}
						alt="profile image"
					/>
					<div className="card-body">
						<h2 className="card-title text-center">
							<kbd>{props.blog.topic}</kbd>
						</h2>
						<p className="card-text text-justify ">
							{props.blog.p1}
						</p>
						<p className="card-text text-justify ">
							{props.blog.p2}
						</p>
					</div>
				</div>
                <div className="text-center">
                <Link to={"editblog/"+ props.blog.topic} >Edit blog</Link>
				</div>
                <br />
			</div>
);

//Class for blogsAdmin component

class BlogsAdmin extends Component {
	static contextType = UserContext;
	constructor(props) {
		
		super(props);
        this.blogList = this.blogList.bind(this);
		this.state = {
		  blogs:[],
		};
	  }
	
	componentDidMount() {
	//Checking if admin has logged in or not
	let { login } = this.context;
    if (login == false) {
      this.props.history.push({
        pathname: "/signin/",
      });
      return;
	}	
	//fetching all the blogs from the backend
    axios
      .get(APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.ALL_BLOGS)
      .then((response) => {
		this.setState({ blogs: response.data });
		console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
	  });
	  
	  }

	//Creating a list of blogs
	blogList() {
		console.log(this.state.blogs)
		return this.state.blogs.map((currentblog) => {
		return (
			<Blog blog={currentblog} key={currentblog.topic} />
		);
		});
	}
     
    //Render method for rendering a component
	render() {
		return (
			<div style={{ marginTop: 75 }}>
				<h2 className="text-center">Blogs</h2>
				<div className="text-center">
				<Link to="createblog" className="text-center">Create a new blog</Link>
				</div>
				<br/>
				<div>
				{this.blogList()}
				</div>
				<Links />
				<Footer />
			</div>
		);
	}
}

export default BlogsAdmin;
