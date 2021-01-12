import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./selectcity.css";

import {
  Card,
  Row,
  Navbar,
  Nav,
  Container,
  Button,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";

// Reusable Form Component
function Form({ template }) {
  let { title, fields, cities } = template;
  let number = 0;
  useEffect(() => {
    var table = document.getElementById("tab");
    var row = "";
    var cell1 = "";
    var cell2 = "";
    var rows = document.getElementsByTagName("tr");
    var k = 1;
    cities.map((city) => {
      if (number % 2 === 0) {
        row = table.insertRow(k++);
        cell1 = row.insertCell(0);
        cell1.innerHTML = `<div class="dropdown">
        <button class="btn btn-primary dropbtn">${city.title}</button>
        <div class="dropdown-content">
        ${city.rto.map((rt) => `<button id="but">${rt}</button>`)}
        </div>
      </div>`;
      } else {
        cell2 = row.insertCell(1);
        cell2.innerHTML = `<div class="dropdown">
           <button class="btn btn-primary dropbtn">${city.title}</button>
           <div class="dropdown-content">
           ${city.rto.map((rt) => `<button id="but">${rt}</button>`)}
           </div>
         </div>`;
      }

      number++;
    });
    var i;
    for (i = 1; i < rows.length; i++) {
      var space = document.createElement("BR");
      table.insertBefore(space, rows[i]);
    }
  }, [cities]);

  return (
    <div>
      <Card id="content">
        <Card.Body>
          <Card id="cont">
            <h5 style={{ marginTop: "5px" }}>{title}</h5>
          </Card>
          <br></br>
          <table id="tab">
            {fields.map((field) => (
              <tr>
                <td colSpan="2">
                  <input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                  ></input>
                </td>
              </tr>
            ))}
          </table>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Form;
