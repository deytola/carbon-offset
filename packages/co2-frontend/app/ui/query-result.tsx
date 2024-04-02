'use client';
import * as React from 'react';
import Typography from "@mui/material/Typography";


// @ts-ignore
export default function QueryResult({loading, error, data, children}) {
    if (error) {
        return (
            <Typography
                variant="h1"
                component="div"
                color={(theme)=>theme.palette.secondary.contrastText}
                textAlign="center"
            >
                ERROR: {error.message}
            </Typography>
        );
    }
    if (loading) {
        return (
            <Typography
                variant="h1"
                component="div"
                color={(theme)=>theme.palette.secondary.contrastText}
                textAlign="center"
            >
                Loading...
            </Typography>
        )
    }
    if (!data) {
        return (
            <Typography
                variant="h1"
                component="div"
                color={(theme)=>theme.palette.secondary.contrastText}
                textAlign="center"
            >
                Nothing to show...
            </Typography>
        )
    }
    if (data) {
        return children;
    }
}
