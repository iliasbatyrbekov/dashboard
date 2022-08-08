import React, { 
  // PureComponent, 
  useMemo } from "react";

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
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

function CurrentSalaryChart({ color, title, description, date }) {
  // const { data, options } = configs(chart.labels || [], chart.datasets || {});

  const dataTemp = [
   /*  {
      percentile: '25',
      mediansalary: 800,
      amt: 1400,
      cnt: 490,
    },   */
    {
      name: 15000,
      uv: 3,
      pv: 967,
      amt: 1506,
      cnt: 590,
    },
    {
      name: 18000,
      uv: 5,
      pv: 1098,
      amt: 989,
      cnt: 350,
    },
    {
      name: 21000,
      uv: 10,
      pv: 1200,
      amt: 1228,
      cnt: 480,
    },
    {
      name: 24000,
      uv: 18,
      pv: 1108,
      amt: 1100,
      cnt: 460,
    },
    {
      name: 27000,
      uv: 16,
      pv: 680,
      amt: 1700,
      cnt: 380,
    },
    {
      name: 30000,
      uv: 11,
      pv: 967,
      amt: 1506,
      cnt: 590,
    },
    {
      name: 33000,
      uv: 7,
      pv: 1098,
      amt: 989,
      cnt: 350,
    },
    {
      name: 36000,
      uv: 6.5,
      pv: 1200,
      amt: 1228,
      cnt: 480,
    },
    {
      name: 39000,
      uv: 4.5,
      pv: 1108,
      amt: 1100,
      cnt: 460,
    },
    {
      name: 42000,
      uv: 3.2,
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
              <ComposedChart
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
                <XAxis dataKey="name" scale="band"/>
                <YAxis label={{ value: 'Percent', angle: -90, position: 'insideLeft' }}></YAxis>
                <Tooltip />
                <Bar dataKey="uv" barSize={30} fill="#413ea0" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
              </ComposedChart>
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
CurrentSalaryChart.defaultProps = {
  color: "dark",
  description: "",
};

// Typechecking props for the ReportsBarChart
CurrentSalaryChart.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  date: PropTypes.string.isRequired,
  // chart: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.object])).isRequired,
};

export default CurrentSalaryChart;
