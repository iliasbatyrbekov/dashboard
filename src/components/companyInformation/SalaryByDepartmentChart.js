/* eslint-disable no-unused-vars */ 
import React, { 
  // PureComponent, 
  useMemo } from "react";

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

import {
  ComposedChart,
  // Line,
  // Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  // Legend,
  // Scatter,
  ResponsiveContainer,
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

function SalaryByDepartment({ color, title, description, date }) {
  // const { data, options } = configs(chart.labels || [], chart.datasets || {});

  const yKey = "name";
  const xKey = "uv"
  const dataTemp = [
    {
      name: 'Page A',
      uv: 590,
      pv: 800,
      amt: 1400,
      cnt: 490,
    },
    {
      name: 'Page B',
      uv: 868,
      pv: 967,
      amt: 1506,
      cnt: 590,
    },
    {
      name: 'Page C',
      uv: 1397,
      pv: 1098,
      amt: 989,
      cnt: 350,
    },
    {
      name: 'Page D',
      uv: 1480,
      pv: 1200,
      amt: 1228,
      cnt: 480,
    },
    {
      name: 'Page E',
      uv: 1520,
      pv: 1108,
      amt: 1100,
      cnt: 460,
    },
    {
      name: 'Page F',
      uv: 1400,
      pv: 680,
      amt: 1700,
      cnt: 380,
    },
  ];
  

  

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
              data={dataTemp}
              layout="vertical"
              margin={{ left: 0, right:0 }}
            >
              <XAxis hide axisLine={false} type="number" />
              <YAxis
                yAxisId={0}
                dataKey={xKey}
                type="category"
                axisLine={false}
                tickLine={false}
                // tick={YAxisLeftTick}
              />
              <YAxis
                orientation="right"
                yAxisId={1}
                dataKey={yKey}
                type="category"
                axisLine={false}
                tickLine={false}
                tickFormatter={value => value.toLocaleString()}
                mirror
                // tick={{
                //   transform: `translate(${maxTextWidth + BAR_AXIS_SPACE}, 0)`
                // }}
              />
              <Bar dataKey={yKey} minPointSize={2} barSize={32}>
                {/* {dataTemp.map((d, idx) => {
                  return <Cell key={d[xKey]}  />;
                })} */}
              </Bar>
            </BarChart>
  
              
              
              {/* <ComposedChart
                // layout="vertical"
                width={500}
                height={400}
                data={dataTemp}
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                
                <XAxis hide axisLine={false} type="number" />
                <YAxis 
                  dataKey="name" 
                  scale="band" 
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                <Bar
                  dataKey="pv" 
                  barSize={20} 
                  fill="#413ea0" 
                /> */}
                {/* <Line type="monotone" dataKey="uv" stroke="#ff7300" /> */}
                {/* <Scatter dataKey="cnt" fill="red" /> */}
              {/* </ComposedChart> */}
            </ResponsiveContainer>
            </MDBox>
          ),
          [ color]
        )}
        <MDBox pt={3} pb={1} px={1}>
          <MDTypography variant="h6" textTransform="capitalize">
            {title}
          </MDTypography>
          <MDTypography component="div" variant="button" color="text" fontWeight="light">
            {description}
          </MDTypography>
          <Divider />
          <MDBox display="flex" alignItems="center">
            <MDTypography variant="button" color="text" lineHeight={1} sx={{ mt: 0.15, mr: 0.5 }}>
              <Icon>schedule</Icon>
            </MDTypography>
            <MDTypography variant="button" color="text" fontWeight="light">
              {date}
            </MDTypography>
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of ReportsBarChart
SalaryByDepartment.defaultProps = {
  color: "dark",
  description: "",
};

// Typechecking props for the ReportsBarChart
SalaryByDepartment.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  date: PropTypes.string.isRequired,
  // chart: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.object])).isRequired,
};

export default SalaryByDepartment;
