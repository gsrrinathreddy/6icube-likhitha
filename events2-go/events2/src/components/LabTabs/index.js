import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {  Grid, Typography } from "@mui/material";

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1'  }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 11, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" >
            <Tab label="Top" value="1"  marginLeft="50px" sx={{ backgroundColor:"magenta"}} />
            <Tab label="This Weekend" value="2" sx={{ backgroundColor:"magenta"}} />
            
          </TabList>
        </Box>
        <TabPanel value="1" >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={6} marginTop="20px">
  <Typography variant="h6" >
  Hot Brown Honey THE REMIX - May 30 PARTY
        </Typography>
        <Typography variant="subtitle1"  color="magenta">
         20 May 2023 ;11am to 12pm
        </Typography>
        <Typography variant="subtitle1"  color="magenta">
         Devla,Australia
        </Typography>
        <Typography variant="subtitle1"  >
        Sydney Opera weekends getting lit more than ever!...
        </Typography>
  </Grid>

  <Grid xs={6} marginTop="20px">
  <Typography variant="h6" >
  Hyderabads Biggest Weekend THEME PARTY
        </Typography>
        <Typography variant="subtitle1"  color="magenta">
        16 May 2023 11:00 am - 1:00 pm AEST
        </Typography>
        <Typography variant="subtitle1"  color="magenta">
       Sydney NSW 2000,Australia       
        </Typography>
        <Typography variant="subtitle1"  > 
        Sydney Opera weekends getting lit more than ever!...
        </Typography>
  </Grid>


  <Grid xs={6} marginTop="20px">
  <Typography variant="h6" >
  Hot Brown Honey THE REMIX - May 30 
        </Typography>
        <Typography variant="subtitle1"  color="magenta">
         30 May 2023 ;11am to 1pm AEST
        </Typography>
        <Typography variant="subtitle1"  color="magenta">
        Bennelong Point, ,Australia
        </Typography>
        <Typography variant="subtitle1"  >
        Sydney Opera weekends getting lit more than ever!...
        </Typography>
  </Grid>
  </Grid>
        </TabPanel>
        <TabPanel value="2">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={6} marginTop="20px">
  <Typography variant="h6" >
  Hot Brown Honey THE REMIX - May 30 PARTY
        </Typography>
        <Typography variant="subtitle1"  color="magenta">
         20 May 2023 ;11am to 12pm
        </Typography>
        <Typography variant="subtitle1"  color="magenta">
         Devla,Australia
        </Typography>
        <Typography variant="subtitle1" >
        Sydney Opera weekends getting lit more than ever!...
        </Typography>
  </Grid>

  <Grid xs={6} marginTop="20px">
  <Typography variant="h6" >
  Hyderabads Biggest Weekend THEME PARTY
        </Typography>
        <Typography variant="subtitle1"  color="magenta">
        16 May 2023 11:00 am - 1:00 pm AEST
        </Typography>
        <Typography variant="subtitle1"  color="magenta">
       Sydney NSW 2000,Australia       
        </Typography>
        <Typography variant="subtitle1"  > 
        Sydney Opera weekends getting lit more than ever!...
        </Typography>
  </Grid>


  <Grid xs={12} marginTop="20px">
  <Typography variant="h6" >
  Hot Brown Honey THE REMIX - May 30 
        </Typography>
        <Typography variant="subtitle1"  color="magenta">
         30 May 2023 ;11am to 1pm AEST
        </Typography>
        <Typography variant="subtitle1"  color="magenta">
        Bennelong Point, ,Australia
        </Typography>
        <Typography variant="subtitle1"  >
        Sydney Opera weekends getting lit more than ever!...
        </Typography>
  </Grid>
  </Grid>
        </TabPanel>
        
      </TabContext>
    </Box>
  );
}