import React, { Component } from "react";
import Chart from "react-apexcharts";

class StackedBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          background: "#f4f4f4",
          foreColor: "#333",
          stacked: true
        },
        plotOptions: {
          bar: {
            horizontal: false
          }
        },
        dataLabels: {
          enabled: false,
          offsetX: -6,
          style: {
            fontSize: "12px",
            colors: ["#fff"]
          }
        },
        stroke: {
          show: true,
          width: 1,
          colors: ["#fff"]
        },
        xaxis: {
          categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014]
          // labels: {
          //   formatter: val => {
          //     return val + "k";
          //   }
          // }
        },
        yaxis: {
          title: {
            text: "Y Label",
            offsetX: 0,
            offsetY: 0
          }
          // labels: {
          //   formatter: val => {
          //     return val + "k";
          //   }
          // }
        },
        tooltip: {
          y: {
            formatter: val => {
              return val + "k";
            }
          }
        },
        title: {
          text: "React Stacked Chart Example",
          align: "center",
          margin: 20,
          offsetY: 20,
          style: {
            fontSize: "25px"
          }
        },
        fill: {
          opacity: 1
        }
      },
      series: [
        {
          name: "Marine Sprite",
          data: [44, 55, 41, 37, 22, 43, 21]
        },
        {
          name: "Striking Calf",
          data: [53, 32, 33, 52, 13, 43, 32]
        },
        {
          name: "Tank Picture",
          data: [12, 17, 11, 9, 15, 11, 20]
        },
        {
          name: "Bucket Slope",
          data: [9, 7, 5, 8, 6, 9, 4]
        },
        {
          name: "Reborn Kid",
          data: [25, 12, 19, 32, 25, 24, 10]
        }
      ]
    };
  }
  handleChange = () => {
    this.setState({
      options: {
        ...this.state.options,
        plotOptions: {
          ...this.state.options.plotOptions,
          bar: {
            ...this.state.options.plotOptions.bar,
            horizontal: !this.state.options.plotOptions.bar.horizontal
          }
        }
      }
    });
  };
  handleGroupedStacked = () => {
    this.setState({
      options: {
        ...this.state.options,
        chart: {
          ...this.state.options.chart,
          stacked: !this.state.options.chart.stacked
        }
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          heigh="450"
          width="100%"
        />
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={this.handleChange}
        >
          Change
        </button>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={this.handleGroupedStacked}
        >
          Grouped
        </button>
      </React.Fragment>
    );
  }
}

export default StackedBar;
