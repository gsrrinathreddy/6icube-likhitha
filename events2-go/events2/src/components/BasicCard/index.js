import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';



export default function BasicCard(props) {
    const image=props.image
  return (
    <Card sx={{ maxWidth: 350,margin:"30px",backgroundColor:"#fafafa" }}>
      <CardMedia
        sx={{ height: 130}}
        image={props.image}
    
      />
      <CardContent>
        
        <Typography variant="h6" component="div" textAlign="center" >
        
          {props.title} 
        </Typography>
        <CardActions >
        <Typography  variant="h11" component="div">
          <CalendarTodayIcon/>
         {props.day}
        </Typography>
        </CardActions>
        <CardActions>
        <Typography  variant="h11" component="div">
          <AccessTimeIcon/>
         {props.time}
        </Typography>
        </CardActions>
        <CardActions>
        <Typography variant="h7"  textAlign="justify" component="div">
          <AddLocationAltIcon/>
        {props.address}
        </Typography>
        </CardActions>
        

      </CardContent>
      
    </Card>
  );
}