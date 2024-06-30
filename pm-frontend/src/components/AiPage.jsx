import React from 'react';
import { Input, Box, Text, Typography, RadioGroup, FormControlLabel, TextField, Radio, MenuItem, InputAdornment, Alert, Button } from '@mui/material';


function AiPage() {
    const [showError, setShowError] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState('');
    const [budget, setBudget] = React.useState('');
    const [activityType, setActivityType] = React.useState('');
    const [numPeople, setNumPeople] = React.useState('');
    
    const submitForm = async () => {
        console.log(!isNaN(8));
        console.log(numPeople);
        console.log(!isNaN(numPeople))
        if (isNaN(numPeople)) {
            setErrorMessage("Error: Number of people must be a number");
            setShowError(true);
            return;
        } else if (isNaN(budget)) {
            setErrorMessage("Error: budget must be numerical number")
            setShowError(true);
            return;
        }
        const response = await fetch('http://localhost:8080/gemini/req', {
        method: 'POST',
        body: JSON.stringify({
            activityType, budget, numPeople
        }),
        headers: {
          'Content-type': 'application/json',
        }
        });
        const data = await response.json();
        if (data.error) {
            setErrorMessage(data.error);
            setShowError(true);
        }
        console.log(data);
    }
    
    return (
    <>
        <Box
            display={'flex'} 
            justifyContent={'center'}
            alignItems={'center'}
            height={'100vh'}
            width={'100vw'}
        >
            <Box>
                <Box 
                    display={'flex'}
                    alignItems={'center'}
                    width={'100vw'}
                    paddingY={'5vh'}
                >
                    <Typography paddingRight={'50px'} width={'25vw'} minWidth={'25vw'}>What would you like to plan?</Typography> 
                    <TextField 
                        onChange={e => setActivityType(e.target.value)}
                    />
                </Box>
                
                <Box 
                    display={'flex'} 
                    alignItems={'center'}
                    bgcolor={'lightgrey'}
                    width={'100vw'}
                    paddingY={'5vh'}
                >
                    <Typography paddingRight={'50px'} width={'25vw'} minWidth={'25vw'}>What is your budget?</Typography>
                    <RadioGroup>
                        <FormControlLabel value={"per person"} control={<Radio/>} label="Per Person" />
                        <FormControlLabel value={"overall"} control={<Radio/>} label="Overall"/>
                    </RadioGroup>
                    <TextField 
                        onChange={e => setBudget(e.target.value)}
                        InputProps={{ startAdornment : <InputAdornment position="start">$</InputAdornment>, }}
                        helperText="Budget in Australian Dollars"
                    />
                </Box> 
                <Box 
                    display={'flex'} 
                    alignItems={'center'}
                    width={'100vw'}
                    paddingY={'5vh'}
                >
                    <Typography paddingRight={'50px'} width={'25vw'} minWidth={'25vw'}>How many people</Typography>
                    <TextField 
                        onChange={e => setNumPeople(e.target.value)}
                    />
                    
                </Box> 
                {showError && (
                    <Alert severity="error" onClose={() => { setShowError(false) }}>{errorMessage}</Alert>
                )}
                <Button onClick={() => submitForm()}>Submit</Button>
            </Box>
        </Box>
    </>
  );
}

export default AiPage;