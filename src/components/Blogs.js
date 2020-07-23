import React, { Component } from 'react';
import { APP_URL_CONFIG } from "../App.Urls";
import axios from "axios";

import blogimg from '../images/landingpage_sub.jpg';

import Links from './Links';
import Footer from './Footer';

const Blog = (props) => (
    <div>
    <div class="card bg-light border-dark mx-auto" style={{ width: '80%' }}>
                    <img
                        class="card-img-top mx-auto rounded d-block"
                        src={blogimg}
                        style={{ width: '70%' }}
                        alt="profile image"
                    />
                    <div class="card-body">
                        <h2 class="card-title text-center">
                            <kbd>{props.blog.topic}</kbd>
                        </h2>
                        <p class="card-text text-justify ">
                            {props.blog.p1}
                        </p>
                        <p class="card-text text-justify ">
                            {props.blog.p2}
                        </p>
                    </div>
                </div>
                <br />
            </div>
);

class Blogs extends Component {

    constructor(props) {
        super(props);
    //  this.handleSubmit = this.handleSubmit.bind(this);
        this.blogList = this.blogList.bind(this);
        this.state = {
          blogs:[],
        };
      }
    
    componentDidMount() {
//  this.setState({blogs:tempblogs});
    axios
      .get(APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.ALL_BLOGS)
      .then((response) => {
        this.setState({ blogs: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
      }
      
    blogList() {
        return this.state.blogs.map((currentblog) => {
        return (
            <Blog blog={currentblog} key={currentblog.topic} />
        );
        });
    }
      
    render() {
        return (
            <div style={{ marginTop: 75 }}>
                <h2 class="text-center">Blogs</h2>
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

export default Blogs;

