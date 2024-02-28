// import logo from "./logo.svg";
import "./App.css";
import News from "./Components/News/News";
import Navbar from "./Components/Navbar/Navbar";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
class App extends Component {
  apikey = process.env.REACT_APP_NEWS_API_KEY;
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({
      progress: progress,
    });
  };
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            Height="3"
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  apikey={this.apikey}
                  setProgress={this.setProgress}
                  pageSize="8"
                  category="general"
                />
              }
            ></Route>
          </Routes>
          <Routes>
            <Route
              exact
              path="/Business"
              element={
                <News
                  apikey={this.apikey}
                  setProgress={this.setProgress}
                  pageSize="8"
                  category="business"
                />
              }
            ></Route>
          </Routes>
          <Routes>
            <Route
              exact
              path="/Entertainment"
              element={
                <News
                  apikey={this.apikey}
                  setProgress={this.setProgress}
                  pageSize="8"
                  category="entertainment"
                />
              }
            ></Route>
          </Routes>
          <Routes>
            <Route
              exact
              path="/Sports"
              element={
                <News
                  apikey={this.apikey}
                  setProgress={this.setProgress}
                  pageSize="8"
                  category="sports"
                />
              }
            ></Route>
          </Routes>
          <Routes>
            <Route
              exact
              path="/Science"
              element={
                <News
                  apikey={this.apikey}
                  setProgress={this.setProgress}
                  pageSize="8"
                  category="science"
                />
              }
            ></Route>
          </Routes>
          <Routes>
            <Route
              exact
              path="/Health"
              element={
                <News
                  apikey={this.apikey}
                  setProgress={this.setProgress}
                  pageSize="8"
                  category="health"
                />
              }
            ></Route>
            <Route
              exact
              path="/Technology"
              element={
                <News
                  apikey={this.apikey}
                  setProgress={this.setProgress}
                  pageSize="8"
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
