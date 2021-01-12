import React, { Component } from "react";
import axios from "axios";
import PartnerList from "../pages/PartnerList";

export class Partners extends Component {
  state = {
    partners: [],
    sortedPartners: [],
    featuredPartners: [],
    loading: true,
    type: "all",
    baseUrl: "http://localhost:9096",
  };

  componentDidMount() {
    axios
      .get(`${this.state.baseUrl}/test/get-partners/all`)
      .then((response) => {
        let res = response.data;

        this.setState({
          partners: res,
          sortedPartners: res,
          loading: false,
        });
        console.log(this.state);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <PartnerList partners={this.state.partners} />
      </div>
    );
  }
}

export default Partners;
