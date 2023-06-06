import { Grid, Typography } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

export default function Footer(){
    
    return(
        <>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} marginTop="150px" >
  <Grid xs={3}>
  <Typography variant="h6">
            FIND EVENTS
          </Typography>
          <Typography variant="subtitle1" >
            Search Events
          </Typography>
          
  </Grid>
  <Grid xs={3}>
  <Typography variant="h6">
  Host events
          </Typography>
          <Typography variant="subtitle1" >
          All features
          </Typography>
          <Typography variant="subtitle1" >
          Pricing
          </Typography>
          <Typography variant="subtitle1" >
          FAQs
          </Typography>
  </Grid>
  <Grid xs={3}>
  <Typography variant="h6">
  Get in touch
          </Typography>
          <Typography variant="subtitle1" >
          Help
          </Typography>
          <Typography variant="subtitle1" >
          Contact us
          </Typography>
  </Grid>
  <Grid xs={3}>
  <Typography variant="h6">
            FIND EVENTS
          </Typography>
          <IconButton >
          <Avatar sx={{ bgcolor: "#d500f9" }}>f</Avatar>
                <Avatar sx={{ bgcolor: "#d500f9"}}>in</Avatar>
              </IconButton>
          
  </Grid>
<Grid xs={6} marginTop="30px" marginBottom="50px">
<Typography variant="h8"  >
© Copyright Events2go. All Rights Reserved
          </Typography>
          </Grid>
          </Grid>
        </>
    )
}