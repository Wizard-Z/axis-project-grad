import { FaWarehouse } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { FaShoppingCart, FaCartPlus } from "react-icons/fa";
import { MdPersonAdd } from "react-icons/md";
import { MdPeople, MdInsertChart } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import {
  FcComboChart,
  FcHighPriority,
  FcAdvertising,
  FcShipped,
  FcShop,
  FcBusinessman,
  FcDebt,
} from "react-icons/fc";

import React, { useState, useEffect } from "react";
import Partners from "../components/Partners";
import Plots from "./Plots";
import AddPartnerForm from "./AddPartnerForm";
import AddProductForm from "./AddProductForm";
import { Link } from "react-router-dom";
import { Products } from "../components/Products";
import Requests from "./Requests";
import EndPointsStatus from "./EndPointsStatus";

export default function Dashboard_copy() {
  const [category, setCategory] = useState("plots");
  const [items, setItems] = useState({ content: "", title: "" });

  useEffect(() => {
    console.log("c:", category);
    if (category === "partners") {
      setItems({
        content: <Partners />,
        title: "List of All partners!",
      });
    }
    if (category === "products") {
      setItems({
        content: <Products />,
        title: "List of All Products!",
      });
    }
    if (category === "plots") {
      setItems({ content: <Plots />, title: "Sales trends" });
    }
    if (category === "addPartner") {
      setItems({ content: <AddPartnerForm />, title: "Add partner!" });
    }
    if (category === "addProduct") {
      setItems({ content: <AddProductForm />, title: "Add product!" });
    }
    if (category === "requests") {
      setItems({ content: <Requests />, title: "Requests!" });
    }
    if (category === "status") {
      setItems({ content: <EndPointsStatus />, title: "End-points Health" });
    }

    return () => {};
  }, [category]);

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <button className="btn btn-dark" onClick={() => setCategory("plots")}>
          <FaWarehouse />
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <button
                className="btn btn-dark"
                onClick={() => setCategory("plots")}
              >
                Dashboard
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-dark"
                onClick={() => setCategory("products")}
              >
                <FaShoppingCart /> Products
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-dark"
                onClick={() => setCategory("addPartner")}
              >
                <MdPersonAdd /> +Partner
              </button>
            </li>

            <li>
              <Link to="/">
                <button className="btn btn-dark">
                  <FiLogOut />
                  Profile
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="sbar">
        {" "}
        <div className="container-fluid">
          <div className="row">
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
              <div className="sidebar-sticky">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <div className="nav-link">
                      <button
                        className="btn btn-Link"
                        onClick={() => setCategory("plots")}
                      >
                        <FcComboChart /> Dashboard
                      </button>
                    </div>
                  </li>

                  <li className="nav-item">
                    <div className="nav-link">
                      <button
                        className="btn btn-Link"
                        onClick={() => setCategory("requests")}
                      >
                        <FcAdvertising /> Requests
                      </button>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link">
                      <button
                        className="btn btn-Link"
                        onClick={() => setCategory("products")}
                      >
                        <FcShop /> Products
                      </button>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link">
                      <button
                        className="btn btn-Link"
                        onClick={() => setCategory("addProduct")}
                      >
                        <FcShipped /> +Product
                      </button>
                    </div>
                  </li>

                  <li className="nav-item">
                    <div className="nav-link">
                      <button
                        className="btn btn-Link"
                        onClick={() => setCategory("partners")}
                      >
                        <FcDebt /> Partners
                      </button>
                    </div>
                  </li>

                  <li className="nav-item">
                    <div className="nav-link">
                      <button
                        className="btn btn-Link"
                        onClick={() => setCategory("addPartner")}
                      >
                        <FcBusinessman /> +Partner
                      </button>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link">
                      <button
                        className="btn btn-Link"
                        onClick={() => setCategory("status")}
                      >
                        <FcHighPriority /> Status
                      </button>
                    </div>
                  </li>
                </ul>

                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                  <span>Saved reports</span>
                  <a className="d-flex align-items-center text-muted">
                    <span data-feather="plus-circle"></span>
                  </a>
                </h6>
                <ul className="nav flex-column mb-2">
                  <li className="nav-item">
                    <a className="nav-link">
                      <span data-feather="file-text"></span>
                      Year-end sale
                    </a>
                  </li>
                </ul>
              </div>
            </nav>

            <main
              role="main"
              className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4"
            >
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                <h2 className="h2">{items.title}</h2>
                <div className="btn-toolbar mb-2 mb-md-0">
                  <div className="btn-group mr-2">
                    <button className="btn btn-sm btn-outline-secondary">
                      Share
                    </button>
                    <button className="btn btn-sm btn-outline-secondary">
                      Export
                    </button>
                  </div>
                </div>
              </div>
              <>{items.content}</>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
