import BasicCard from "../../components/BasicCard";
import LabTabs from "../../components/LabTabs";
import BasicCcard2 from "../../components/BasicCcard2";
import {  Button, Grid, Typography } from "@mui/material";
import Accordionee from "../../components/Accordionee";
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import FullScreenDialog from "../../components/FullScreenDialog";
import { useNavigate } from "react-router-dom";

const about=[
    {
        image:"https://wallpaper.dog/large/20497666.jpg",
        title:"Hot brown Honey The Remix-may 30 party",
        day:"may30 2023",
        time:" 9.00pm to 11.00pm",
        address:"Australia",
        
    }, 
     {
        image:"https://media.istockphoto.com/id/513550806/photo/teenager-hipster-friends-partying-by-blowing-colorful-confetti-from-hands.jpg?s=612x612&w=0&k=20&c=BG0BHvW98AiLFyhiNy3NzlPZlGTUwHS-I8iYVvWmR78=",
        title:"Hyderabad highest weekend party theme",
        day:"may31 2023",
        time:"9.00am to 4.00pm",
        address:" hyderabad",
       
    },
    {
        image:"https://wallpaperaccess.com/full/2249936.jpg",
        title:"Hot brown Honey The Remix-may 30 party",
        day:"may30 2023",
        time:" 11.00pm to 1.00am",
        address:"Australia",
      
    },

]
const home=[
  {
    image:"https://media.istockphoto.com/id/1226991415/photo/portrait-of-inspirational-innovative-speaker-talking-about-happiness-self-success-empowerment.jpg?s=612x612&w=0&k=20&c=TPxj81enLbtONVJOiWtdwjWDz8F9jdU1SIkHL9jw2Ps=",
    day:"Posted on 18 May 2023",
    time:" Eventer",
    address:"Reference site about Lorem...",
    rating:"MORE DETAILS"
  },
  {
    image:"https://thumbs.dreamstime.com/b/motivational-speaker-headset-performing-stage-back-view-254029046.jpg",
    day:"Posted on 18 May 2023",
    time:" First Speaker",
    address:"Lorem ipsum is...",
    rating:"MORE DETAILS"
  },
  {
    image:"https://imageio.forbes.com/specials-images/imageserve/61e851dc6878a4fbf349c5e3/0x0.jpg?format=jpg&width=1200",
    day:"Posted on 17 May 2023",
    time:" Eventer",
    address:"Quaerat neque purus ipsum neque...",
    rating:"MORE DETAILS"
  },
]

export default function Home(){
  const navigate = useNavigate();

  const onEvents=(e)=>{
    e.preventDefault();
    navigate('/Events')
  };
  const onLogin = (e) => {
    e.preventDefault();
    navigate('/login')
  
  };
  const onContact = (e) => {
    e.preventDefault();
    navigate('/Contact')
  
  };
    return(
        <>
       <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, p:2 }} >
            <Grid xs={4}>
              <img  alt="kk" src="https://electronic.vegas/wp-content/uploads/sites/4/2018/08/edc-vegas-2018-heli.jpg"width="1300" height="600"/>
            </Grid>
            <Grid  xs={8} >
          <Typography variant="h3" color="white" marginTop="200px" marginleft="200px"  >
    Go Kangaroos your appetite starts here!
    </Typography>
           </Grid>
           </Grid>
         <Grid container spacing={0} marginLeft="30px" > 
            {
                about.map((about)=>{
                    return <BasicCard image={about.image} title={about.title} day={about.day} time={about.time}  address={about.address} rating={about.rating} />
                })
            }     
        
        </Grid> 
        

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, p:2 }} >
          <Grid xs={1} >

          </Grid>
  <Grid  xs={4.7} sx={{backgroundColor:"#e3f2fd"}}>
    <img src="https://imageio.forbes.com/specials-images/imageserve/61e851dc6878a4fbf349c5e3/0x0.jpg?format=jpg&width=580"  width="600" alt="kk" marginTop="20px"  />
  </Grid>
  <Grid xs={1} sx={{backgroundColor:"#e3f2fd"}}>

