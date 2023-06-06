import{Typography, Grid} from '@mui/material';
import BasicCard3 from '../../components/BasicCard3';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function About(){
    return(
        <>
        
        <Grid xs={4} marginTop="70px">
          <Typography variant="h4">
       About Us
       </Typography>
</Grid>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid xs={1.25}>

          </Grid>
  <Grid xs={4.5} marginTop="20px">
    <img alt="kk" src="https://img.freepik.com/premium-photo/handsome-successful-motivational-speaker-talking-about-happiness-self-success-empowerment-efficiency-health-how-be-more-productive-large-conference-hall-with-light-background_183219-9336.jpg" width="440" height="250"/>
  </Grid>
  <Grid xs={0.5}>

</Grid>
  <Grid xs={4.5}>
  <Typography variant="h6" color="magenta" marginTop="40px">
  ABOUT THE EVENTS2GO [ EVENTS MANAGER ]
  </Typography>
  <Typography variant="subtitle2" textAlign="justify">
  
    
Events2go is the brainchild of our team at Techsphere Solutions Pty Ltd, who envisaged that this is the age of technology and we need a new way of working that creates a culture that encourages collaboration and cooperation of units or organisations and maximise the use of technology for achieving greater productivity in the fast paced society, with COVID-19 like lockdown situations where virtual door-knocking has become compulsive and to determine the well-being of remotely working employees that has become essential in performance management and productivity.
    </Typography>
  </Grid>
  <Grid xs={1.25}>

</Grid>
  </Grid>
  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} marginTop="20px">
  <Grid xs={1.25}>

</Grid>
  <Grid xs={4.5}marginLeft="10px" marginTop="30px" >
  <Typography variant="h6" marginLeft="20px">
  Why Events2go is essential for Corporates, Governments and Not-for-profit sectors?

  </Typography>
  <Typography variant="subtitle2"  textAlign="justify" marginLeft="30px">
  <ArrowRightIcon/>
  Remotely working Employee well-being has become crucial in terms of productivity and hence online engagement is the only game changer to identify employee well-being and performance management support.
  </Typography>
  <Typography variant="subtitle2"  textAlign="justify" marginLeft="30px" >
  <ArrowRightIcon/>
  Not-for-profits often find it difficult to organise webinars, online charity and fundraising events due to limited IT resources and financial requirements

  </Typography>
  <Typography variant="subtitle2"  textAlign="justify" marginLeft="30px" >
  <ArrowRightIcon/>
  Organising events more efficiently and effectively through monitoring mechanism that registers the RSVPs, feedback and issuing ticketing

  </Typography>
    
  </Grid>
  <Grid xs={0.5}>

</Grid>
  <Grid xs={4.5} >
  <img alt="k" src="https://i0.wp.com/www.studereducation.com/wp-content/uploads/2019/09/group-attending-neighborhood-meeting-listening-to-speaker-in-community-center-1145049650_1258x838.jpeg?ssl=1" height="330" width="450" />
  </Grid>
  <Grid xs={1.25}>

</Grid>
</Grid>
<Typography variant='h5'>
Key Features
</Typography>
  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} marginTop="30px">
  <Grid xs={1.25}>

  </Grid>
  <Grid xs={4.5}>
  <BasicCard3
title="Easy Event creation for the purposes of Registration & Check-in"
data="• Helps in developing custom registration forms"
data1="•Secure important attendee information"
data2="•Generates QR codes for quick scanning and onsite check-ins"
data3="•Assist people with the option to self-check in within the app"
data4="•Easily track attendance rates in real-time"
  />
 </Grid>
 <Grid xs={0.5}>

</Grid>
<Grid xs={4.5}>
<BasicCard3
title="Networking & Lead Capture"
data="• Seamless contact exchange between attendees through QR scanning"
data1="• Allow attendees to search for users, ‘favourite’ their contacts"
data2="• Connect attendees through Events2go in-App chat "
data3="• Helps attendees find exhibitors through an interactive floor map"
data4="• Host a live feed of the goings-on in your event or seek feedback instantly"
  />

</Grid>
<Grid xs={1.25}>

</Grid>
 </Grid><Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} marginTop="30px">
  <Grid xs={1.25}>

  </Grid>
  <Grid xs={4.5}>
  <BasicCard3
title="Engagement"
data="• Accessible Live streaming or virtual presentations "
data1="• Businesses can gain more visibility through Events2go "
data2="• Publish multimedia content for easy download"
data3="• Set up live polls, Q&A sessions and leader-boards for attendees"
data4="• Display job boards and product listings"
/>
 </Grid>
 <Grid xs={0.5}>

</Grid>
<Grid xs={4.5}>
<BasicCard3
title="Promotion, Branding and Sponsorship"
data="• Create white-labelled apps featuring your custom branding"
data1="• Sell spaces within your app’s virtual exhibit hall"
data2="• Offer full-page splash ads to increase sponsor visibility"
data3="• Set up rolling banner ads throughout the mobile app"
data4="• Set up a sponsor’s page to increase logo visibility"
/>
</Grid>
<Grid xs={1.25}>

</Grid>
 </Grid>
 <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} marginTop="30px">
  <Grid xs={1.25}>

  </Grid>
  <Grid xs={4.5}>
  <BasicCard3
title="Reporting and Analytics"
data="• Track attendance rates, session check-ins and booth traffic within the app"
data1="• Evaluate individual attendee engagement through attendee journey tracking"
data2="• Measure satisfaction through surveys about the event in general and individual sessions
"
data3="• Export your data to further evaluate and share with event partners"

  />
 </Grid>
 </Grid>

        </>
    )
}