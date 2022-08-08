/* eslint-disable no-unused-vars */ 

// @mui material components
import Grid from "@mui/material/Grid";
// import Button from "@mui/material/Button";

import React, { useEffect, useState, PureComponent } from "react"

// RecHunter components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

// RecHunter example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
// import 
import SalaryMarketTrendsChart from "components/dashboard/SalaryMarketTrendsChart"
import CurrentSalaryChart from "components/dashboard/CurrentSalaryChart"

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
// import Projects from "layouts/dashboard/components/Projects";
// import OrdersOverview from "layouts/dashboard/components/OrdersOverview";

// import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';




// TODO: Make it dynamic
import placeholderCategories from "./data/sector_industry_subindustry.json"

function Dashboard() {
  const { tasks } = reportsLineChartData;

  // console.log(Object.keys(placeholderCategories));

  // placeholderCategories.keys.forEach((element) => {
  //   console.log(element)
  // });
  // Object.keys(placeholderCategories.options).forEach((key) => {
  //     console.log(key);
  // });
  const [allSectors, setAllSectors] = useState(Object.keys(placeholderCategories));
  const [sectors, setSectors] = useState(Object.keys(placeholderCategories));
  const [industries, setIndustries] = useState([]);
  const [subIndustries, setSubIndustries] = useState([]);
  const [buttonsSectors, setButtonsSectors] = useState(<Grid container spacing={1}/>);
  const [buttonsIndustries, setButtonsIndustries] = useState(<Grid container spacing={1}/>);
  const [buttonsSubIndustries, setButtonsSubIndustries] = useState(<Grid container spacing={1}/>);


  // Dummy

  const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const data02 = [
    { name: 'A1', value: 100 },
    { name: 'A2', value: 300 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
    { name: 'B4', value: 30 },
    { name: 'B5', value: 50 },
    { name: 'C1', value: 100 },
    { name: 'C2', value: 200 },
    { name: 'D1', value: 150 },
    { name: 'D2', value: 50 },
  ];
  

  const selectSector = (sector) =>{

    if (sectors.length === allSectors.length){
      setSectors([sector]);
      setIndustries(Object.keys(placeholderCategories[sector]));
    }
    else{
      setSectors(allSectors);
      setIndustries([])
      setSubIndustries([])
    }
  }
  const selectIndustry = (industry)=>{
    if (industries.length !== 1){
      setIndustries([industry]);
      setSubIndustries(placeholderCategories[sectors[0]][industry])
    }
    else{
      // setSectors(allSectors);
      setIndustries([industries[0]])
      setSubIndustries([])
    }
  }
  const selectSubIndustry = (subIndustry)=>{
    if (subIndustries.length !== 1){
      // setIndustries([subIndustry]);
      setSubIndustries([subIndustry])
      // setSubIndustries(placeholderCategories[sectors[0]][subIndustry])
    }
    else{
      // setSectors(allSectors);
      setSubIndustries(placeholderCategories[sectors[0]][industries[0]])
    }
  }

  const makeCategoryButton = (category) => (
    <MDBox>
      <MDButton 
      sx={{ mx: 1, my:1 }}
      color="info" 
      variant="gradient" 
      key={`Category_${  category}`}
      onClick={() => selectSector(category)}>
        {category}
      </MDButton>
    </MDBox>
        
    );
    const makeIndustryButton = (category) => (
      <MDBox>
        <MDButton 
        sx={{ mx: 1, my:1  }}
        color="dark" 
        variant="outlined" 
        key={`SubCategory_${  category}`}
        onClick={() => selectIndustry(category)}>
          {category}
        </MDButton>
      </MDBox>
          
      );
    
    const makeSubIndustryButton = (category) => (
      <MDBox>
        <MDButton 
        sx={{ mx: 1, my:1 }}
        color="primary" 
        variant="gradient" 
        key={`SubCategory_${  category}`}
        onClick={() => selectSubIndustry(category)}>
          {category}
        </MDButton>
      </MDBox>
          
      );

    useEffect(()=>{
      setButtonsSectors(
        <Grid container spacing={1}>
            {sectors.map(makeCategoryButton)}
        </Grid>
      )
    }, [sectors])

    useEffect(()=>{
      setButtonsIndustries(
        <Grid container spacing={1}>
            {industries.map(makeIndustryButton)}
        </Grid>
      )
    }, [industries])

    useEffect(()=>{
      setButtonsSubIndustries(
        <Grid container spacing={1}>
            {subIndustries.map(makeSubIndustryButton)}
        </Grid>
      )
    }, [subIndustries])

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox> 
            
            {allSectors.length ===1 ? <MDTypography>Selected Sector</MDTypography> : <MDTypography>Select a Sector</MDTypography> }
            {buttonsSectors}
            {industries.length ===0 ? <MDTypography/> : <MDTypography>Select an Industry</MDTypography>}
            {buttonsIndustries}
            {/* no need it's too detailed
            {subIndustries.length ===0 ? <MDTypography/> : <MDTypography>Select a Sub-Industry</MDTypography>}
            {buttonsSubIndustries} */}
        </MDBox>

      <MDBox py={2}>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={6}>
              <MDBox mb={12}>
                <CurrentSalaryChart
                  color="white"
                  title="Current Salary Distribution"
                  description="Current salary distribution in Histogram"
                  date="campaign sent 2 day(s) ago"
                  // chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <MDBox mb={12}>
                <SalaryMarketTrendsChart
                  color="white"
                  title="Salary Growth over time"
                  description="Year-to-year growth of total salary compare to the growth of US CPI"
                  date="Last updated 1 day(s) ago"
                  // chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
