import { Grid,Typography } from "@mui/material"
import BlogCard from "../../components/BlogCard"
import Tabs from "../../components/Tabs"
const home=[
    {
      image:"https://thinkingportfolio.com/wp-content/uploads/2015/10/02G69046.jpg ",
      day:"Posted on May 22, 2023 ",
      time:" Randon Pexson, Eventer’s CEO, announced as headliner of the Eventer Conference 2022",
      address:"It has survived not only five centuries, but .also the leap into electronic typesetting, remaining..",
      rating:"MORE DETAILS"
    },
    {
      image:"https://thumbs.dreamstime.com/b/motivational-speaker-headset-performing-stage-back-view-254029046.jpg",
      day:"Posted on May 18, 2023",
      time:" Eventer Careers: Top 4 tips to get your foot in the door ",
      address:"Reference site about Lorem Ipsum, giving information on its origins, as well as a random...",
      rating:"MORE DETAILS"
    },
    {
      image:"http://events2go.com.au/uploads/blog/post/devim_1407882437.jpg ",
      day:"Posted on May 18, 2023",
      time:" First Speakers of Eventry Conference 2023 announced!",
      address:"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing...",
      rating:"MORE DETAILS"
    },
    {
      image:"http://events2go.com.au/uploads/blog/post/devim_1335223258.png ",
      day:"Posted on May 17, 2023",
      time:" Eventer Careers: Top 4 tips to get your foot in the door",
      address:"Quaerat neque purus ipsum neque dolor primis libero tempus impedit tempor blandit sapien at gravida...",
      rating:"MORE DETAILS"
    },
  ]
export default function Blog(){
    let a=6,b=4
    console.log(a+b)
    return(
        <>
 <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
 <Grid xs={12} marginTop="80px">
 <Typography variant="h4" >
     Blog
       </Typography>
    </Grid>
    </Grid>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3,p:2 }}>
    <Grid xs={0.5}></Grid >

   <Grid xs={8} >
   

    
     {
                home.map((home)=>{
                    return <BlogCard image={home.image} day={home.day} time={home.time} time1={home.time1} address={home.address} address2={home.address2}rating={home.rating} />
                })
            }
            
        
            </Grid>
            <Grid xs={3} marginTop="100px">
            <Tabs/>
            </Grid>
            <Grid xs={0.5}></Grid >
            </Grid>
           

        </>
    )
}