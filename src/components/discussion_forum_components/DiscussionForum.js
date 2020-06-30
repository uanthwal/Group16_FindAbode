import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Links from '../../components/Links';
import Footer from '../../components/Footer';
import { UserContext } from '../../contexts/UserContext';

const Question = props => (
    <tr>
      <td><Link to={'discussionforum1/'+props.question.topic}>{props.question.topic}</Link></td>
      <td>{props.question.user}</td>
    </tr>
  )
  
  export default class DiscussionForum extends Component {
	static contextType = UserContext;
	constructor(props) {
		super(props);
		this.handleSubmit= this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
	
		this.questionList = this.questionList.bind(this)
	
		this.state = {
			newques:"",
			questions: []};
	  }

	  componentDidMount() {
		axios.get('https://project-group16.herokuapp.com/discussionforum/')
		//axios.get('http://localhost:5000/discussionforum/')
		  .then(response => {
			this.setState({ questions: response.data })
		  })
		  .catch((error) => {
			console.log(error);
		  })
	  }

	  handleChange(e){
		let target = e.target;
		let value = target.value;


		this.setState({
			newques: value
		})
	}

	  questionList() {
		return this.state.questions.map(currentquestion => {
		  return <Question question={currentquestion} key={currentquestion.topic}/>;
		})
	  }

	  async handleSubmit(e){
		e.preventDefault();
	//	console.log("hii"+this.state.newques);
		let { login } = this.context;
		const { email } = this.context;
		let usrdata=[];
	//	console.log("email:"+email);
		if(login==false){
			this.props.history.push({
				pathname: '/signin/'
			});
		}else{
			if(this.state.newques!=""){
				let detail={}
			//	const { data } = await axios.get('http://localhost:5000/signup/' + email);
				const { data } = await axios.get('https://project-group16.herokuapp.com/signup/' + email);
				detail= data[0];
	//			console.log(detail.username);
			//    const { data } = axios.get('http://localhost:5000/signup/' + email);
			//    console.log("data:"+usrdata);
			//	axios.post('http://localhost:5000/discussionforum/addtopic/' , 
				axios.post('https://project-group16.herokuapp.com/discussionforum/addtopic/' , 
				{
					topic:this.state.newques,
					email:email,
					user:detail.username
				})
				.then(res => console.log(res.data));
			   window.location.reload();
				
			}else{
				alert('Please write your response.');
			}
		}
	  }

    render() {
      return (
        <div style={{ marginTop: 65 }}>
          <h3 class="text-center">Discussions</h3>
          <table className="table">
            <thead className="thead-light">
              <tr>
				<th>Topic</th>
                <th>User</th>
              </tr>
            </thead>
            <tbody>
			{ this.questionList() }
            </tbody>
          </table>
		  <div class="m-5">
            <form onSubmit={this.handleSubmit}>
                <div>
                    <textarea id="newques"  placeholder="Write a new topic to discuss.." style={{height:"170px"},{width:"100%"}} value={this.state.newques} onChange={this.handleChange}></textarea>
                </div>
            <button>Start new discussion</button>
            </form>
        </div>
		  <links/>
		  <footer/>
		  <Links/>
		  <Footer/>
        </div>
      )
    }
  }