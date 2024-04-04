"use client";

import React from 'react';
import {Fab} from "@mui/material";
import {useRouter} from "next/navigation";
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';

function LogoutBtn({handleClick}: any) {
    return (
        <>
            <Fab onClick={handleClick} sx={{ position: 'fixed', bottom: 16, left: 16 }} color="error">
                <PowerSettingsNewOutlinedIcon />
            </Fab>
        </>
    );
}

export default LogoutBtn;