import React, { Component } from "react";
import rd3 from "react-d3";

const { PieChart } = rd3;
var pieData = [
  { label: "Margarita", value: 20.0 },
  { label: "John", value: 55.0 },
  { label: "Tim", value: 25.0 }
];

const sort = null;

class StatChart extends Component {
  render() {
    // console.log(data);
    return (
      <PieChart
        data={pieData}
        width={400}
        height={400}
        radius={100}
        innerRadius={20}
        sectorBorderColor="white"
        title="Pie Chart"
      />
    );
  }
}

export default StatChart;
