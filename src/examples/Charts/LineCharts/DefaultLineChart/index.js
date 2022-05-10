 

import { useMemo } from "react";

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";


import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// DefaultLineChart configurations
// import configs from "examples/Charts/LineCharts/DefaultLineChart/configs";

// Material Dashboard 2 React base styles
// import colors from "assets/theme/base/colors";

function DefaultLineChart({ icon, title, description, height, chart }) {
  // const chartDatasets = chart.datasets
  //   ? chart.datasets.map((dataset) => ({
  //       ...dataset,
  //       tension: 0,
  //       pointRadius: 3,
  //       borderWidth: 4,
  //       backgroundColor: "transparent",
  //       fill: true,
  //       pointBackgroundColor: colors[dataset.color]
  //         ? colors[dataset.color || "dark"].main
  //         : colors.dark.main,
  //       borderColor: colors[dataset.color]
  //         ? colors[dataset.color || "dark"].main
  //         : colors.dark.main,
  //       maxBarThickness: 6,
  //     }))
  //   : [];

  // const { data, options } = configs(chart.labels || [], chartDatasets);

  const dummylineData = [
    {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 300, pv: 200, amt: 2400},
    {name: 'Page C', uv: 200, pv: 2800, amt: 2400},
    {name: 'Page D', uv: 600, pv: 2000, amt: 2400},
    {name: 'Page E', uv: 800, pv: 1400, amt: 2400},
  ];

  const renderChart = (
    <MDBox py={2} pr={2} pl={icon.component ? 1 : 2}>
      {title || description ? (
        <MDBox display="flex" px={description ? 1 : 0} pt={description ? 1 : 0}>
          {icon.component && (
            <MDBox
              width="4rem"
              height="4rem"
              bgColor={icon.color || "info"}
              variant="gradient"
              coloredShadow={icon.color || "info"}
              borderRadius="xl"
              display="flex"
              justifyContent="center"
              alignItems="center"
              color="white"
              mt={-5}
              mr={2}
            >
              <Icon fontSize="medium">{icon.component}</Icon>
            </MDBox>
          )}
          <MDBox mt={icon.component ? -2 : 0}>
            {title && <MDTypography variant="h6">{title}</MDTypography>}
            <MDBox mb={2}>
              <MDTypography component="div" variant="button" color="text">
                {description}
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      ) : null}
      {useMemo(
        () => (
          <MDBox height={height}>
            <LineChart width={600} height={300} data={dummylineData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
              </LineChart>
          </MDBox>
        ),
        [chart, height]
      )}
    </MDBox>
  );

  return title || description ? <Card>{renderChart}</Card> : renderChart;
}

// Setting default values for the props of DefaultLineChart
DefaultLineChart.defaultProps = {
  icon: { color: "info", component: "" },
  title: "",
  description: "",
  height: "19.125rem",
};

// Typechecking props for the DefaultLineChart
DefaultLineChart.propTypes = {
  icon: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "light",
      "dark",
    ]),
    component: PropTypes.node,
  }),
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  chart: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default DefaultLineChart;
