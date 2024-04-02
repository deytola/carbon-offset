"use client";
import React, {useState} from 'react';
import Typography from '@mui/material/Typography';
import {FormControl, InputLabel, MenuItem, Select, Stack} from "@mui/material";
import Header from "@/app/ui/header";
import Box from "@mui/material/Box";
import VehicleCard from "@/app/ui/vehiclecard";
import NewVehicleBtn from "@/app/ui/new-vehicle-btn";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import {useRouter} from "next/navigation";
import ImageUpload from "@/app/ui/image-upload";
import { useQuery, gql } from "@apollo/client";
import {Vehicle} from "@/src/__generated__/graphql";
import QueryResult from '@/app/ui/query-result';



/** ORDERS gql query to retrieve all orders ranking */
const LEADERBOARD = gql`
    query Leaderboard{
        leaderboard{
            id
            make{
                name
            }
            model{
                modelName
            }
            totalTrees
        }
    }
`;

/** MAKES gql query to retrieve all vehicle makes */
const MAKES = gql`
    query GetMakes {
        makes{
            id
            name
            originCountry
        }
    }
`;
function Page() {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const { loading, error, data } = useQuery(LEADERBOARD);

    const carMakes = ['Toyota', 'Honda', 'Ford', 'Chevrolet'];
    const carModels = {
        Toyota: ['Corolla', 'Camry', 'RAV4'],
        Honda: ['Civic', 'Accord', 'CR-V'],
        Ford: ['F-150', 'Escape', 'Focus'],
        Chevrolet: ['Silverado', 'Equinox', 'Malibu']
    };
    const fuelTypes = ['Gasoline', 'Diesel', 'Electric'];

    const [formData, setFormData] = useState({
        year: '',
        make: '',
        model: '',
        mileage: '',
        fuelType: '',
        milesPerGallon: '',
        mttRatio: 0
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        router.push('/home');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };
    const router = useRouter();


    return (
        <>
            <Box
                width={1}
                height="100vh"
                sx={{
                    backgroundImage: 'url("/oleksandr.jpg")',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}
            >
                <Stack spacing={1} alignItems="center" padding={'2rem'}>
                    <Box sx={{width: 1, maxWidth: 'sm'}}>
                        <Header/>
                        <Typography
                            variant="h1"
                            component="div"
                            textAlign="center"
                        >
                            🏆
                        </Typography>
                    </Box>
                    <QueryResult error={error} loading={loading} data={data}>
                        {data?.leaderboard?.map((vehicle: Vehicle, index: number) => (
                            <VehicleCard key={vehicle.id}
                                         isFirst={index===0}
                                         image={'/gogreen.png'}
                                         noOfTrees={vehicle.totalTrees}
                                         make={vehicle.make?.name}
                                         model={vehicle.model?.modelName}
                            />
                        ))}
                    </QueryResult>
                </Stack>
                <NewVehicleBtn handleClick={handleClickOpen}/>
            </Box>
            <>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        component: 'form',
                        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                            event.preventDefault();
                            const formData = new FormData(event.currentTarget);
                            const formJson = Object.fromEntries((formData as any).entries());
                            const email = formJson.email;
                            console.log(email);
                            handleClose();
                        },
                    }}
                >
                    <DialogTitle>
                        <Typography variant="h4" sx={{color: 'primary.dark'}}>Buy Trees</Typography>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To offset your carbon footprint, please provide your vehicle information. We
                            will compute the estimated number of trees required.
                        </DialogContentText>
                        <Box
                            sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    label="Year"
                                    name="year"
                                    value={formData.year}
                                    onChange={handleChange}
                                    fullWidth
                                    margin="normal"
                                />
                                <FormControl fullWidth margin="normal">
                                    <InputLabel>Make</InputLabel>
                                    <Select
                                        value={formData.make}
                                        onChange={handleChange}
                                        name="make"
                                    >
                                        {carMakes.map((make, index) => (
                                            <MenuItem key={index} value={make}>{make}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <FormControl fullWidth margin="normal">
                                    <InputLabel>Model</InputLabel>
                                    <Select
                                        value={formData.model}
                                        onChange={handleChange}
                                        name="model"
                                    >
                                        {formData.make && carModels[formData.make].map((model, index) => (
                                            <MenuItem key={index} value={model}>{model}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <TextField
                                    label="Mileage"
                                    name="mileage"
                                    value={formData.mileage}
                                    onChange={handleChange}
                                    fullWidth
                                    margin="normal"
                                />
                                <FormControl fullWidth margin="normal">
                                    <InputLabel>Fuel Type</InputLabel>
                                    <Select
                                        value={formData.fuelType}
                                        onChange={handleChange}
                                        name="fuelType"
                                    >
                                        {fuelTypes.map((type, index) => (
                                            <MenuItem key={index} value={type}>{type}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <TextField
                                    label="Miles Per Gallon"
                                    name="milesPerGallon"
                                    value={formData.milesPerGallon}
                                    onChange={handleChange}
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    label="MTT Ratio"
                                    name="mttRatio"
                                    value={formData.mttRatio}
                                    onChange={handleChange}
                                    fullWidth
                                    type="number"
                                    InputProps={{ inputProps: { min: 0 } }}
                                    margin="normal"
                                />
                                <Box sx={{mt: 2, mb: 2}}>
                                    <ImageUpload/>
                                </Box>
                            </form>
                            <DialogActions>
                                <Button variant="contained" color="error" sx={{mr: 1}} onClick={handleClose}>Cancel</Button>
                                <Button variant="contained" type="submit">Buy</Button>
                            </DialogActions>
                        </Box>
                    </DialogContent>

                </Dialog>
            </>
        </>
    );
}

export default Page;
