import { Box, Button, Card, Checkbox, Container, FormControl, 
    FormControlLabel, FormHelperText, FormLabel, Grid, InputLabel, NativeSelect, 
    Radio, RadioGroup, Slider, Stack, TextField, Typography } from '@mui/material'

import React, { useContext, useState } from 'react'
import { UserContext } from '../../App';
import { grey } from '@mui/material/colors';


function FormUseState() {
  
  const {users2, setUsers2} = useContext(UserContext);

  const [fullName, setFullName] = useState('');
  const [gender, setGender] = useState('erkak');
  const [age, setAge] = useState('');
  const [experience, setExperience] = useState(0);
  const [date, setDate] = useState('');
  const [dataSave, setDataSave] = useState(false);
  const [subscribe, setSubscribe] = useState(false);

  const [fullNameError, setFullNameError] = useState(false);
  
  const [dateError, setDateError] = useState(false);
  
  

    function onSubmit(e){
      e.preventDefault();
        
      if(fullName.trim().length <5 || fullName.trim().length >30) {
        setFullNameError(true)
        return;
      } else {
        setFullNameError(false);
      }

      if(date === ''){
        setDateError(true);
        return
      }else {
        setDateError(false);
      }

      const data = {
        fullName: fullName,
        gender: gender,
        age: age,
        experience: experience,
        date: date,
        dataSave: dataSave,
        subscribe: subscribe
      }

      const temp = [...users2];
      temp.push(data);
      setUsers2(temp);

      reset();

    }

    function reset() {
      setFullName('');
      setGender('erkak');
      setAge('');
      setExperience(0);
      setDate('');
      setSubscribe(false);
      setDataSave(false);
    }
  return (
    <Container>
      <Grid container justifyContent='center'>
        <Grid item sx={12} md={6}>
        <Box >
      <Card sx={{padding: 2, backgroundColor: grey[300]}}>
        <Box component='form' onSubmit={onSubmit}>
                        <Typography variant='h5'>
                            Form (useState 1-2 vazifa)
                        </Typography>

                        <TextField 
                        value={fullName}
                        onChange={(e)=> setFullName(e.target.value)}
                        sx={{mt: 2}}
                        id="outlined-basic" 
                        label="Ism va familiya" 
                        variant="outlined"
                        required
                        error= {fullNameError}
                        helperText = {fullNameError? 'Berilgan malumotda 5-30 dona harflar bölishi kerak': ''}
                        fullWidth />


                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="gender"
                                defaultValue='erkak'
                              >
                                <FormControlLabel value="ayol" onClick={()=> setGender('ayol')} control={<Radio/>} label="Female" />
                                <FormControlLabel value="erkak" onClick={()=> setGender('erkak')} control={<Radio/>} label="Male" />
                                
                            </RadioGroup>
                            
                        </FormControl>

                        <Box marginY={2}>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                          Yoshingiz
                        </InputLabel>

                        <NativeSelect
                          value={age}
                          onChange={(e)=> setAge(e.target.value)}
                          sx={{width: '50%'}}
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
                          <Slider
                            value={experience}
                            onChange={(e)=> setExperience(e.target.value)}
                            aria-label="Temperature"
                            
                            required
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

                        <TextField
                        value={date}
                        onChange={(e)=> setDate(e.target.value)} 
                        error = {dateError}
                        helperText={dateError? 'Boshlanish sanasini tanlang':''}
                        sx={{mt: 2}}
                        id="outlined-basic" 
                        variant="outlined"
                        type='date'
                        fullWidth />
                          
                        <Box >
                          <FormControlLabel   control={<Checkbox checked= {dataSave} onClick={()=> setDataSave((prev)=> prev? false: true)}  />} label="Shaxsga oid ma'lumotlar haqidagi qoidalar bilan tanishdim" />
                          <FormControlLabel  control={<Checkbox checked= {subscribe} onClick={()=> setSubscribe((prev)=> prev? false: true)} />} label="Ma'lumotlar email orqali yetkazilishiga roziman" />
                        </Box>

                        <Button variant='contained' type='submit' sx={{my:2}} fullWidth>
                            Submit
                        </Button>
                        <Button variant='outlined' fullWidth onClick={()=>reset()}>
                            reset
                        </Button>
                    </Box>
      </Card>
      </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default FormUseState