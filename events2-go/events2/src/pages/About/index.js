import{Typography, Grid} from '@mui/material';

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
export default function About(){
    return(
        <>
        <Grid xs={12} sx={{backgroundColor:"#f5f5f5"}}>
          <Typography variant="h3">
       About Us
       </Typography>
</Grid>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid xs={1}>

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
  <Grid xs={1}>

</Grid>
  </Grid>
  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} marginTop="20px">
  <Grid xs={1}>

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
  <Grid xs={1}>

</Grid>
</Grid>
<Typography variant='h5'>
Key Features
</Typography>
<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} marginTop="30px">
  <Grid xs={1}></Grid>
  <Grid xs={4.5} sx={{backgroundColor:"#f5f5f5"}}>
  <Typography variant='h6'>
  Easy Event creation for the purposes
  <br/>
    of Registration & Check-in
  </Typography>
  <Typography variant="subtitle2"  textAlign="justify">
    
  • Helps in developing custom registration forms
  <br/>

• Secure important attendee information
<br/>
• Generates QR codes for quick scanning and onsite check-ins
<br/>
• Assist people with the option to self-check in within the app
<br/>
• Easily track attendance rates in real-time
  </Typography>
  </Grid>
  <Grid xs={1}></Grid>
  <Grid xs={4.5} sx={{backgroundColor:"#f5f5f5"}}>
  <Typography variant='h6'>
  Engagement
  </Typography>
  <Typography variant="subtitle2"  textAlign="justify">
    
  • Accessible Live streaming or virtual presentations through Events2go App
<br/>
• Businesses can gain more visibility through Events2go in-App exhibit booths
<br/>
• Publish multimedia content for easy download
<br/>
• Set up live polls, Q&A sessions and leader-boards for attendees
<br/>
• Display job boards and product listings
  </Typography>
  </Grid>
  <Grid xs={1}></Grid>
  </Grid>
  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} marginTop="30px">
  <Grid xs={1}></Grid>
  <Grid xs={4.5} sx={{backgroundColor:"#f5f5f5"}}>
  <Typography variant='h6'>
  Networking & Lead Capture

  </Typography>
  <Typography variant="subtitle2"  textAlign="justify">
    
  • Seamless contact exchange between attendees through QR scanning
<br/>
• Allow attendees to search for users, ‘favourite’ their contacts, and export contact lists
<br/>
• Connect attendees through Events2go in-App chat & meeting booking tools
<br/>
• Helps attendees find exhibitors through an interactive floor map
<br/>
• Host a live feed of the goings-on in your event or seek feedback instantly
  </Typography>
  </Grid>
  <Grid xs={1}></Grid>
  <Grid xs={4.5} sx={{backgroundColor:"#f5f5f5"}}>
  <Typography variant='h6'>
  Promotion, Branding and Sponsorship

  </Typography>
  <Typography variant="subtitle1"  textAlign="justify">
    
  • Create white-labelled apps featuring your custom branding
<br/>
• Sell spaces within your app’s virtual exhibit hall
<br/>
• Offer full-page splash ads to increase sponsor visibility
<br/>
• Set up rolling banner ads throughout the mobile app
<br/>
• Set up a sponsor’s page to increase logo visibility
  </Typography>
  </Grid>
  <Grid xs={1}></Grid>
  </Grid>
  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} marginTop="30px">
  <Grid xs={1}></Grid>
  <Grid xs={4.5} sx={{backgroundColor:"#f5f5f5"}}>
  <Typography variant='h6'>
  Reporting and Analytics

  </Typography>
  <Typography variant="subtitle2"  textAlign="justify">
  • Track attendance rates, session check-ins and booth traffic within the app
     <br/>
• Evaluate individual attendee engagement through attendee journey tracking
<br/>
• Measure satisfaction through surveys about the event in general and individual sessions
<br/>
• Export your data to further evaluate and share with event partners

  </Typography>
  </Grid>

  
  </Grid>
 

        </>
    )
}