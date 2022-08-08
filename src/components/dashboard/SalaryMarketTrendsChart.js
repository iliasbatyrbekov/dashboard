// lint ingnore "no-unused-vars"

import React, { 
  // PureComponent, 
  useMemo } from "react";
 // for formatting date
import moment from "moment";

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-chartjs-2 components
// import { Bar } from "react-chartjs-2";

// recharts

import {
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from 'recharts';




// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// RecHunter components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// ReportsBarChart configurations
// import configs from "examples/Charts/BarCharts/ReportsBarChart/configs";

function SalaryMarketTrendsChart({ color, title, description, date }) {
  // const { data, options } = configs(chart.labels || [], chart.datasets || {});

  let dataTemp = [
    { name: '2020-03-01', uv: 300, pv: 456 },
    { name: '2020-04-01', uv: -145, pv: 230 },
    { name: '2020-05-01', uv: -100, pv: 345 },
    { name: '2020-06-01', uv: -8, pv: 450 },
    { name: '2020-07-01', uv: 100, pv: 321 },
    { name: '2020-08-01', uv: 9, pv: 235 },
    { name: '2020-09-01', uv: 53, pv: 267 },
    { name: '2020-10-01', uv: 252, pv: -378 },
    { name: '2020-11-01', uv: 79, pv: -210 },
    { name: '2020-12-01', uv: 294, pv: -23 },
    { name: '2021-01-01', uv: 43, pv: 45 },
    { name: '2021-02-01', uv: -74, pv: 90 },
    { name: '2021-03-01', uv: -71, pv: 130 },
    { name: '2021-04-01', uv: -117, pv: 11 },
    { name: '2021-05-01', uv: -186, pv: 107 },
    { name: '2021-06-01', uv: -16, pv: 926 },
    { name: '2021-07-01', uv: -125, pv: 653 },
    { name: '2021-08-01', uv: 222, pv: 366 },
    { name: '2021-09-01', uv: 372, pv: 486 },
    { name: '2021-10-01', uv: 182, pv: 512 },
    { name: '2021-11-01', uv: 164, pv: 302 },
    { name: '2021-12-01', uv: 316, pv: 425 },
    { name: '2022-01-01', uv: 131, pv: 467 },
    { name: '2022-02-01', uv: 291, pv: -190 },
    { name: '2022-03-01', uv: -47, pv: 194 },
    { name: '2022-04-01', uv: -415, pv: 371 },
    { name: '2022-05-01', uv: -182, pv: 376 },
    { name: '2022-06-01', uv: -93, pv: 295 },
    { name: '2022-07-01', uv: -99, pv: 322 },
  ];
  
  const dateFormatter = (item) => moment(item).format("MMM YY");

  dataTemp.forEach((element, index) => {
    let temp_date = new Date(element.name);
    dataTemp[index].name = dateFormatter(temp_date)
  });

  console.log(dataTemp)
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox padding="1rem">
        {useMemo(
          () => (
            <MDBox
              variant="gradient"
              bgColor={color}
              borderRadius="lg"
              coloredShadow={color}
              py={2}
              pr={0.5}
              mt={-5}
              height="25rem"
            >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={dataTemp}
                barCategoryGap="15%"
                barGap="4%"
                margin={{
                  top: 5,
                  right: 50,
                  left: 10,
                  bottom: 5,
                }}
              >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{fontSize: 15}} />
              <YAxis tickCount={10} />
                {/* <Label value="Y/y % change" angle={-90} position="insideLeft" />
                </YAxis> */}
              <Tooltip />
              <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
              <ReferenceLine y={0} stroke="#000" />
              <Brush dataKey="name" height={30} stroke="#8884d8" />
              <Bar dataKey="uv" fill="#0E29BF" name="Salary"/>
              <Bar dataKey="pv" fill="#C0B9B9" name="US CPI" />
              </BarChart>
              </ResponsiveContainer>
            </MDBox>
          ),
          [ color]
        )}
        <MDBox pt={3} pb={1} px={1}>
          <MDTypography variant="h3" textTransform="capitalize">
            {title}
          </MDTypography>
          <MDTypography component="div" variant="button" color="text" fontWeight="light">
            {description}
          </MDTypography>
          <Divider />
          {/* <MDBox display="flex" alignItems="center">
            <MDTypography variant="button" color="text" lineHeight={1} sx={{ mt: 0.15, mr: 0.5 }}>
              <Icon>schedule</Icon>
            </MDTypography>
            <MDTypography variant="button" color="text" fontWeight="light">
              {date}
            </MDTypography>
          </MDBox> */}
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of ReportsBarChart
SalaryMarketTrendsChart.defaultProps = {
  color: "dark",
  description: "",
};

// Typechecking props for the ReportsBarChart
SalaryMarketTrendsChart.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  date: PropTypes.string.isRequired,
  // chart: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.object])).isRequired,
};

export default SalaryMarketTrendsChart;
