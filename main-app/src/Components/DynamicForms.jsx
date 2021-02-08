import { Card, Modal } from "react-bootstrap";
import "./dynamicForms.css";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import PartnerService from "../Service/PartnerService";
import { useState, useEffect } from "react";

function DynamicForms(props) {
  let fields = JSON.parse(props.location.state.fields);
  let id = props.location.state.id;
  const [additionalFields, setAdditionalFields] = useState([]);
  const [show, setShow] = useState(false);
  const [data, setData] = useState();

  const history = useHistory();
  console.log("formId is", id);

  let newFields = fields[Object.keys(fields)];

  let productName = props.match.params.product;

  let { register, handleSubmit, errors } = useForm();

  const formGeneration = () => {
    return newFields.map((field) => (
      <tr>
        <td>
          <label>{field.label}</label>
          <input
            id="tex"
            type={field.type}
            name={field.name}
            ref={register(field.validation)}
            placeholder={field.placeholder}
          />
          {errors[field.name] && (
            <span style={{ color: "red" }} className="red-text">
              {errors[field.name]["message"]}
            </span>
          )}
        </td>
      </tr>
    ));
  };

  const additionalFormGeneration = () => {
    return additionalFields.map((field) => (
      <tr>
        <td>
          <label>{JSON.parse(field).label}</label>
          <input
            id="tex"
            type={JSON.parse(field).type}
            name={JSON.parse(field).name}
            ref={register(JSON.parse(field).validation)}
            placeholder={JSON.parse(field).placeholder}
          />
          {errors[JSON.parse(field).name] && (
            <span style={{ color: "red" }} className="red-text">
              {errors[JSON.parse(field).name]["message"]}
            </span>
          )}
        </td>
      </tr>
    ));
  };
  const handleClose = (e) => {
    setShow(false);
    console.log("Modale ", id, data);
  };
  const additionalData = (additionalData, e) => {
    setShow(false);

    console.log(
      "Additional Data Fields",
      typeof JSON.stringify(additionalData)
    );
    PartnerService.getQuotes(id, additionalData).then((response) => {
      console.log("inDynamicForm" + response.data);
      history.push({
        pathname: "/insurance/get/Quotes",
        state: {
          quotes: response.data,
          productName: productName,
          id: id,
          data: additionalData,
        },
      });
    });
  };

  const onSubmit = (data, e) => {
    console.log(JSON.stringify(data));
    setData(data);

    if (additionalFields.length === 0) {
      PartnerService.getQuotes(id, data).then((response) => {
        e.target.reset();
        console.log("inDynamicForm" + response.data);
        history.push({
          pathname: "/insurance/get/Quotes",
          state: {
            quotes: response.data,
            productName: productName,
            id: id,
            data: data,
          },
        });
      });
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    PartnerService.getAdditionalFields(id).then((res) => {
      setAdditionalFields(res.data);
    });
  }, []);
  console.log(
    `Additional Fields required for this form is:::${additionalFields.map(
      (f) => JSON.parse(f)["name"]
    )}`
  );

  return (
    <div>
      <Card id="content">
        <Card.Body>
          <Card id="cont">
            <h5 >{productName}</h5>
          </Card>
          <br></br>
          <form onSubmit={handleSubmit(onSubmit)}>
            <table id="tab">{formGeneration()}</table>
            {additionalFields.length ? (
              <>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Card id="content">
                      <Card.Body>
                        <Card id="cont">
                          <h5 >
                            Just few more Things..!!!
                          </h5>
                        </Card>
                        <form onSubmit={handleSubmit(additionalData)}>
                          <table id="tab">{additionalFormGeneration()}</table>
                          <button type="submit" classname="btn btn-primary">
                            Get Quotes
                          </button>
                        </form>
                      </Card.Body>
                    </Card>
                  </Modal.Header>
                </Modal>
              </>
            ) : (
              <p></p>
            )}
            <button type="submit" classname="btn btn-primary">
              Get Quotes
            </button>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
}
export default DynamicForms;