</Grid>

  <Grid  xs={4.5} sx={{backgroundColor:"#e3f2fd"}} >
    <Typography variant="h5" color="magenta"  marginTop="30px" >
    "About the events2go[EventManager]" 
    </Typography>  
    <Typography variant="h6" color=" orange">
    "Welcome to Events2go Event Manager" 
    </Typography>
    <Typography variant="body1" gutterBottom textAlign="justify">
    Events2go is the brainchild of our team at Techsphere Solutions Pty Ltd, who envisaged that this is the age of technology and we need a new way of working that creates a culture that encourages collaboration and cooperation of units or organisations and maximise the use of technology for achieving greater productivity in the fast paced society, with COVID-19 like lockdown situations where virtual door-knocking has become compulsive and to determine the well-being of remotely working employees that has become essential in performance management and productivity.
    </Typography>
       <Button variant="contained"  onClick={onEvents} sx={{backgroundColor:"magenta",marginTop:"15px"}}>
        EventSchedule
       </Button>
       <Grid xs={0.5} sx={{backgroundColor:"#e3f2fd"}}>

       </Grid>
    
     </Grid>
    
<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, p:2 }} >
<Grid xs={1} >

</Grid>
 <Grid xs={4.5}  sx={{backgroundColor:"#e3f2fd"}}>
  <Typography variant="h5" color=" orange" sx={{alignItems:"center",alignContent:"center"}} marginTop="150px" >
     Creative, Engaged, Well-connected, Self-promoting and Reporting Event Organiser!
    </Typography>
  </Grid>
  <Grid xs={1} sx={{backgroundColor:"#e3f2fd"}} >

</Grid>
 
  <Grid xs={4.5}  sx={{backgroundColor:"#e3f2fd"}}>
    <img src="https://www.cshl.edu/wp-content/uploads/2017/02/CSHL_GraceAud-768x480.jpg " alt="jj" width="515" />
  </Grid>
  <Grid xs={1} ></Grid>
</Grid>

  <Grid xs={12}  marginTop="20px"  >
    <Typography variant="h5" color="#e91e63" marginTop="20px">
      Trending Events
    </Typography>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid xs={8} marginLeft="250px">
      <Typography variant="subtitle1" gutterBottom  marginTop="10px">
     Below you'll find the schedule for Events 2023.We'll keep this page regularly 
      updated with all new events and sessions,so be sure to keep checking in!      
    </Typography>
    </Grid>
    </Grid>
  </Grid>

<LabTabs/>
 
  <Grid xs={12} marginTop="30px" >
  <Button variant="contained"  onClick={onEvents} color="success" sx={{backgroundColor:"magenta"}}>
        EventSchedule
       </Button>
  </Grid>
  <Grid xs={6} marginTop="30px">
  
  <img  alt="kk" src="https://media.glassdoor.com/l/30650/red-river-office.jpg" width="1300" height="500"/>
  
  </Grid>
  <Grid xs={6} marginTop="200px">
  <Typography variant="h2" color="White" >
  Our mission is to bring people together!
        </Typography>
        <Button variant="contained" onClick={onLogin} color="success" sx={{backgroundColor:"magenta"}}>
        Join Us
       </Button>

