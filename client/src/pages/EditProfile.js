import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";
import Wrapper from "../components/Wrapper";
import MatchCard from "../components/MatchCard";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class EditProfile extends Component {
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

  deleteProfile = id => {
    API.deleteProfile(id)
      .then(res => this.loadProfiles())
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
        <Container fluid>
        <Row>
          <Col size="md-6">
            
            <form>
              <Input
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
                placeholder="Username (required)"
              />
              <Input
                value={this.state.gender}
                onChange={this.handleInputChange}
                name="gender"
                placeholder="Gender (required)"
              />
              <Input
                value={this.state.imageurl}
                onChange={this.handleInputChange}
                name="imageurl"
                placeholder="Image URL (required)"
              />
              <TextArea
                value={this.state.aboutMe}
                onChange={this.handleInputChange}
                name="aboutMe"
                placeholder="About Yourself (Optional)"
              />
              <TextArea
                value={this.state.interests}
                onChange={this.handleInputChange}
                name="interests"
                placeholder="Interests (Optional)"
              />
              <FormBtn
                disabled={!(this.state.username && this.state.gender)}
                onClick={this.handleFormSubmit}
              >
                Save Profile
              </FormBtn>
            </form>
          </Col>          
        </Row>
      </Container>
      
    );
  }

  
}


export default EditProfile;