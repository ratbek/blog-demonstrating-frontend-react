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
import SinglePost from './features/posts/SinglePost';
import ScrollToTop from './features/ScrollToTop';
import EditPostForm from './features/posts/EditPostForm';
import AddPostForm from './features/posts/AddPostForm';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Switch>
          <Route 
            exact path="/" 
            render={() => (
              <React.Fragment>
                <MainImage />
                <Body inContainer={true}>
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
              <Body inContainer={true}>
                <PostsList popular={true} />
                <PostsList latest={true} />
              </Body>
            )}
          />
        </Switch>
        <Switch>
          <Route 
            exact path="/posts/:postId" 
            render={({match}) => (
              <Body inContainer={true}>
                <SinglePost match={match} />
              </Body>
            )}
          />
        </Switch>
        <Switch>
          <Route 
            exact path="/add-post"
            render={({match}) => (
              <Body inContainer={true}>
                <AddPostForm match={match}/>
              </Body>
            )}
          />
        </Switch>
        <Switch>
          <Route 
            exact path="/edit-post/:postId"
            render={({match}) => (
              <Body inContainer={true}>
                <EditPostForm match={match}/>
              </Body>
            )}
          />
        </Switch>
        <Switch>
          <Route 
            exact path="/registration"
            render={() => (
              <Body inContainer={true}>
                {/* <RegistrationForm /> */}
              </Body>
            )}
          />
        </Switch>
        <Switch>
          <Route 
            exact path="/login"
            render={() => (
              <Body inContainer={true}>
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
