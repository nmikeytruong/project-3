import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class FrontPage extends Component {
  render() {
    return (
        <div className="row">
          <div className="social">
            <h4>
              <b>A new age dating</b> site that gives you what you want{' '}
            </h4>
            <p className="description">Find your match with Social Match</p>
            <br />
            <div className="reg">
              <Link
                to="/register"
                style={{
                  width: '140px',
                  borderRadius: '3px',
                  letterSpacing: '1.5px',
                  color: 'white'
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>
            <div className="login">
              <Link
                to="/login"
                style={{
                  width: '140px',
                  borderRadius: '3px',
                  letterSpacing: '1.5px',
                  color: 'white'
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
    );
  }
}

export default FrontPage;
