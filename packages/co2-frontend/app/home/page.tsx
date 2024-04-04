"use client";
import React, {useEffect, useState} from 'react';
import Typography from '@mui/material/Typography';
import {FormControl, FormHelperText, Input, InputLabel, MenuItem, OutlinedInput, Select, Stack} from "@mui/material";
import Header from "@/app/components/header";
import Box from "@mui/material/Box";
import VehicleCard from "@/app/components/vehiclecard";
import NewVehicleBtn from "@/app/components/new-vehicle-btn";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import {useRouter} from "next/navigation";
import ImageUpload from "@/app/components/image-upload";
import {FetchResult, useMutation, useQuery} from "@apollo/client";
import {Make, Model, Order, SuccessResponse, Tree, Vehicle} from "@/src/__generated__/graphql";
import QueryResult from '@/app/components/query-result';
import {LEADERBOARD, MY_VEHICLES, TREES} from '@/src/queries';
import {useAppDispatch, useAppSelector} from '@/lib/hooks';
import {clearToken} from '@/lib/features/auth/authSlice';
import Cookies from 'js-cookie';
import LogoutBtn from '@/app/components/auth/logout-btn';
import {Maybe} from 'graphql/jsutils/Maybe';
import {PLACE_ORDER} from '@/src/mutations';


