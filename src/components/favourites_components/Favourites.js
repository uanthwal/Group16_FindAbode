/**
 * @author by Prerna Jain
 */
import React, { Component } from 'react';
import '../../css/favourites/favourites.css';
import Axios from "axios";
import { APP_URL_CONFIG } from "../../App.Urls";
import Links from "../Links";
import Footer from "../Footer";
import { UserContext } from '../../contexts/UserContext';

class Favourites extends Component {
    static contextType = UserContext;
    constructor(props) {
        super();
        this.state = {
            apartment_list: []
        }
    }

    viewDetail = (e, _id) => {
        e.preventDefault();
        this.props.history.push({
            pathname: '/search/' + _id
        });
    };

    deleteFavourite = async (e, _id) => {
        e.stopPropagation();
        let payload = {
            apartment_id: _id,
            email: this.context.userCredentials("email")
        };
        await Axios.post(APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.REMOVE_FROM_FAVOURITES, payload)
            .then((res) => {
                alert(res.data.message);
                this.getFavouritesForUser();
            });
    }

    componentDidMount() {
        this.getFavouritesForUser();
    }

    async getFavouritesForUser() {
        await Axios.post(APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.GET_FAVOURITES_FOR_USER, { email: this.context.userCredentials("email") })
            .then((res) => {
                this.setState({ apartment_list: res.data["data"] });
            });
    }

    render() {
        return (
            <div>
                <div className="outer-container">
                    <div className="heading-page">
                        <h1>Favourites</h1>
                    </div>
                    {this.state.apartment_list.length === 0 ? (
                        <center><h3 className="message" style={{ paddingTop: 40 }}>You do not have any apartments added in favourites yet!</h3></center>
                    ) : (
                            <div className="fav-containers">
                                {this.state.apartment_list.map((item, index) => {
                                    return (

                                        <div onClick={(e) => this.viewDetail(e, item._id)} key={index} className="card-container-fav">
                                            <img src={item.images[0]} className="card-img" alt="aprts showcases" />
                                            <div className="text-container">
                                                <p className="text-title">{item.name}</p>
                                                <span className="place-desc">
                                                    {item.number_of_guests} ·{" "}
                                                    {item.number_of_bedroom} ·{" "}
                                                    {item.number_of_beds} ·{" "}
                                                    {item.number_of_baths}
                                                </span>
                                                <p className="text-subtitles">Price: {item.price}</p>
                                                <p className="text-subtitles">Rating: {item.rating}</p>
                                                <center><button style={{ outline: "none" }} onClick={(event) => this.deleteFavourite(event, item._id)}>Remove from favourites</button></center>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>)}

                </div>
                <Links />
                <Footer />
            </div>
        );
    }
}
export default Favourites;