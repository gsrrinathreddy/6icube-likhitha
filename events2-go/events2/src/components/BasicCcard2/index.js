import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
export default function BasicCcard2(props) {
  return (
    
    <Card  sx={{margin:"30px"}}>
      
     <CardContent>

        <Typography gutterBottom variant="h11" component="div">
          
         {props.day}
        </Typography>
        <Typography gutterBottom variant="h11" component="div">
          
         {props.time}
        </Typography>
        <Typography gutterBottom variant="h11" component="div">
        <CardMedia
        sx={{ height: 300,width:300 }}
        image={props.image}
      />
         
        </Typography>
        <Typography gutterBottom variant="h7" component="div">
         
        {props.address}
        </Typography>
        <Typography gutterBottom  variant="h8" component="div" >
        <Button variant="contained"  color="success" sx={{backgroundColor:"magenta"}}>
         {props.rating}
         </Button>
        </Typography>
        

      </CardContent>
      
    </Card>
  );
}