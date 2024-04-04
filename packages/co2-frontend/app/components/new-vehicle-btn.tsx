"use client";

import React from 'react';
import {Fab} from "@mui/material";
import {useRouter} from "next/navigation";
import AddIcon from '@mui/icons-material/Add';

function NewVehicleBtn({handleClick}: any) {
    const router = useRouter();
    return (
        <>
            <Fab onClick={handleClick} sx={{ position: 'fixed', bottom: 16, right: 16 }} color="primary">
                <AddIcon />
            </Fab>
        </>
    );
}

export default NewVehicleBtn;