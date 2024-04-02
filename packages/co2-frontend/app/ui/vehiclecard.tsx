'use client';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface VehicleCardProps{
    image: string;
    noOfTrees?: number;
    make?: string;
    model?: string;
    isFirst: boolean;
}
export default function VehicleCard(props: VehicleCardProps) {
    return (
        <Box
            display="flex" width={1}
            height={100}
            sx={{
                bgcolor: (theme)=>theme.palette.primary.light,
                justifyContent: 'space-between',
                alignItems: 'center',
                px: 2
            }}
        >
            <Avatar sx={{width: 100, height: 100}} src={props.image} />
            <Typography variant="h4" sx={{color: (theme)=>theme.palette.primary.dark}}>
                {`${props.make} ${props.model}`}
            </Typography>
            <Typography variant="h4" display={props.isFirst ? 'block': 'none'}>
                🥇
            </Typography>
            <Typography  variant="h4" sx={{color: (theme)=>theme.palette.primary.dark}}>
                {props.noOfTrees} 🌳
            </Typography>

        </Box>
    );
}
