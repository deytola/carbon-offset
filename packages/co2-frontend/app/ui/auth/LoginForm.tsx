import React, {useState} from 'react';
import {Button, Grid, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Counter} from "@/app/components/counter/Counter";


const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
        setUsername('');
        setPassword('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container={true} columns={12}>
                <Grid item xs={4}>
                    <Box display="flex" gap="1rem" flexDirection="column" alignItems="center" justifyContent="center" sx={{ p:'1rem', height: '100vh', bgcolor: (theme)=>theme.palette.primary.light}}>
                        <Typography variant="h4" component="h1" textAlign="center" color="primary.dark" fontWeight="bold">
                            Welcome!
                        </Typography>
                        <Typography variant="h6" component="h1" textAlign="center" color="primary.dark" fontWeight="light">
                            To keep you connected, please login with your personal details
                        </Typography>
                        <Button
                            type="submit"
                            variant="outlined"
                            size="large"
                            sx={{width: 0.3, color: (theme)=>theme.palette.primary.dark}}
                        >
                            SIGN IN
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={8}>
                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" sx={{ height: '100vh'}}>
                        <Typography variant="h5" component="h1">
                            Login
                        </Typography>
                        <TextField
                            label="Username"
                            variant="outlined"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            margin="normal"
                            sx={{width: 0.5}}
                        />
                        <TextField
                            label="Email"
                            variant="outlined"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            margin="normal"
                            sx={{width: 0.5}}
                        />
                        <TextField
                            label="Password"
                            variant="outlined"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            margin="normal"
                            sx={{width: 0.5}}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            size="large"
                            sx={{width: 0.3}}
                        >
                            SIGN UP
                        </Button>
                        <Counter/>
                    </Box>
                </Grid>
            </Grid>
        </form>
    );
};

export default LoginForm;
