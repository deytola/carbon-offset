'use client';
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import {usePathname, useSearchParams, useRouter} from "next/navigation";
import Image from "next/image";
import {useDebouncedCallback} from "use-debounce";


// @ts-ignore
export default function QueryResult({loading, error, data, children}) {
    if (error) {
        return <p>ERROR: {error.message}</p>;
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    if (!data) {
        return <p>Nothing to show...</p>;
    }
    if (data) {
        return children;
    }
}
