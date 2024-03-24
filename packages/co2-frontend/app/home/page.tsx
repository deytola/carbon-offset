import React from 'react';
import Typography from '@mui/material/Typography';
import {Stack} from "@mui/material";
import Header from "@/app/ui/header";
import Box from "@mui/material/Box";
import VehicleCard from "@/app/ui/vehiclecard";
import NewVehicleBtn from "@/app/ui/new-vehicle-btn";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: "Home",
    description: "Leaderboard for Humane.",
};
function Page(){
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
                    <Box sx={{ width: 1, maxWidth: 'sm'}}>
                        <Header/>
                        <Typography
                            variant="h1"
                            component="div"
                            textAlign="center"
                        >
                            🏆
                        </Typography>
                    </Box>
                    <VehicleCard image={'/gogreen.png'} noOfTrees={100} make="Toyota" model="Tacoma"/>
                </Stack>
                <NewVehicleBtn/>
            </Box>
        </>
    );
}

export default Page;