function Page() {
    const dispatch = useAppDispatch();
    const [open, setOpen] = useState(false);
    const [userVehicles, setUserVehicles] = useState<Maybe<Vehicle[]>>([]);
    const [availableTrees, setAvailableTrees] = useState<Maybe<Tree[]>>([]);
    const user = Cookies.get('user');
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleLogout = () => {
        dispatch(clearToken());
        Cookies.remove('token');
        Cookies.remove('user');
        router.push('/login');
    };

    const handleClose = () => {
        setOpen(false);
        router.refresh();
    };

    const { loading, error, data } = useQuery(LEADERBOARD);
    const { loading: uvLoading, error: uvError, data: uvData } = useQuery(MY_VEHICLES);
    const { loading: treesLoading, error: treesError, data: treesData } = useQuery(TREES);
    const [placeOrderForTree, { loading: orderLoading, error: orderError, data: orderData }] = useMutation(PLACE_ORDER);

    useEffect(() => {
        if(uvData){
            setUserVehicles(uvData?.myVehicles);
        }
    }, [uvData]);
    useEffect(() => {
        if(treesData){
            setAvailableTrees(treesData?.trees);
        }
    }, [treesData]);

    interface FormData{
        vehicle: Maybe<Vehicle>
        make: Maybe<Make>
        model: Maybe<Model>
        tree: Maybe<Tree>
        recommendedNoOfTrees?: number,
        orderTotal?: number,
    }
    const [formData , setFormData] = useState<FormData>({
        make: undefined,
        model: undefined,
        vehicle: undefined,
        tree: undefined,
        recommendedNoOfTrees: 0,
        orderTotal: 0,
    });


    const handleVehicleChange = (e) => {
        const selectedVehicle = userVehicles?.find((vehicle: Vehicle)=>vehicle.id===e.target.value);
        setFormData({
            ...formData,
            vehicle: selectedVehicle,
            make: selectedVehicle?.make,
            model: selectedVehicle?.model,
            recommendedNoOfTrees: Number((selectedVehicle?.mileage/selectedVehicle?.model?.mttRatio)||0).toFixed(2)
        });
    };
    const handleTreeChange = (e) => {
        const selectedTree = availableTrees?.find((tree: Tree)=>tree.id===e.target.value);
        setFormData({
            ...formData,
            tree: selectedTree,
            orderTotal: selectedTree?.unitPrice*formData.recommendedNoOfTrees
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };
    const router = useRouter();

    const formatToCurrency = (numberToFormat: unknown) => {
        return numberToFormat.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    const formatToNumber = (numberToFormat: unknown) => {
        return numberToFormat?.toLocaleString('en-US');
    }

    const handleNoOfTreesChange = (e)=>{
        setFormData({
            ...formData,
            recommendedNoOfTrees: Number(e.target.value).toFixed(2),
            orderTotal: formData.tree?.unitPrice * Number(e.target.value)
        });
    }



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
                <LogoutBtn handleClick={handleLogout}/>
            </Box>
            <>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        component: 'form',
                        onSubmit: async (event: React.FormEvent<HTMLFormElement>) => {
                            const orderInput = {
                                fkTreeId: Number(formData.tree?.id),
                                fkVehicleId: Number(formData.vehicle?.id),
                                quantity: parseInt(formData.recommendedNoOfTrees)
                            }
                            const response: FetchResult<Order> = await placeOrderForTree({
                                variables: { orderInput },
                            });
                            console.log(response.data);
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
                            {/*<form onSubmit={handleSubmit}>*/}
                                <FormControl fullWidth margin="normal">
                                    <InputLabel required={true} id="label-for-vehicles" >Vehicles</InputLabel>
                                    <Select
                                        value={formData.vehicle?.id}
                                        onChange={handleVehicleChange}
                                        labelId="label-for-vehicles"
                                        label="Vehicles"
                                    >
                                        {userVehicles?.map((vehicle: Vehicle, index) => (
                                            <MenuItem key={index} value={vehicle.id}>{`${vehicle.make?.name} ${vehicle.model?.modelName}`}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <FormHelperText>Please select vehicle for which you would like to offset carbon footprint.</FormHelperText>
                                <FormControl fullWidth margin="normal">
                                    {/*<InputLabel required={true} id="label-for-make" >Make</InputLabel>*/}
                                    <OutlinedInput
                                        value={formData.make?.name}
                                        fullWidth
                                        required
                                        name="make"
                                        placeholder={'Vehicle Make'}
                                        disabled={true}
                                    />
                                </FormControl>
                                <FormControl fullWidth margin="normal">
                                    <OutlinedInput
                                        value={formData.model?.modelName}
                                        fullWidth
                                        required
                                        name="model"
                                        placeholder={'Vehicle Model'}
                                        disabled={true}
                                    />
                                </FormControl>
                                <FormControl fullWidth margin="normal">
                                    <OutlinedInput
                                        value={formatToNumber(formData.model?.mttRatio)}
                                        fullWidth
                                        required
                                        name="mttRatio"
                                        placeholder={'Miles to Trees Ratio'}
                                        disabled={true}
                                    />
                                </FormControl>
                                <FormControl fullWidth margin="normal">
                                    <OutlinedInput
                                        value={formatToNumber(formData.vehicle?.mileage)}
                                        fullWidth
                                        required
                                        name="mileage"
                                        placeholder={'Mileage'}
                                        disabled={true}
                                    />
                                </FormControl>
                                <FormControl fullWidth margin="normal">
                                    <OutlinedInput
                                        value={formData.recommendedNoOfTrees}
                                        onChange={handleNoOfTreesChange}
                                        fullWidth
                                        required
                                        disabled={!Boolean(formData.tree)}
                                        name="recommendedNoOfTrees"
                                        placeholder={'Recommended Number of Trees'}
                                    />
                                </FormControl>
                                <FormControl fullWidth margin="normal">
                                    <InputLabel required={true} id="label-for-trees" >Trees</InputLabel>
                                    <Select
                                        value={formData.tree?.id}
                                        onChange={handleTreeChange}
                                        labelId="label-for-trees"
                                        label="Trees"
                                    >
                                        {availableTrees?.map((tree: Tree, index) => (
                                            <MenuItem key={index} value={tree.id}>{`${tree.species} - (${formatToCurrency(tree.unitPrice)})`}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <FormHelperText>Please select tree to purchase.</FormHelperText>
                                <Typography variant="h5" sx={{color: 'primary.dark'}}>{`Order total: ${formatToCurrency(formData.orderTotal)}`}</Typography>
                                {/*<Box sx={{mt: 2, mb: 2}}>*/}
                                {/*    <ImageUpload/>*/}
                                {/*</Box>*/}
                            {/*</form>*/}
                            <DialogActions>
                                <Button variant="contained" color="error" sx={{mr: 1}} onClick={handleClose}>Cancel</Button>
                                <Button variant="contained" type={'submit'}>Buy</Button>
                            </DialogActions>
                        </Box>
                    </DialogContent>

                </Dialog>
            </>
        </>
    );
}

export default Page;
