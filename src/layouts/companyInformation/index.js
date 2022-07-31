 

// @mui material components
import Grid from "@mui/material/Grid";

// RecHunter components
import MDBox from "components/MDBox";

// RecHunter examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// import MasterCard from "examples/Cards/MasterCard";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

import PayBiasRisk from "components/companyInformation/PayBiasRisk";
import WinRate from "components/companyInformation/WinRate";
import SalaryByDepartmentChart from "components/companyInformation/SalaryByDepartmentChart";
import SalaryVsTimeChart from "components/companyInformation/SalaryVsTimeChart";


function CompanyInformation() {
  return (
    <DashboardLayout>
      <DashboardNavbar absolute isMini />
      
      <MDBox py={4.5}>
        <MDBox mt={4.5}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={6}>
              <MDBox mb={12}>
                    <PayBiasRisk 
                        color="white"
                        title="Pay Bias Risk"
                        description="Last quartaer"
                        date="Last updated 3 day(s) ago"
                    />
                </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <MDBox mb={12}>
                    <WinRate 
                        color="white"
                        title="Win Rate"
                        description="Last quartaer"
                        date="Last updated 3 day(s) ago"
                    />
                </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mt={-4}>
          <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={6}>
                <MDBox mb={12}>
                    <SalaryVsTimeChart 
                        color="white"
                        title="Average Base Salary (vs time)"
                        description="Last quartaer"
                        date="Last updated 3 day(s) ago"
                    />
                </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <MDBox mb={12}>
                    <SalaryByDepartmentChart 
                        color="white"
                        title="Average Base Salary by Department"
                        description="Last quartaer"
                        date="Last updated 3 day(s) ago"
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

export default CompanyInformation;