</Grid>
</Grid>
<Typography variant="h5" color="#e91e63" >
Events for every occasion
        </Typography>

   <Grid xs={8} marginTop="20px" sx={{backgroundColor:"#eceff1"}} >
   <Typography variant="subtitle1"  >
   Diversity is our strength, we would like to bring people from all walks of life to work together
        </Typography>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3,  }} marginTop="20px"  >
        <Grid xs={2.5} sx={{backgroundColor:"#fff59d"}} margin="5px">
          <Typography variant="h6">
            FREE EVENTS
          </Typography>
          <Typography variant="subtitle1" >
            Standard Fee
          </Typography>
          <Typography variant="subtitle1" >
            Applicable
          </Typography>
        </Grid>
        <Grid xs={3} sx={{backgroundColor:"#fff59d"}} margin="5px">
          <Typography variant="h6">
            Standard
          </Typography>
          <Typography variant="subtitle1" >
          5% + $1.00
          </Typography>
          <Typography variant="subtitle1" >
          Per paid ticket
          </Typography>
        </Grid>
        <Grid xs={3} sx={{backgroundColor:"#fff59d"}} margin="5px">
          <Typography variant="h6">
          Charities
          </Typography>
          <Typography variant="subtitle1" >
          2.5% + $0.50
          </Typography>
          <Typography variant="subtitle1" >
          Per paid ticket
          </Typography>
        </Grid>
        <Grid xs={3} sx={{backgroundColor:"#fff59d"}} margin="5px">
          <Typography variant="h6">
          Custom
          </Typography>
          <Typography variant="subtitle1" >
          Thinking big? Let's talk.
          </Typography>
          <Button variant="contained" onClick={onContact} color="success" sx={{backgroundColor:"magenta"}}>
        Contact Us
       </Button>
        </Grid>
    </Grid>  
     
    <Typography variant="h7" marginTop="20px">
    All plans include access to all features. Technology, Pricing, Customer Service, and Support will be provided.
          </Typography> 
          <Typography variant="h6" marginTop="20px">
          Quality Service and Customer first.
          </Typography>
          </Grid> 
          <Typography variant="h6" marginTop="30px">
          Creative, Engaged, Well-connected, Self-promoting and Reporting Event Organiser!
          </Typography>
          <Typography variant="subtitle1" marginTop="10px">
          Customize your events with our design tools and event builder.
          </Typography>
          <Typography variant="h5" marginTop="50px" color="#e91e63">
          Our Reviews Latest News & Articles
          </Typography>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid xs={6} marginLeft="320px">
          <Typography variant="subtitle1"  marginTop="10px">
          Events 2023 gathered the brightest minds globally. Explore new skills and attributes from our experts and practitioners.
          </Typography>
          </Grid>
          </Grid>
          <Grid container spacing={0} marginLeft="20px"> 
            {
                home.map((home)=>{
                    return <BasicCcard2 image={home.image} day={home.day} time={home.time}  address={home.address} rating={home.rating} />
                })
            }     
        
        </Grid>
        <Typography variant="h5" marginTop="50px">
        Have Questions? Look Here.
          </Typography>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid xs={6} marginLeft="320px">
          <Typography variant="subtitle1"  marginTop="10px" marginBottom="50px">
          Events 2023 gathered the brightest minds in the tech world. Learn new skills and get insights from experts and practitioners from all around!
          </Typography>
          </Grid>
          </Grid>
          <Grid container spacing={0}>
          <Grid xs={2}></Grid>
          <Grid xs={8}>
          <Accordionee/>
          </Grid>
          </Grid>
         
          <Typography variant="h5" marginTop="50px">
          Still have a question? 
          <FullScreenDialog/>
          </Typography>
          <Grid container rowSpacing={1} sx={{backgroundColor:"#cfd8dc"}} marginTop="30px" >
           <Grid xs={12}>
           <Typography variant="h5" marginTop="40px">
           Keep upto date with events
          </Typography>
          <Typography variant="subtitle1"  textAlign="center">
          Events 2023 gathered the brightest minds globally.
          <br/>
           Explore new skills and attributes from our experts and practitioners.
          </Typography>
           </Grid>
           <Grid container rowSpacing={1} sx={{backgroundColor:"#cfd8dc"}} marginTop="20px" >
           <Grid xs={4} ></Grid>
           <Grid xs={4} >
           <TextField
          id="outlined-gmail-input"
          label="@gmail.com"
          type="events2go@gmail.com"
          autoComplete="current-gmail"
        />
        <Button variant="contained"  color="success" sx={{backgroundColor:"magenta",marginTop:"5px",marginLeft:"10px"}} >
          GET STARTED
        </Button>
          </Grid>
          </Grid>
          <Typography variant="subtitle1"  textAlign="center" marginLeft="430px" marginBottom="40px">
          We don’t share your personal information with anyone. Check out our
          <br/>
          <Link href="#" color="inherit" >
  {'Privacy Policy.     Terms Of Use'}
      </Link>
      for more information
          </Typography>
          </Grid>
          
        </>
    )
}