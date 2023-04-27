import Grid from '@mui/material/Grid';
import BasicCard from '../../components/BasicCard';
export default function Albums(){
    return(
        <>
    
        
        <Grid xs={12} sx={{backgroundColor:"#e91e63"}}>
          Pink
          <Grid container spacing={0}>
          <BasicCard/>
          <BasicCard/>
          <BasicCard/>
        </Grid>
        <Grid xs={12} sx={{backgroundColor:"lightgreen"}}>
          green
          <Grid container spacing={0}>
          <BasicCard/>
          <BasicCard/>
          
        </Grid>
        </Grid>
        <Grid  xs={12} sx={{backgroundColor:"#42a5f5"}}>
          Blue
          <Grid container spacing={0}>
          <BasicCard/>
          <BasicCard/>
          <BasicCard/>
        </Grid>
        </Grid>
        
        <Grid xs={12}sx={{backgroundColor:"yellow"}}>
          yellow
          <Grid container spacing={0}>
          <BasicCard/>
          <BasicCard/>
          
        </Grid>
        </Grid>
       
      </Grid>
        </>
    )
}