import React, { Component } from "react";
import API from "../utils/API";
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import MatchCard from "../components/MatchCard";
import { Link } from "react-router-dom";
import DeleteBtn from "../components/DeleteBtn";
import { List, ListItem } from "../components/List";
import Wrapper from "../components/Wrapper";
import './style.css';

class Profiles extends Component {
  state = {
    profiles: [],
    imageurl: "",
    email: "",
    username: "",
    gender: "",
    lookingFor: "",
    interests: "",
    aboutMe: ""
  };

  componentDidMount() {
    this.loadProfiles();
  }

  loadProfiles = () => {
    API.getProfiles()
      .then(res =>
        this.setState({ profiles: res.data, imageurl: "",
        email: "",
        username: "",
        gender: "",
        lookingFor: "",
        interests: "",
        aboutMe: "" })
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.username && this.state.gender && this.state.lookingFor) {
      API.saveProfile({
        imageurl: this.state.imageurl,
        email: this.state.email,
        username: this.state.username,
        gender: this.state.gender,
        lookingFor: this.state.lookingFor,
        interests: this.state.interests,
        aboutMe: this.state.aboutMe
      })
        .then(res => this.loadProfiles())
        .catch(err => console.log(err));
    };
  };



  render() {
  return (
  <Container style={{mariginTop: 30}}>
    <Row>
      <Col size="md-12">
        <h1>Social Match Profile</h1>
        <h3>Your Profile</h3>
        {this.state.profiles.forEach(  authUser => (
          <MatchCard
            id={authUser._id}
            key={authUser._id}
            username={authUser.username}
            imageurl={authUser.imageurl}
            gender={authUser.gender}
            lookingFor={authUser.lookingFor}
            interests={authUser.interests}
            aboutMe={authUser.aboutMe}
          />
        ))}

        


        <Link
          to="/EditProfile"
          className={
            window.location.pathname === '/EditProfile'
              ? 'nav-link-active'
              : 'nav-link'
          }
        >
          Edit Profile
        </Link>

        <h1>Other Profiles</h1>

        <Wrapper>
        {this.state.profiles.map(profile => (
          <MatchCard
            id={profile._id}
            key={profile._id}
            username={profile.username}
            imageurl={profile.imageurl}
            gender={profile.gender}
            lookingFor={profile.lookingFor}
            interests={profile.interests}
            aboutMe={profile.aboutMe}
          />
        ))}
        </Wrapper>          
      </Col>
    </Row>
  </Container>
  );
}}
 
export default Profiles;