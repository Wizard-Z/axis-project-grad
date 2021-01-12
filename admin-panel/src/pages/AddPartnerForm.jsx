import React, { Component } from "react";
import axios from "axios";

class AddPartnerForm extends Component {
  constructor(props) {
    super(props);
    if (Object.keys(this.props).length > 0) {
      this.state = this.props.partner;
    } else {
      this.state = {
        id: "",
        logo: "",
        name: "",
        description: "",
        insuranceType: "",
        endPoints: "",
        available: true,
        feilds: "",
        requestBody: "",
      };
    }
    console.log("in constructor:", Object.keys(this.props).length);
  }
  onChangeHandle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(`${e.target.name}:${e.target.value}`);
  };
  prettyPrint() {
    var ugly = document.getElementById("myTextArea").value;
    var obj;
    try {
      obj = JSON.parse(ugly);
    } catch (e) {
      alert("Check your JSON at:" + e); // error in the above string (in this case, yes)!
    }
    var pretty = JSON.stringify(obj, undefined, 4);
    document.getElementById("myPrettyArea").value = pretty;
  }
  onSubmitForm = (e) => {
    e.preventDefault();
    var obj;

    try {
      obj = JSON.parse(this.state.feilds);
      console.log(`requestBODY from form:: ${this.state.requestBody}`);
      let parseRequestBody = JSON.parse(this.state.requestBody);
      // console.log("obj:", obj);
      console.log("This is request body", this.state.requestBody);

      //console.log("this is type of ", typeof this.state.requestBody);
      //  console.log("This is parsed request body" + parseRequestBody["key"]);
      console.log("this is type of ", typeof this.state.requestBody);

      console.log("state:", this.state);
      axios
        .post("http://localhost:9096/test/add-partner", this.state)
        .then((response) => {
          console.log("Response:", response);
        })
        .catch((error) => {
          console.log(error);
        });
      alert("Partner Added! " + this.state.name);
      console.log(this.state);
      this.state = {
        id: "",
        logo: "",
        name: "",
        description: "",
        insuranceType: "",
        endPoints: "",
        available: true,
        feilds: "",
        requestBody: new Map(),
      };
    } catch (e) {
      alert("Check your JSON at: " + e); // error in the above string (in this case, yes)!
    }
  };

  render() {
    const {
      id,
      logo,
      name,
      description,
      insuranceType,
      endPoints,
      available,
      feilds,
      requestBody,
    } = this.state;
    // this.setState({id:this.props.id})
    console.log("in render:", Object.keys(this.props).length);
    return (
      <div
        className="container  align-items-center justify-content-center"
        style={{ marginTop: "1em" }}
      >
        <form onSubmit={this.onSubmitForm}>
          <div className="form-group">
            <label htmlFor="id">Enter Partner Id</label>
            <input
              type="number"
              name="id"
              value={id}
              onChange={this.onChangeHandle}
              className="form-control"
              placeholder="Enter Id"
            ></input>
            <label htmlFor="name">Partner-name? </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.onChangeHandle}
              className="form-control"
              placeholder="Provide Partner-name"
              required
            ></input>
            <label htmlFor="logo">Logo Url </label>
            <input
              type="text"
              name="logo"
              value={logo}
              onChange={this.onChangeHandle}
              className="form-control"
              placeholder="Your Logo Here"
              required
            ></input>
            <label htmlFor="description">Enter Description</label>
            <input
              type="text"
              name="description"
              value={description}
              onChange={this.onChangeHandle}
              className="form-control"
              placeholder="Your description.."
              required
            ></input>
            <label htmlFor="insuranceType">Enter Insurance Type</label>
            <input
              type="text"
              name="insuranceType"
              value={insuranceType}
              onChange={this.onChangeHandle}
              className="form-control"
              placeholder="Insurance Type .. car, home etc.."
              required
            ></input>
            <label htmlfor="endPoints">End-Points</label>
            <input
              type="text"
              name="endPoints"
              value={endPoints}
              onChange={this.onChangeHandle}
              placeholder="like.. http://your-domain.com/resource"
              className="form-control"
              required
            ></input>
            <br />
            <label htmlfor="available">Is Available?</label>
            <select
              className="custom-select"
              name="available"
              value={available}
              onChange={this.onChangeHandle}
              required
            >
              <option value={true}>True</option>
              <option value={false}>False</option>
            </select>
            <label htmlFor="feilds">Input form field details</label>
            <textarea
              id="myTextArea"
              rows="5"
              type="text"
              name="feilds"
              value={feilds}
              onChange={this.onChangeHandle}
              placeholder="Input form details in JSON-Stringified form!"
              className="form-control"
              required
            ></textarea>
            <br />
            <input
              type="button"
              className="btn btn-primary"
              value="Pretty"
              onClick={this.prettyPrint.bind(this)}
            ></input>
            <br />
            <br />
            <textarea
              id="myPrettyArea"
              rows="5"
              type="text"
              placeholder="Pretty JSON!"
              className="form-control"
            ></textarea>
            <p>Re-edit the fields input!</p>
            <br />
            <br />
            <br />
            <textarea
              id="myRequestBody"
              rows="5"
              type="text"
              name="requestBody"
              value={requestBody}
              onChange={this.onChangeHandle}
              placeholder="Map the request body with the API signature"
              className="form-control"
              required
            ></textarea>
            <button type="submit" className="btn btn-success">
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddPartnerForm;
