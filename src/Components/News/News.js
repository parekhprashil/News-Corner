import React, { Component } from "react";
import Newsitem from "../Newsitem/Newsitem";
import Loading from "../Loading/Loading";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class componentName extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
  };
  PropTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };
  articals = [];
  constructor() {
    super();
    this.state = {
      articals: this.articals,
      loading: true,
      page: 1,
      totalResults: 0,
    };
  }
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  async componentDidMount(props) {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.props.setProgress(30);
    let parseddata = await data.json();
    this.props.setProgress(70);
    this.setState({ articals: parseddata.articles });
    this.setState({
      articals: parseddata.articles,
      totalResults: parseddata.totalResults,
    });
    document.title = `NEWS Corner-${this.capitalizeFirstLetter(
      this.props.category
    )}`;
    this.setState({ loading: false });
    this.props.setProgress(100);
  }
  // prevclk = async () => {
  //   this.setState({ loading: true });
  //   let url = `https://newsapi.org/v2/top-headlines?country=${
  //     this.props.country
  //   }&category=${
  //     this.props.category
  //   }&apiKey=6a934a67ea214892951a44cfd0fd814d&page=${
  //     this.state.page - 1
  //   }&pageSize=${this.props.pageSize}`;
  //   this.setState({ page: this.state.page - 1 });
  //   let data = await fetch(url);
  //   let parseddata = await data.json();
  //   this.setState({ loading: false });
  //   this.setState({ articals: parseddata.articles });
  // };
  // nextclk = async () => {
  //   this.setState({ loading: true });
  //   let url = `https://newsapi.org/v2/top-headlines?country=${
  //     this.props.country
  //   }&category=${
  //     this.props.category
  //   }&apiKey=6a934a67ea214892951a44cfd0fd814d&page=${
  //     this.state.page + 1
  //   }&pageSize=${this.props.pageSize}`;
  //   this.setState({ page: this.state.page + 1 });
  //   let data = await fetch(url);
  //   let parseddata = await data.json();
  //   this.setState({ loading: false });
  //   this.setState({ articals: parseddata.articles });
  // };
  fetchMoreData = async (props) => {
    this.props.setProgress(10);
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    let data = await fetch(url);
    this.props.setProgress(30);
    let parseddata = await data.json();
    this.props.setProgress(70);
    this.setState({
      articals: this.state.articals.concat(parseddata.articles),
      totalResults: parseddata.totalResults,
    });
    document.title = `NEWS Corner-${this.capitalizeFirstLetter(
      this.props.category
    )}`;
    console.log(this.state.articals.length);
    console.log(this.state.totalResults);
    this.props.setProgress(100);
  };
  render(props) {
    return (
      <>
        <h2
          className="text-center"
          style={{ marginTop: "75px", marginBottom: "30px" }}
        >
          NEWS Corner {this.capitalizeFirstLetter(this.props.category)} Top-headlines
        </h2>
        {this.state.loading && <Loading />}
        <InfiniteScroll
          dataLength={this.state.articals.length}
          next={this.fetchMoreData}
          hasMore={this.state.articals.length !== this.state.totalResults}
          loader={<Loading></Loading>}
        >
          <div className="container">
            <div className="row">
              {this.state.articals.map((elements) => {
                return (
                  <div className="col-sm-3">
                    <Newsitem
                      title={elements.title ? elements.title : ""}
                      description={
                        elements.description ? elements.description : ""
                      }
                      imageurl={
                        elements.urlToImage
                          ? elements.urlToImage
                          : "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"
                      }
                      author={elements.author ? elements.author : "krutik"}
                      time={elements.publishedAt}
                      source={elements.source.name}
                      readmore={elements.url}
                      key={elements.url}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}
