import { Grid,Typography ,Button} from "@mui/material"
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useNavigate } from 'react-router-dom';

export default function Registration (){
  const navigate = useNavigate();
  const onSignup = (e) => {
      e.preventDefault();
      navigate('/Signup')
  };
    return(
        <>
         <Card variant="outlined" marginTop="140px" sx={{backgroundColor:"#eeeeee"}}>
    <CardContent>
   
   
    <Grid container rowSpacing={1}  marginTop="100px">
    <Grid xs={12} marginRight="100px">
            
            <Button variant="contained"  color="success" onClick={onSignup} sx={{backgroundColor:"magenta",marginRight:"20px"}} >
                Individual Registration
                </Button>
                
                <Button variant="contained"   color="success" sx={{backgroundColor:"magenta"}} >
                organisation Registration
                </Button>
            </Grid>
        <Grid xs={1.5}></Grid>
 <Grid xs={8} marginTop="30px">
 
 <TextField fullWidth label=" First Name" id="fullWidth" sx={{marginTop:"30px"}} />
 
 <TextField fullWidth label="Last Name" id="fullWidth" sx={{marginTop:"10px"}} />
 
 <TextField fullWidth label="Organization Name" id="fullWidth" sx={{marginTop:"10px"}} />
 <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="charity" control={<Radio />} label="Charity" />
        <FormControlLabel value="govern" control={<Radio />} label="Government" />
        <FormControlLabel value="other" control={<Radio />} label="Corporate" />
        <FormControlLabel value="others" control={<Radio />} label="Private" />
        
      </RadioGroup>
 
 <TextField fullWidth label="ABN" id="fullWidth" sx={{marginTop:"10px"}}/>
 
 <TextField fullWidth label="ACN" id="fullWidth" sx={{marginTop:"10px"}} />
 
 <TextField fullWidth label="Address" id="fullWidth" sx={{marginTop:"10px"}}/>
 
 <TextField fullWidth label="Mobile" id="fullWidth" sx={{marginTop:"10px"}} />
 
 <TextField fullWidth label="Url link to website" id="fullWidth"  sx={{marginTop:"10px"}}/>
 
 <TextField fullWidth label=" email(User Name)" id="fullWidth" sx={{marginTop:"10px"}}/>
 
 <TextField fullWidth label=" Password" id="fullWidth"  sx={{marginTop:"10px"}}/>
 
 <Button variant="contained"  color="success" sx={{backgroundColor:"magenta",marginTop:"30px"}} >
          SIGNUP
        </Button>
  
     
 </Grid>
 </Grid>

    </CardContent>
    </Card>
        </>
    )
}