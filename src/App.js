import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import './App.css';
import Header from './layout/header/Header';
import Body from './layout/body/Body';
import Footer from './layout/footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route 
            exact path="/" 
            render={() => (
              <Body>
                {/* <MainImage /> */}
                {/* <PostList /> */}
              </Body>
            )}
          />
        </Switch>
        <Switch>
          <Route 
            exact path="/posts/:postId" 
            render={() => (
              <Body>
                {/* <SinglePost /> */}
              </Body>
            )}
          />
        </Switch>
        <Switch>
          <Route 
            exact path="/editPost/:postId"
            render={() => (
              <Body>
                {/* <EditPostForm /> */}
              </Body>
            )}
          />
        </Switch>
        <Switch>
          <Route 
            exact path="/registration"
            render={() => (
              <Body>
                {/* <RegistrationForm /> */}
              </Body>
            )}
          />
        </Switch>
        <Switch>
          <Route 
            exact path="/login"
            render={() => (
              <Body>
                {/* <LoginForm /> */}
              </Body>
            )}
          />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
