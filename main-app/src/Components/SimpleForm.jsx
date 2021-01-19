import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
import Review from "./Review";

class SimpleForm extends Component {
  constructor(props) {
    super(props);

    this.triggetNext = this.triggetNext.bind(this);
  }

  triggetNext() {
    this.setState({ trigger: true }, () => {
      this.props.triggerNextStep();
    });
  }

  render() {
    return (
      <div>
        {this.props.prods.length && (
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
              },
              {
                id: "3",
                message:
                  "Hi {previousValue}! Please select from below options?",
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
                options: this.props.prods,
              },

              {
                id: "7",
                message: "Enter your car no..Ex-MH01DL1234",
                trigger: "carNo",
              },
              {
                id: "carNo",
                user: true,
                trigger: "9",
                validator: (value) => {
                  if (!value) {
                    return "please fill the car no";
                  } else if (value.length < 9) {
                    return "please fill the valid car no";
                  } else if (
                    /^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$/.test(
                      value
                    )
                  ) {
                    return `please fill the valid car no`;
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
                  { value: "hyundai", label: "Hyundai", trigger: "11" },
                  { value: "maruti", label: "Maruti", trigger: "11" },
                  { value: "honda", label: "Honda", trigger: "11" },
                  { value: "ford", label: "Ford", trigger: "11" },
                  { value: "toyata", label: "Toyata", trigger: "11" },
                  { value: "tata", label: "Tata", trigger: "11" },
                ],
              },
              {
                id: "11",
                message: "Enter your contact no?",
                trigger: "contactNo",
              },
              {
                id: "contactNo",
                user: true,
                trigger: "12",
                validator: (value) => {
                  if (!value) {
                    return "please fill the contact no";
                  } else if (value.length < 10) {
                    return "please fill the valid contact no";
                  } else if (value.length > 10) {
                    return `please fill the valid contact no`;
                  }

                  return true;
                },
              },
              {
                id: "12",
                message: "Enter your email address?",
                trigger: "email",
              },
              {
                id: "email",
                user: true,
                trigger: "13",
                validator: (value) => {
                  if (!value) {
                    return "please fill the email";
                  } else if (
                    /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}$/.test(value)
                  ) {
                    return "please fill the valid email";
                  }

                  return true;
                },
              },
              {
                id: "13",
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
        )}
      </div>
    );
  }
}

export default SimpleForm;
