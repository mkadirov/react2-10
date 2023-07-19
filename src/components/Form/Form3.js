import { Box, Button, Card, Checkbox, Container, FormControl, FormControlLabel,
     FormLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, 
     Select, TextField, Typography } from '@mui/material'
import { grey } from '@mui/material/colors';
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';

function Form3() {
 const {register, handleSubmit, reset, formState: {errors}} = useForm();

 const {users, setUsers} = useContext(UserContext);

    function onSubmit(data){
        
        const tempUsers = [...users];
        tempUsers.push(data);
        setUsers(tempUsers);

        reset();
    }
  return (
    <Container>
        <Grid container justifyContent='center' marginY={8}>
            <Grid item xs={12} md={6}>
                
                <Card sx={{padding: 2, backgroundColor: grey[300]}} >
                    <Box component='form' onSubmit={handleSubmit(onSubmit)}>
                        <Typography variant='h5'>
                            Form (5-vazifa)
                        </Typography>
                    <TextField {...register('firstName', {required: 'Ismingizni kriting',
                         minLength: { value: 2, message: 'Kritilgan matn juda qisqa' },
                         maxLength: { value: 30, message: 'Kritilgan matn juda uzun' }})}
                    error={errors.firstName}
                    helperText= {errors.firstName?.message}
                    id="standard-basic" 
                    label="First Name" 
                    variant="standard"
                    fullWidth
                    sx={{my: 2}} />

                    <TextField {...register('lastName', {required: 'Familiyangizni kriting',
                         minLength: { value: 2, message: 'Kritilgan matn juda qisqa' },
                         maxLength: { value: 30, message: 'Kritilgan matn juda uzun' }})}
                    error={errors.lastName}
                    helperText= {errors.lastName?.message}
                    id="standard-basic" 
                    label="Last Name" 
                    variant="standard" 
                    fullWidth 
                    sx={{my: 2}} />

                    <TextField {...register('email')}
                    id="standard-basic" 
                    label="Email" 
                    variant="standard" 
                    fullWidth
                    type='email' 
                    sx={{my: 2}} />

                    <FormControl sx={{marginY: 2}}>
                      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel value="female" control={<Radio {...register('gender')} />} label="Female" />
                        <FormControlLabel value="male" control={<Radio {...register('gender')} />} label="Male" />
                        
                      </RadioGroup>
                    </FormControl>

                    <FormControl variant="standard" fullWidth sx={{my: 2}} >
                       <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
                       <Select
                         {...register('age')}
                         labelId="demo-simple-select-standard-label"
                         id="demo-simple-select-standard"
                         
                         label="Age"
                       >
                         <MenuItem value="">
                           <em>None</em>
                         </MenuItem>
                         <MenuItem value={10}>Ten</MenuItem>
                         <MenuItem value={20}>Twenty</MenuItem>
                         <MenuItem value={30}>Thirty</MenuItem>
                       </Select>
                    </FormControl>

                    <FormControlLabel control={<Checkbox {...register('employed')} />} label="Employed" />

                    <TextField {...register('note')}
                    id="standard-basic" 
                    label="Note" 
                    variant="standard" 
                    fullWidth 
                    sx={{my: 2}} />

                    <Box sx={{display:'flex', justifyContent: 'center', gap: 2}}>
                        <Button variant='contained' type='submit' > Submit</Button>
                        <Button variant='outlined' onClick={()=> reset()}> Reset</Button>
                    </Box>
                    </Box>
                </Card>


                    
                
            </Grid>
        </Grid>
    </Container>
  )
}

export default Form3