import { Button, TextField, Typography, Alert } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import {  HowToReg } from '@mui/icons-material';
import { Link  } from 'react-router-dom';
import { useForm } from './useForm';



const formData= {
  email: '',
  password: '',
  displayName: ''
}


export const RegisterPage = () => {



  const { displayName, email, password } = useForm( formData );



  return (
    <>
        <Grid  container
        
        // direction="column"
           justifyContent='center' 
           alignItems='center'
           sx={ {minHeight: '100vh', backgroundColor: 'primary.light'}}>


    <Grid className='box-shadow' sx={ {backgroundColor:'white',  borderRadius:3, padding:2}}  xs={8} sm={4} md={3} lg={2}>
    <Grid container sx={ {padding:2}}justifyContent='center' className='animate__animated animate__fadeIn animate__fast' >

      
      <Grid container  direction="column" alignItems='center' >
        <HowToReg sx={ {  color:'primary.dark' }} fontSize='large'/>
        <Typography variant='h5' sx={ {m:1, fontWeight: 500, color:'primary.dark' }} >Registro</Typography>
      </Grid>
      
      

      <form  >
        <Grid  xs={12}>
          <TextField 
          label='Nombre' 
          type='text' 
          placeholder='Tu nombre' 
          fullWidth  
          name='displayName' 
          sx={ {mt:1, backgroundColor:'primary.light' }} 
          value={ displayName} 
          
          />

        </Grid>
        <Grid  xs={12}>
          <TextField 
          label='Correo' 
          type='email' 
          placeholder='email' 
          name='email' 
          fullWidth 
          value={ email }
          sx={ {mt:1, backgroundColor:'primary.light' }} 
/>

        </Grid>
        <Grid>
          <TextField 
                  label='Contraseña' 
                  type='password' 
                  placeholder='Contraseña' 
                  name='password' 
                  fullWidth 
                  sx={ {mt:1, backgroundColor:'primary.light'}} 
                  value={ password}
                  />

        </Grid>

        <Grid container sx={ {mb:2, mt:1}} spacing={1}>


        <Grid  xs={12} >
          <Button 
            variant="contained" 
            sx={ {backgroundColor: 'primary.main', padding:1}} 
            type='submit' 
            fullWidth 
            
            >Crear cuenta</Button>
        </Grid>


        </Grid>

        <Grid container direction='row' justifyContent='end'>
          <Typography  sx={ {mr:1, fontSize:13}} >Ya tienes cuenta?</Typography>
          <Link component={ Link } color='inherit' to="/login"> Ingresar</Link>
        </Grid>

      </form>
    
    
    
    
    </Grid>
    </Grid>

   
  
</Grid>
    </>
  )
}
