"use client";

import { useState } from 'react';
import { TextField, Button} from '@mui/material';
import Box from "@mui/material/Box";


export default function Page() {
    const [formData, setFormData] = useState({
        make: '',
        model: '',
        mttRatio: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Make"
                    name="make"
                    value={formData.make}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Model"
                    name="model"
                    value={formData.model}
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
                    margin="normal"
                    inputProps={{
                        type: 'number',
                        inputMode: 'numeric',
                        pattern: '[0-9]*',
                    }}
                />
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        </Box>
    );
}
