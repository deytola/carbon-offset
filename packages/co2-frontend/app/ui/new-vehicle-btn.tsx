"use client";

import React from 'react';
import {Fab} from "@mui/material";
import {useRouter} from "next/navigation";
import AddIcon from '@mui/icons-material/Add';

function NewVehicleBtn() {
    const router = useRouter();
    const handleAddClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        router.push('/vehicle/create');
    }
    return (
        <>
            <Fab onClick={handleAddClick} sx={{ position: 'fixed', bottom: 16, right: 16 }} color="primary">
                <AddIcon />
            </Fab>
        </>
    );
}

export default NewVehicleBtn;