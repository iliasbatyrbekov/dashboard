/* eslint-disable no-unused-vars */ 

import React, { 
  useMemo,
  // useState,
 } from "react";

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

import { PieChart,
  Pie, 
  Cell, 
  ResponsiveContainer,
  Legend,
}
from 'recharts';

// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,  } from 'recharts';

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// RecHunter components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import data from "layouts/tables/data/authorsTableData";

// ReportsBarChart configurations
// import configs from "examples/Charts/BarCharts/ReportsBarChart/configs";


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};



function PayBiasRisk({ color, title, description, date }) {
  // const { data, options } = configs(chart.labels || [], chart.datasets || {});

  // const [opacity, setOpacity] = useState(1);

  const handleMouseEnter = () => {
    // setOpacity(0.5)
  };

  const handleMouseLeave = () => {
    // setOpacity(1)
  };

  const dataTemp = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
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
            <PieChart width={400} height={400}>
              <Pie
                data={dataTemp}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {dataTemp.map((entry, index) => (
                  <Cell key={`cell-${entry}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend 
              payload={
                dataTemp.map(
                  (item, index) =>({
                    id: item.name,
                    type: "square",
                    value: `${item.name} (${item.value}%)`,
                    color: COLORS[index % COLORS.length]
                  })
                )
              }
            />
            </PieChart>
            
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
PayBiasRisk.defaultProps = {
  color: "dark",
  description: "",
};

// Typechecking props for the ReportsBarChart
PayBiasRisk.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  date: PropTypes.string.isRequired,
  // chart: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.object])).isRequired,
};

export default PayBiasRisk;
