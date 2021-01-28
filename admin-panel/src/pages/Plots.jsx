import React, { useState, useEffect } from "react";
import BarChart from "../components/BarChart";
import DoughnutChart from "../components/DoughnutChart";
import EndPointsService from "../components/EndPointsService";
import LineChart from "../components/LineChart";
function Plots() {
  const [doughnutData, setDoughnutData] = useState();
  const [barData, setBarData] = useState();
  const [maxEarn, setMaxEarn] = useState();
  const [lineData, setLineData] = useState();

  useEffect(() => {
    EndPointsService.getCategoryWiseEarning()
      .then((response) => {
        let res = response.data;
        console.log("IN PLOTS:", Object.keys(res.results));

        let uniqueTypes = getUnique(res.results, "_id");
        let earnTypes = res.results.map((r) => r.sum);
        let backgroundColor = uniqueTypes.map((l) => getDynamicColor(1));
        setDoughnutData({
          labels: uniqueTypes,
          datasets: [
            {
              label: "Sales",
              data: earnTypes,
              backgroundColor,
            },
          ],
        });
      })
      .catch((error) => {
        console.log(error);
      });

    EndPointsService.getPartnerWiseEarning()
      .then((response) => {
        let res = response.data;

        let labels = res.results.map((r) => r._id);
        let borderColor = labels.map((l) => getDynamicColor(1));
        let backgroundColor = labels.map((l) => getDynamicColor(0.7));
        let earnTypes = res.results.map((r) => r.sum);
        setMaxEarn(1000000);

        setBarData({
          labels: labels,
          datasets: [
            {
              label: "Companies",
              data: earnTypes,
              borderColor,
              backgroundColor,
            },
          ],
        });
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("BarData::", barData);

    EndPointsService.getDateWiseEarning()
      .then((res) => {
        console.log("Line-response:", res.data);
        let resLine = res.data;
        let uniqueTypes2 = getUnique2(resLine.results, "type");
        let carray = getss(resLine, uniqueTypes2).xtype;
        let liness = getLines(carray, uniqueTypes2);
        setLineData(liness);
        console.log(
          "\nIn LINECHART-LOG",
          "RESPONSE: ",
          resLine,
          "---",
          "TYPES: ",
          uniqueTypes2,
          "CARRAY: ",
          carray,
          ":::",
          "LINES: ",
          liness
        );
        console.log("LineData:(plots)", lineData);
      })
      .catch((error) => {
        console.log(error);
      });

    //setLineData(res.data)
  }, []);

  console.log("I am plots -->", doughnutData);
  /** CHARTJS NEEDS COLORS TO BE DEFINED ... this will help */
  const getDynamicColor = (alpha) => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgba(${r},${g},${b},${alpha})`;
  };
  const getUnique = (items, value) => {
    return [...new Set(items.map((item) => item[value]))];
  };

  /**UTILITY FUNCTONS FOR LINE CHART  */

  /**GET DIFFERENT ROOM CATEGORIES */
  const getUnique2 = (items, value) => {
    //return [...new Set(items.map((item) => item[value]))];
    return [...new Set(items.map((item) => item._id[value]))];
  };
  /** Sort the data in particular sequence.. here month wise.*/
  function getss(items, rtype) {
    console.log("\n\nIN GETSItems:: ", items, "types:  ", rtype);
    return {
      xtype: rtype.map((t) =>
        items.results
          .filter((item) => item._id.type === t)
          .map((item) => [
            item.count,
            item._id.year,
            item._id.month,
            item._id.type,
          ])
          .sort(compareSecondColumn)
      ),
    };
  }
  const resize_array_left = (array, length, fill_with) =>
    new Array(length).fill(fill_with).concat(array).slice(-length);
  /**FINAL DATA FOR THE LINE PLOT */
  function getLines(arr, types) {
    let datasets = [];
    let datas = arr.map((ar) => ar.map((a) => a[0]));
    let i;

    let paddedData;
    let ldata;
    for (i = 0; i < types.length; i++) {
      ldata = datas[i];
      if (ldata.length < 3) {
        paddedData = resize_array_left(ldata, 3, 0);
      } else {
        paddedData = ldata;
      }
      console.log(types[i] + "----" + datas[i] + "----" + paddedData);
      datasets.push({
        label: types[i],
        data: paddedData,
        borderColor: [getDynamicColor(0.7)],
        backgroundColor: [getDynamicColor(0.1)],
        pointBorderColor: getDynamicColor(1),
        pointBackgroundColor: getDynamicColor(1),
      });
    }
    return datasets;
  }

  /**Helper function for above function */
  function compareSecondColumn(a, b) {
    //same year
    if (a[1] === b[1]) {
      //same month
      if (a[2] === b[2]) {
        return 0;
      }
      // different month
      else {
        return a[2] < b[2] ? -1 : 1;
      }
    }
    //different year
    else {
      return a[1] < b[1] ? -1 : 1;
    }
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="card m-1">
              <LineChart props={lineData} />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <div className="card m-1">
              <BarChart props={barData} maxEarn={maxEarn} />
            </div>
          </div>

          <div className="col-sm-6">
            <div className="card m-1">
              <DoughnutChart doughnutData={doughnutData} />
            </div>
          </div>
          <div className="col-0"></div>
        </div>
      </div>
    </>
  );
}

export default Plots;
