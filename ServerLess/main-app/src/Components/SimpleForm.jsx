import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
import Review from "./Review";

class SimpleForm extends Component {
  constructor(props) {
    super(props);

    this.triggerNext = this.triggerNext.bind(this);
  }

  triggerNext() {
    this.setState({ trigger: true }, () => {
      this.props.triggerNextStep();
    });
  }

  render() {
    return (
      <div>
        <ChatBot
          steps={[
            {
              id: "1",
              message: "Hello...My name is Jarvis .May I know your name?",
              trigger: "name",
            },
            {
              id: "name",
              user: true,
              trigger: "3",
              validator: (value) => {
                if (
                  /^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(value)
                ) {
                  return true;
                } else {
                  return "Please enter a valid name";
                }
              },
            },
            {
              id: "3",
              message: "Hi {previousValue}! Please select from below options?",
              trigger: "options",
            },
            {
              id: "options",
              options: [
                { value: "buy policy", label: "Buy Policy", trigger: "5" },
                {
                  value: "renew policy",
                  label: "Renew policy",
                  trigger: "5",
                },
              ],
            },
            {
              id: "5",
              message: "please select the product?",
              trigger: "product",
            },
            {
              id: "product",
              options: [
                { value: "carInsurance", label: "Car Insurance", trigger: "7" },
                {
                  value: "travelInsurance",
                  label: "Travel Insurance",
                  trigger: "14",
                },
                {
                  value: "healthInsurance",
                  label: "Health Insurance",
                  trigger: "10",
                },
                {
                  value: "homeInsurance",
                  label: "Home Insurance",
                  trigger: "18",
                },
              ],
            },

            {
              id: "7",
              message: "Enter your car no..Ex-MH 01 DL 1234",
              trigger: "carNo",
            },
            {
              id: "carNo",
              user: true,
              trigger: "9",
              validator: (value) => {
                if (!value) {
                  return "please fill the car no";
                } else if (
                  /^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$/.test(
                    value
                  ) !== true
                ) {
                  return "please enter valid car no";
                }

                return true;
              },
            },
            {
              id: "9",
              message: "please select the car brand?",
              trigger: "carBrand",
            },
            {
              id: "carBrand",
              options: [
                { value: "hyundai", label: "Hyundai", trigger: "20" },
                { value: "maruti", label: "Maruti", trigger: "20" },
                { value: "honda", label: "Honda", trigger: "20" },
                { value: "ford", label: "Ford", trigger: "20" },
                { value: "toyata", label: "Toyata", trigger: "20" },
                { value: "tata", label: "Tata", trigger: "20" },
              ],
            },
            {
              id: "10",
              message: "please select your gender",
              trigger: "gender",
            },
            {
              id: "gender",
              options: [
                { value: "M", label: "Male", trigger: "11" },
                { value: "F", label: "Female", trigger: "11" },
              ],
            },

            {
              id: "11",
              message: "Enter your age",
              trigger: "age",
            },
            {
              id: "age",
              user: true,
              trigger: "12",
              validator: (value) => {
                if (isNaN(value)) {
                  return "age must be a number";
                } else if (value < 1) {
                  return "age must be atleast 1";
                } else if (value > 120) {
                  return `${value}? Come on!`;
                }

                return true;
              },
            },
            {
              id: "12",
              message: "Enter your city",
              trigger: "city",
            },
            {
              id: "city",
              user: true,
              trigger: "13",
              validator: (value) => {
                if (!value) {
                  return "please enter the city";
                } else if (
                  /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/.test(value) !== true
                ) {
                  return "please enter valid city";
                }

                return true;
              },
            },
            {
              id: "13",
              message: "do you take any daily medication?",
              trigger: "daily-meds",
            },
            {
              id: "daily-meds",
              options: [
                { value: "yes", label: "Yes", trigger: "20" },
                { value: "no", label: "No", trigger: "20" },
              ],
            },
            {
              id: "14",
              message: "Enter city you are travelling from?",
              trigger: "from",
            },
            {
              id: "from",
              user: true,
              trigger: "15",
              validator: (value) => {
                if (!value) {
                  return "please enter the city";
                } else if (
                  /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/.test(value) !== true
                ) {
                  return "please enter valid city";
                }

                return true;
              },
            },
            {
              id: "15",
              message: "Enter city you are travelling to?",
              trigger: "to",
            },
            {
              id: "to",
              user: true,
              trigger: "16",
              validator: (value) => {
                if (!value) {
                  return "please enter the city";
                } else if (
                  /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/.test(value) !== true
                ) {
                  return "please enter valid city";
                }

                return true;
              },
            },
            {
              id: "16",
              message: "startDate",
              trigger: "startDate",
            },
            {
              id: "startDate",
              user: true,
              trigger: "17",
              validator: (value) => {
                if (!value) {
                  return "please fill the start Date Ex-dd/mm/yyyy";
                } else if (
                  /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test(
                    value
                  ) !== true
                ) {
                  return "invalid";
                }

                return true;
              },
            },
            {
              id: "17",
              message: "endDate?",
              trigger: "endDate",
            },
            {
              id: "endDate",
              user: true,
              trigger: "20",
              validator: (value) => {
                if (!value) {
                  return "please fill the end Date Ex-dd/mm/yyyy";
                } else if (
                  /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test(
                    value
                  ) !== true
                ) {
                  return "invalid";
                }

                return true;
              },
            },
            {
              id: "18",
              message: "Enter your city",
              trigger: "home",
            },
            {
              id: "home",
              user: true,
              trigger: "19",
              validator: (value) => {
                if (!value) {
                  return "please enter the city";
                } else if (
                  /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/.test(value) !== true
                ) {
                  return "please enter valid city";
                }

                return true;
              },
            },
            {
              id: "19",
              message: "Owner or tenant?",
              trigger: "o-t",
            },
            {
              id: "o-t",
              options: [
                { value: "yes", label: "Owner", trigger: "25" },
                { value: "no", label: "Tenant", trigger: "25" },
              ],
            },
            {
              id: "25",
              message: "Independent or Flat",
              trigger: "I-F",
            },
            {
              id: "I-F",
              options: [
                { value: "yes", label: "Independent", trigger: "20" },
                { value: "no", label: "Flat", trigger: "20" },
              ],
            },
            {
              id: "20",
              message: "Enter your contact no?",
              trigger: "contactNo",
            },
            {
              id: "contactNo",
              user: true,
              trigger: "21",
              validator: (value) => {
                if (
                  /^(\+\d{1,3}[- ]?)?\d{10}$/.test(value) &&
                  !/0{5,}/.test(value)
                ) {
                  return true;
                } else {
                  return "Please enter a valid phone number.";
                }
              },
            },
            {
              id: "21",
              message: "Enter your email address?",
              trigger: "email",
            },
            {
              id: "email",
              user: true,
              trigger: "22",
              validator: (value) => {
                if (
                  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
                ) {
                  return true;
                } else {
                  return "Please enter a valid email.";
                }
              },
            },
            {
              id: "22",
              message: "Great! Check out your summary",
              trigger: "review",
            },
            {
              id: "review",
              component: <Review />,
              asMessage: true,
              trigger: "end-message",
            },
            {
              id: "end-message",
              message:
                "Thanks! Your data was submitted successfully! Our contact support will get in touch with you soon",
              end: true,
            },
          ]}
        />
      </div>
    );
  }
}

export default SimpleForm;
