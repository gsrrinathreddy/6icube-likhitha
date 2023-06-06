import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BasicCard3(props) {
  return (
    <Card sx={{ maxWidth:500,backgroundColor:"#f5f5f5" }}>
      
      <CardContent>
     
  
        <Typography  variant="h6" textAlign="justify" >
          {props.title}
        </Typography>
       
        
        <Typography variant="subtitle2" textAlign="justify" >
         {props.data}
        </Typography>
        <Typography variant="subtitle2" textAlign="justify" >
         {props.data1}
        </Typography>
        <Typography variant="subtitle2" textAlign="justify">
         {props.data2}
        </Typography>
        <Typography variant="subtitle2" textAlign="justify">
         {props.data3}
        </Typography>
        <Typography variant="subtitle2"  textAlign="justify">
         {props.data4}
        </Typography>
        <CardMedia
        sx={{ height: 30 }}
      
      />
      </CardContent>
     
    </Card>
  );
}