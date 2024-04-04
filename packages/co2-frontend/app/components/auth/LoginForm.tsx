import React, {useState} from 'react';
import {Button, Grid, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import {FetchResult, useMutation} from '@apollo/client';
import {SuccessResponse} from '@/src/__generated__/graphql';
import {setToken, setUser} from '@/lib/features/auth/authSlice';
import {useAppDispatch} from '@/lib/hooks';
import {useRouter} from 'next/navigation';
import {CREATEUSER, SIGNINUSER} from '@/src/mutations';


const LoginForm = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const [signIn, { loading, error, data }] = useMutation(SIGNINUSER);
    const [signUp, { loading: signUpLoading, error: signUpError, data: signUpData }] = useMutation(CREATEUSER);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const resetForm = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            if(isLogin){
                const signInInput = {
                    email,
                    password
                };
                const response: FetchResult<SuccessResponse> = await signIn({
                    variables: { signInInput },
                });
                // @ts-ignore
                const token = response.data?.signIn?.token;
                dispatch(setToken(token));
                // @ts-ignore
                const user = response.data?.signIn?.user
                dispatch(setUser(user));
                resetForm();
                router.push('/home');
            }else{
                const userInput = {
                    firstName,
                    lastName,
                    email,
                    password
                };
                await signUp({
                    variables: { userInput },
                });
                resetForm();
                setIsLogin(!isLogin);
                router.refresh();
            }
        } catch (error) {
            // @ts-ignore
            console.error('An error occurred:', error.message);
        }
    };
    const handleUserAction = () => {
        setIsLogin(!isLogin);
    }

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
                    </Box>
                </Grid>
                <Grid item xs={8}>
                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center"
                         sx={{height: '100vh'}}>
                        <Typography variant="h5" component="h1">
                            {isLogin ? 'Login' : 'Signup'}
                        </Typography>
                        <TextField
                            label="Firstname"
                            variant="outlined"
                            name="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            margin="normal"
                            required={!isLogin}
                            sx={{width: 0.5, display: isLogin ? 'none': 'flex'}}
                        />
                        <TextField
                            label="Lastname"
                            variant="outlined"
                            name="lastName"
                            value={lastName}
                            required={!isLogin}
                            onChange={(e) => setLastName(e.target.value)}
                            margin="normal"
                            sx={{width: 0.5, display: isLogin ? 'none': 'flex'}}
                        />
                        <TextField
                            id="email"
                            label="Email"
                            variant="outlined"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            margin="normal"
                            required
                            sx={{width: 0.5}}
                        />
                        <TextField
                            id="password"
                            label="Password"
                            variant="outlined"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            margin="normal"
                            placeholder="Enter password"
                            required
                            sx={{width: 0.5}}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            size="large"
                            sx={{width: 0.3}}
                        >
                            {isLogin?'LOGIN':'SIGNUP'}
                        </Button>

                        <Button variant='text' onClick={handleUserAction}>
                            {isLogin?'New User? SignUp':'Have an account? Login'}
                        </Button>
                        {/*<Box*/}
                        {/*    aria-live="polite"*/}
                        {/*    aria-atomic="true"*/}
                        {/*    sx={{ mt: 2 }}*/}
                        {/*    display={'flex'}*/}
                        {/*>*/}
                        {/*    {errorMessage && (*/}
                        {/*        <>*/}
                        {/*            <ErrorOutlineIcon className="h-5 w-5"/>*/}
                        {/*            <Typography variant={'subtitle1'}>*/}
                        {/*                {'errorMessage'}*/}
                        {/*            </Typography>*/}
                        {/*        </>*/}
                        {/*    )}*/}
                        {/*</Box>*/}
                        {/*<Counter/>*/}
                    </Box>
                </Grid>
            </Grid>
        </form>
    );
};

export default LoginForm;
