import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Header from './layout/header/Header';
import Body from './layout/body/Body';
import Footer from './layout/footer/Footer';
import MainImage from './features/MainImage';
import PostsList from './features/posts/PostsList';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route 
            exact path="/" 
            render={() => (
              <React.Fragment>
                <MainImage />
                <Body>
                  <PostsList newest={true} />
                </Body>
              </React.Fragment>
            )}
          />
        </Switch>
        <Switch>
          <Route 
            exact path="/posts" 
            render={() => (
              <Body>
                {/* <PostList popular={true} /> */}
                {/* <PostList newest={true} /> */}
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
