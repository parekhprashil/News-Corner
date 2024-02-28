import React, { Component } from "react";
import "./Newsitem.css";
export default class componentName extends Component {
  render() {
    let { title, description, imageurl, readmore, author, time, source } =
      this.props;

    return (
      <div>
        <div className="card my-2" style={{ width: "18rem;" }}>
          <img src={imageurl} className="cardimgtop" alt="..." />
          <span
            class="position-absolute top-20 translate-middle badge rounded-pill bg-danger"
            style={{ left: "85%" }}
          >
            <span class="badge text-bg-danger">{source}</span>
            <span class="visually-hidden">unread messages</span>
          </span>
          <div className="cardbody">
            <h5 className="cardtitle mx-2">{title}</h5>
            <p className="cardtext mx-2 ">{description}</p>
            <footer class="blockquote-footer">
              By {author}
              <cite title="Source Title">
                {" "}
                on {new Date(time).toGMTString()}
              </cite>
            </footer>
            <a
              href={readmore}
              className="btn btn-dark btn-sm mx-2 my-2"
              target="_blank"
              rel="noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
