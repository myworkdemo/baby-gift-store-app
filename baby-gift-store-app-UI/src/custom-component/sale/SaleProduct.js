// material-ui
import { Typography, Container, Grid, TextField, FormControl, InputLabel, Select, MenuItem, Button, Stack } from '@mui/material';

// project imports
import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

import { useNavigate } from 'react-router-dom';
// ==============================|| SAMPLE PAGE ||============================== //

const SaleProduct = () => {
    const history = useNavigate();

    const newDate = new Date();
    const date = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();

    const currentDate = `${year}-${month < 10 ? `0${month}` : `${month}`}-${date}`;
    const currentTime = `${newDate.getHours()} : ${newDate.getMinutes()}`;

    const scriptedRef = useScriptRef();

    const handleSignIn = (values) => {
        console.log('values : ', values);
        history('/app/dashboard/default');
    };
    return (
        <>
            <MainCard title="Sale Product">
                <Container>
                    <Formik
                        initialValues={{
                            purchasePrice: 200,
                            saleDate: currentDate,
                            saleTime: currentTime,
                            password: '123456',
                            submit: null
                        }}
                        validationSchema={Yup.object().shape({
                            email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                            password: Yup.string().max(255).required('Password is required')
                        })}
                        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                            try {
                                if (scriptedRef.current) {
                                    setStatus({ success: true });
                                    setSubmitting(false);
                                    handleSignIn(values);
                                }
                            } catch (err) {
                                console.error(err);
                                if (scriptedRef.current) {
                                    setStatus({ success: false });
                                    setErrors({ submit: err.message });
                                    setSubmitting(false);
                                }
                            }
                        }}
                    >
                        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                            <form>
                                <Grid container spacing={2}>
                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label-label">Product Type</InputLabel>
                                            <Select
                                                fullWidth
                                                labelId="demo-simple-select-label-label"
                                                id="demo-simple-select"
                                                label="Product Type"
                                                onChange={handleChange}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                        <FormControl fullWidth>
                                            <TextField fullWidth label="Product Name" id="outlined-size-medium" size="medium" />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                        <FormControl fullWidth>
                                            <TextField
                                                fullWidth
                                                label="Purchase Price"
                                                id="outlined-size-medium"
                                                size="medium"
                                                value={values.purchasePrice}
                                                disabled
                                            />
                                        </FormControl>
                                    </Grid>

                                    {/* ------------------------------------- */}

                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                        <FormControl fullWidth>
                                            <TextField fullWidth label="Sale Price" id="outlined-size-medium" size="medium" />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                        <FormControl fullWidth>
                                            <TextField fullWidth label="Quantity" type="number" id="outlined-size-medium" size="medium" />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                        <FormControl fullWidth>
                                            <TextField fullWidth label="Total Price" id="outlined-size-medium" size="medium" />
                                        </FormControl>
                                    </Grid>

                                    {/* ------------------------------------- */}

                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                        <FormControl fullWidth>
                                            <TextField fullWidth label="Profit / Loss" id="outlined-size-medium" size="medium" disabled />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                        <FormControl fullWidth>
                                            <TextField
                                                fullWidth
                                                label="Per Unit Profit / Loss"
                                                type="number"
                                                id="outlined-size-medium"
                                                size="medium"
                                                value={1}
                                                disabled
                                            />
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                        <FormControl fullWidth>
                                            <TextField
                                                fullWidth
                                                label="Customer Details"
                                                type="number"
                                                id="outlined-size-medium"
                                                size="medium"
                                                multiline
                                            />
                                        </FormControl>
                                    </Grid>

                                    {/* ------------------------------------- */}

                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                        <FormControl fullWidth>
                                            <TextField
                                                fullWidth
                                                label="Sale Date"
                                                id="outlined-size-medium"
                                                type="date"
                                                size="medium"
                                                defaultValue={values.saleDate}
                                                onChange={handleChange}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                        <FormControl fullWidth>
                                            <TextField
                                                fullWidth
                                                label="Sale Time"
                                                type="time"
                                                id="outlined-size-medium"
                                                size="medium"
                                                onChange={handleChange}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                        {}
                                    </Grid>

                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                        <Stack direction="row" spacing={2}>
                                            <Button size="large" variant="contained">
                                                Submit
                                            </Button>
                                            <Button size="large" variant="contained" color="inherit">
                                                Clear
                                            </Button>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </form>
                        )}
                    </Formik>
                </Container>
            </MainCard>
        </>
    );
};

export default SaleProduct;
