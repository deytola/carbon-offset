"use client";

import { useState } from 'react';
import { TextField, Button, MenuItem, FormControl, InputLabel, Select } from '@mui/material';
import Box from "@mui/material/Box";
import ImageUpload from "@/app/ui/image-upload";
import Typography from "@mui/material/Typography";
import {useRouter} from "next/navigation";

const carMakes = ['Toyota', 'Honda', 'Ford', 'Chevrolet'];
const carModels = {
    Toyota: ['Corolla', 'Camry', 'RAV4'],
    Honda: ['Civic', 'Accord', 'CR-V'],
    Ford: ['F-150', 'Escape', 'Focus'],
    Chevrolet: ['Silverado', 'Equinox', 'Malibu']
};
const fuelTypes = ['Gasoline', 'Diesel', 'Electric'];

export default function Page() {
    const [formData, setFormData] = useState({
        year: '',
        make: '',
        model: '',
        mileage: '',
        fuelType: '',
        milesPerGallon: ''
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
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <Typography variant="h4" sx={{color: 'primary.dark'}}>New Vehicle</Typography>
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
                <Box sx={{mt: 2, mb: 2}}>
                    <ImageUpload/>
                </Box>
                <Button variant="contained" color="error" sx={{mr: 1}} onClick={handleCancel}>
                    Cancel
                </Button>
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        </Box>
    );
}
