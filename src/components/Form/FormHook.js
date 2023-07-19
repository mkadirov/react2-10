import { Box, Button, Card, Checkbox, Container, FormControl, 
    FormControlLabel, FormHelperText, FormLabel, Grid, InputLabel, NativeSelect, 
    Radio, RadioGroup, Slider, TextField, Typography } from '@mui/material'
import { grey } from '@mui/material/colors';

import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { UserContext } from '../../App';

function FormHook() {

    const {register, handleSubmit, reset, formState: {errors}} = useForm();

    const {users2, setUsers2} = useContext(UserContext);

    function onSubmit(data){
        const temp = [...users2];
        temp.push(data);
        setUsers2(temp);
        reset();
    }
  return (
    <Container>
        <Grid container justifyContent='center' sx={{paddingTop: 10}}>
            <Grid item xs={12} md={6} lg={6}>
                <Card Card sx={{padding: 2, backgroundColor: grey[300]}} >
                    <Box component='form' onSubmit={handleSubmit(onSubmit)} >
                        <Typography variant='h5'>
                            Form (useForm 3-4 vazifa)
                        </Typography>

                        <TextField {...register('fullName', {required: 'Ism va familiyangizni kriting',
                         minLength: { value: 5, message: 'Ism va familiyangizni töliq kriting' },
                         maxLength: { value: 30, message: 'Kritilgan matn juda uzun' }})}
                        sx={{mt: 2}}
                        id="outlined-basic" 
                        label="Ism va familiya" 
                        variant="outlined"
                        error={errors.fullName}
                        helperText = {errors.fullName?.message}
                        fullWidth />


                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                
                                name="gender"
                              >
                                <FormControlLabel value="ayol"  control={<Radio {...register('gender')} />} label="Ayol" />
                                <FormControlLabel value="erkak"  control={<Radio {...register('gender')} />} label="Erkak" />
                                
                            </RadioGroup>
                            
                        </FormControl>

                        <Box marginY={2}>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                          Yoshingiz
                        </InputLabel>

                        <NativeSelect
                          {...register('age', {required: true})}
                          sx={{width: '50%'}}
                          defaultValue={30}
                          inputProps={{
                            name: 'age',
                            id: 'uncontrolled-native',
                          }}
                        >
                          <option value={'18-25'}>18-25</option>
                          <option value={'26-30'}>26-30</option>
                          <option value={'30-35'}>30-35</option>
                          <option value={'36-45'}>36-45</option>
                          <option value={'46-55'}>46-55</option>
                          <option value={'56-65'}>56-65</option>
                        </NativeSelect>
                        </Box>

                        <Box width={300} marginY={2}>
                          <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Necha yillik ish tajribasiga egasiz?
                          </InputLabel>
                          <Slider {...register('experience')}
                            aria-label="Temperature"
                            defaultValue={0}
                            valueLabelDisplay="auto"
                            step={1}
                            marks
                            min={0}
                            max={10}
                          />                    
                        </Box>

                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Qaysi sanadan ish boshlay olasiz?
                          </InputLabel>

                        <TextField {...register('date', {required: 'Ish boshlash sanasini kriting'})}
                        sx={{mt: 2}}
                        id="outlined-basic" 
                        error={errors.date}
                        helperText={errors.date?.message}
                        variant="outlined"
                        type='date'
                        fullWidth />
                          
                        <Box>
                          <FormControlLabel  control={<Checkbox {...register('dataSave')}  />} label="Shaxsga oid ma'lumotlar haqidagi qoidalar bilan tanishdim" />
                          <FormControlLabel  control={<Checkbox {...register('subscribe')} />} label="Ma'lumotlar email orqali yetkazilishiga roziman" />
                        </Box>

                        <Button variant='contained' type='submit' sx={{my:2}} fullWidth>
                            Submit
                        </Button>
                        <Button variant='outlined'  fullWidth onClick={()=>reset()}>
                            reset
                        </Button>
                    </Box>
                </Card>
            </Grid>
        </Grid>
    </Container>
  )
}

export default FormHook