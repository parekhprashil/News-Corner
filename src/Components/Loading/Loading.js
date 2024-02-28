import React, { Component } from "react";

export default class Loading extends Component {
  render() {
    return (
      <div className="text-center">
        <div class="spinner-grow text-primary mx-2" role="status">
          <span class="sr-only"></span>
        </div>
        <div class="spinner-grow text-secondary mx-2" role="status">
          <span class="sr-only"></span>
        </div>
        <div class="spinner-grow text-success mx-2" role="status">
          <span class="sr-only"></span>
        </div>
        <div class="spinner-grow text-danger mx-2" role="status">
          <span class="sr-only"></span>
        </div>
        <div class="spinner-grow text-warning mx-2" role="status">
          <span class="sr-only"></span>
        </div>
        <div class="spinner-grow text-info mx-2" role="status">
          <span class="sr-only"></span>
        </div>
        <div class="spinner-grow text-light mx-2" role="status">
          <span class="sr-only"></span>
        </div>
        <div class="spinner-grow text-dark mx-2" role="status">
          <span class="sr-only"></span>
        </div>
      </div>
    );
  }
}
