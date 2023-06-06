import { Grid,Typography ,Button} from "@mui/material"
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
export default function Contact(){
 
    return(
        <>
         <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
 <Grid xs={12} marginTop="80px">
 <Typography variant="h4" >
     Contact Us
       </Typography>
    </Grid>
    </Grid>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} marginTop="80px" marginBottom="50px">
 <Grid xs={1} ></Grid>
 <Grid xs={3} >
    <img  alt="kk" src="https://www.freeiconspng.com/thumbs/location-icon-png/location-icon-map-png--1.png" width="100" height="100"/>
    <Typography variant="h6">
    Our Location 
    </Typography>
    <Typography variant="subtitle1" >
    48 Cameron St,
    </Typography>
    <Typography variant="subtitle1">
    Doonside NSW 2767
    </Typography>

    </Grid>
    <Grid xs={0.5} ></Grid>
    <Grid xs={3} >
    <img alt="kk" src="https://w7.pngwing.com/pngs/527/758/png-transparent-social-media-telegram-logo-computer-icons-telegram-angle-triangle-monochrome-thumbnail.png" width="100" height="100"/>
    <Typography variant="h6">
    Drop A Line 
    </Typography>
    <Link href="#" color="inherit">
  {'infoevents2go@gmail.com'}
</Link>
<Typography>
<Link href="#" color="inherit">
  {'infotechspheresolutions@gmail.com'}
</Link>
</Typography>
    </Grid>
    <Grid xs={0.5}></Grid>
    <Grid xs={3} >
    <img alt="kk" src="https://cdn.onlinewebfonts.com/svg/img_476934.png" width="100" height="100"/>
    <Typography variant="h6">
    Let's Talk
    </Typography>
    <Typography variant="subtitle1" >
    Tel: +61 431 622 292
    </Typography>
    <Typography variant="subtitle1">
    Tel: +61 422 202 766
    </Typography>

    </Grid>
    </Grid>
    <Card variant="outlined" marginTop="40px" sx={{backgroundColor:"#eeeeee"}}>
    <CardContent>
    <Typography variant="h5" textAlign="left" marginLeft="160px">
    Send A Message
    </Typography>
    <Typography variant="subtitle1" textAlign="left" marginLeft="160px" >
    Please don't hesitate to get in touch with us anytime
    </Typography>
   
    <Grid container rowSpacing={1} >
        <Grid xs={1.5}></Grid>
 <Grid xs={8} marginTop="30px">
 <TextField fullWidth label="Enter Your Name*" id="fullWidth" />
 <Typography marginTop="20px">
 <TextField fullWidth label="Enter Your Email*" id="fullWidth" marginTop="30px" />
 </Typography>
 <Typography marginTop="20px" marginBottom="50px">
 <TextField fullWidth label="Your Message " id="fullWidth" />
 </Typography>
 <Button variant="contained"  color="success" sx={{backgroundColor:"magenta"}} >
          Send Your Message
        </Button>
 </Grid>
 </Grid>

    </CardContent>
    </Card>
        </>
    )
}