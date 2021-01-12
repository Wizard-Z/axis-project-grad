import { useState } from "react";
import { useForm } from "react-hook-form";
function NewForms() {
  const { register, handleSubmit, errors } = useForm();
  let formdata = [];
  const [arr, setArr] = useState({ field: [] });
  const [details, setDetails] = useState({ key: "" });
  // let csvToJson = require("convert-csv-to-json");

  // let json = csvToJson.getJsonFromCsv("myInputFile.csv");
  // // console.log("frm file", JSON.stringify(json));

  const onSubmit = (data) => {
    // setArr("," + arr.concat(JSON.stringify(data)));
    // setArr(arr.push(JSON.stringify(data)));

    setArr((prevState) => {
      return {
        ...prevState,
        field: [...prevState.field, JSON.stringify(data)],
      };
    });

    console.log(arr);
  };

  function generateMe() {
    console.log("clicked:", arr);
    console.log(arr.field.join());
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="id" placeholder="enter ID" />
        <input type="text" name="description" placeholder="Enter description" />
        <input type="text" name="logo" placeholder="enter logo" />
        <input type="text" name="lable" placeholder="enter titile of field" />

        <select name="type" ref={register}>
          <option value="text">text</option>
          <option value="number">number</option>
          <option value="email">email</option>
          <option value="date">date</option>
        </select>

        <input name="name" ref={register} placeholder="Enter name of field" />
        <input
          name="placeholder"
          ref={register}
          placeholder="Enter placeholder for field"
        />
        <input
          name="validation.required"
          ref={register}
          placeholder="Enter message"
        />

        <input type="submit" />
      </form>
      <button className="btn btn-primary" onClick={generateMe}>
        Generate
      </button>
    </div>
  );
}
export default NewForms;
