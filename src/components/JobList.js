import axios from "axios";
import React, { Component } from "react";
import "./style.css";
import { General, Tags } from "../styles/styles";

const url = "https://reto3-camilo.herokuapp.com/ofertas";

export default class JobList extends Component {
  constructor() {
    super();
    this.state = {
      buscador: "",
      vista: "search--hidden",
      data: [],
      filter: [],
    };
  }

  peticionGet = () => {
    axios
      .get(url)
      .then((response) => {
        this.setState({ data: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.peticionGet();
  }

  buscarBtn = (e) => {
    if (this.state.vista === "search--hidden") {
      this.setState({ vista: "search" });
      this.setState({ buscador: (e.target.value)});
    }
  };

  borrarBtn = (e) => {
    if (this.state.vista === "search") {
      this.setState({ vista: "search--hidden" });
    }
  };

  render() {
    return (
      <div className="body">
        <header className="header"></header>
        <div className="container">
          <div>
            <div id="search" className={this.state.vista}>
              <div className="close-tag" id="search-content">{this.state.buscador}</div>
              <button id="clear" className="search_clear" onClick={this.borrarBtn}>
                Clear
              </button>
            </div>
          </div>

          {this.state.data.map((job) => {
            return (
              <General>
                <div className="jobs_item" key={job.id}>
                  <div className="jobs_column jobs_column--left">
                    <img
                      src={job.logo}
                      alt={job.company}
                      className="jobs_img"
                    />
                    <div className="jobs_info">
                      <span className="jobs_company">{job.company}</span>
                      <span className="jobs_title">{job.position}</span>

                      <ul className="jobs_details">
                        <li className="jobs_details-item">{job.postedAt}</li>
                        <li className="jobs_details-item">{job.contract}</li>
                        <li className="jobs_details-item">{job.location}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="jobs_column jobs_column--right">
                    <Tags NameClass="tag" id="role" value={job.role} onClick={this.buscarBtn}>{job.role}</Tags>
                    <Tags NameClass="tag" id="level" value={job.level} onClick={this.buscarBtn}>{job.level}</Tags>
                    <Tags NameClass="tag" id="language" value={job.languages} onClick={this.buscarBtn}>{job.languages}</Tags>
                    <Tags NameClass="tag" id="tools" value={job.tools} onClick={this.buscarBtn}>{job.tools}</Tags>
                  </div>
                </div>
              </General>    
            );
          })}
        </div>
      </div>
    );
  }
}
