import BasicCard from "../../components/BasicCard";
import {Grid } from "@mui/material";
const about=[
    {
        image:"https://img.staticmb.com/mbcontent/images/uploads/2022/10/Diwali-2022-decorate-house.jpg",
        title:" India's Biggest festival Diwali (festival of Lights)",
        day:"26 may 2023",
        time:"10am-11am",
        address:"Sydney",
        
    }, 
    {
        image:"https://cdn.zeebiz.com/hindi/sites/default/files/styles/zeebiz_850x478/public/2023/04/27/135090-mothers-day-source-freepik.png",
        title:"Mother's Day ",
        day:"27 may 2023",
        time:"  11am-4pm",
        address:"Lalor Park Community Centre, 1 Freeman St, Lalor Park NSW",
        
    }, 
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeW6-_GT_v_wbBT-6Q3M2sYKCqFMJc2WBL1rQ3VO7zqA&usqp=CAU&ec=48665701",
        title:"Accessibility",
        day:" 25 may 2023",
        time:"7am-12pm ",
        address:"Opera House, Bennelong Point, Sydney NSW 2000, Australia",
        
    }, 
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
export default function Events(){
    return(
        <>
        <Grid container spacing={0} marginTop="50px"> 
            {
                about.map((about)=>{
                    return <BasicCard image={about.image} title={about.title} day={about.day} time={about.time}  address={about.address} rating={about.rating} />
                })
            }     
        
        </Grid> 
        </>
    )
}