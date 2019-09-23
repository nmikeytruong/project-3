import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import FrontPage from './components/SocialPage';
// import Card from './components/Card';
// import Login from './components/Login';
// import Register from './components/Login';
// import Login from './pages/Login';
// import Profile from './pages/Profile';
// import Register from './pages/Register';
// import Wrapper from './components/Wrapper';
import './index.css';
// import login from './components/Login/login';
// import Main from './pages/welcome';
// import Jumbotron from './components/Jumbotron';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          {/* <Card> */}
            <h1 className="animated flipInX">Social Match</h1>
            <Route exact path="/" component={FrontPage} />
            {/* <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} /> */}
          {/* </Card> */}
        </div>
      </Router>
    );
  }
}
// function App() {
//   return (
//     <Router>
//       <div>
//         <Wrapper>
//           <h1 class="animated flipInX">Social Match</h1>
//           <Route exact path="/login" component={Login} />
//           <Route exact path="/profile" component={Profile} />
//           <Route exact path="/register" component={Register} />
//         </Wrapper>
//       </div>
//     </Router>
//   );
// }

export default App;
