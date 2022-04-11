// material-ui
import {
    Typography,
    Container,
    Grid,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button,
    Stack,
    FormHelperText,
    Autocomplete
} from '@mui/material';

// project imports
import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

import { useNavigate } from 'react-router-dom';
import ProductPurchaseService from 'api-services/ProductPurchaseService';
import axios from 'axios';

// material-ui
import { useTheme } from '@mui/material/styles';
import axiosInstance from 'utils/axiosInstance';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import MobileTimePicker from '@mui/lab/MobileTimePicker';

import moment from 'moment-timezone';
// ==============================|| SAMPLE PAGE ||============================== //

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
        title: 'The Lord of the Rings: The Return of the King',
        year: 2003
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001
    },
    {
        title: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980
    },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    {
        title: 'The Lord of the Rings: The Two Towers',
        year: 2002
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    {
        title: 'Star Wars: Episode IV - A New Hope',
        year: 1977
    },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
    { title: 'Psycho', year: 1960 },
    { title: 'The Green Mile', year: 1999 },
    { title: 'The Intouchables', year: 2011 },
    { title: 'Modern Times', year: 1936 },
    { title: 'Raiders of the Lost Ark', year: 1981 },
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
    { title: 'Gladiator', year: 2000 },
    { title: 'Memento', year: 2000 },
    { title: 'The Prestige', year: 2006 },
    { title: 'The Lion King', year: 1994 },
    { title: 'Apocalypse Now', year: 1979 },
    { title: 'Alien', year: 1979 },
    { title: 'Sunset Boulevard', year: 1950 },
    {
        title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
        year: 1964
    },
    { title: 'The Great Dictator', year: 1940 },
    { title: 'Cinema Paradiso', year: 1988 },
    { title: 'The Lives of Others', year: 2006 },
    { title: 'Grave of the Fireflies', year: 1988 },
    { title: 'Paths of Glory', year: 1957 },
    { title: 'Django Unchained', year: 2012 },
    { title: 'The Shining', year: 1980 },
    { title: 'WALL·E', year: 2008 },
    { title: 'American Beauty', year: 1999 },
    { title: 'The Dark Knight Rises', year: 2012 },
    { title: 'Princess Mononoke', year: 1997 },
    { title: 'Aliens', year: 1986 },
    { title: 'Oldboy', year: 2003 },
    { title: 'Once Upon a Time in America', year: 1984 },
    { title: 'Witness for the Prosecution', year: 1957 },
    { title: 'Das Boot', year: 1981 },
    { title: 'Citizen Kane', year: 1941 },
    { title: 'North by Northwest', year: 1959 },
    { title: 'Vertigo', year: 1958 },
    {
        title: 'Star Wars: Episode VI - Return of the Jedi',
        year: 1983
    },
    { title: 'Reservoir Dogs', year: 1992 },
    { title: 'Braveheart', year: 1995 },
    { title: 'M', year: 1931 },
    { title: 'Requiem for a Dream', year: 2000 },
    { title: 'Amélie', year: 2001 },
    { title: 'A Clockwork Orange', year: 1971 },
    { title: 'Like Stars on Earth', year: 2007 },
    { title: 'Taxi Driver', year: 1976 },
    { title: 'Lawrence of Arabia', year: 1962 },
    { title: 'Double Indemnity', year: 1944 },
    {
        title: 'Eternal Sunshine of the Spotless Mind',
        year: 2004
    },
    { title: 'Amadeus', year: 1984 },
    { title: 'To Kill a Mockingbird', year: 1962 },
    { title: 'Toy Story 3', year: 2010 },
    { title: 'Logan', year: 2017 },
    { title: 'Full Metal Jacket', year: 1987 },
    { title: 'Dangal', year: 2016 },
    { title: 'The Sting', year: 1973 },
    { title: '2001: A Space Odyssey', year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: 'Toy Story', year: 1995 },
    { title: 'Bicycle Thieves', year: 1948 },
    { title: 'The Kid', year: 1921 },
    { title: 'Inglourious Basterds', year: 2009 },
    { title: 'Snatch', year: 2000 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Monty Python and the Holy Grail', year: 1975 }
];

const SaleProduct = ({ ...others }) => {
    const history = useNavigate();

    const theme = useTheme();

    const newDate = new Date();
    const date = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();

    const currentDate = `${year}-${month < 10 ? `0${month}` : `${month}`}-${date < 10 ? `0${date}` : `${date}`}`;

    const scriptedRef = useScriptRef();

    const sayHello = async (values) => {
        // alert('sayHello()');
        values.purchaseTime = values.purchaseTime.replace(values.purchaseTime.toString().substring(0, 10), values.purchaseDate);
        console.log('##sayHello(): ', values);

        await axiosInstance
            .get('/product-purchase/msg')
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log('##error:', error);
            });
    };
    return (
        <>
            <MainCard title="Sale Product">
                <Container>
                    <Formik
                        initialValues={{
                            productType: '',
                            productName: '',
                            productQuntity: '',
                            purchasePrice: '',
                            retailerAddress: '',
                            retailerMobileNo: '',
                            purchaseDate: currentDate,
                            purchaseTime: moment(newDate).tz('Asia/Kolkata').format(),
                            submit: null
                        }}
                        validationSchema={Yup.object().shape({
                            productType: Yup.string().required('Product Type is required'),
                            productName: Yup.string().required('Product Name is required'),
                            productQuntity: Yup.string().required('Product Quntity is required'),
                            purchasePrice: Yup.string().required('Purchase Price is required'),
                            retailerAddress: Yup.string().required('Retailer Address is required'),
                            retailerMobileNo: Yup.string().required('Retailer Mobile No. is required'),
                            purchaseDate: Yup.string().required('Purchase Date is required')
                        })}
                        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                            try {
                                if (scriptedRef.current) {
                                    setStatus({ success: true });
                                    setSubmitting(false);
                                    sayHello(values);
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
                        {({
                            errors,
                            handleBlur,
                            handleChange,
                            handleSubmit,
                            isSubmitting,
                            touched,
                            initialValues,
                            values,
                            setFieldValue
                        }) => (
                            <form noValidate onSubmit={handleSubmit} {...others}>
                                <Grid container spacing={2}>
                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                        <FormControl fullWidth error={Boolean(touched.productType && errors.productType)}>
                                            <Autocomplete
                                                id="productType"
                                                freeSolo
                                                options={top100Films.map((option) => option.title)}
                                                renderInput={(params) => <TextField {...params} label="Product Type" name="productType" />}
                                                onChange={(event, value) => {
                                                    setFieldValue('productType', value !== null ? value : initialValues.productType);
                                                }}
                                                value={values.productType}
                                            />
                                            {touched.productType && errors.productType && (
                                                <FormHelperText error id="standard-weight-helper-text-productType-login">
                                                    {errors.productType}
                                                </FormHelperText>
                                            )}
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                        <FormControl fullWidth error={Boolean(touched.productName && errors.productName)}>
                                            <Autocomplete
                                                id="productName"
                                                freeSolo
                                                options={top100Films.map((option) => option.title)}
                                                renderInput={(params) => <TextField {...params} label="Product Name" name="productName" />}
                                                onChange={(event, value) => {
                                                    setFieldValue('productName', value !== null ? value : initialValues.productName);
                                                }}
                                                value={values.productName}
                                            />
                                            {touched.productName && errors.productName && (
                                                <FormHelperText error id="standard-weight-helper-text-productName-login">
                                                    {errors.productName}
                                                </FormHelperText>
                                            )}
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                        <FormControl fullWidth error={Boolean(touched.productQuntity && errors.productQuntity)}>
                                            <TextField
                                                fullWidth
                                                label="Product Quntity"
                                                type="number"
                                                id="productQuntity"
                                                size="medium"
                                                onChange={handleChange}
                                                value={values.productQuntity}
                                            />
                                            {touched.productQuntity && errors.productQuntity && (
                                                <FormHelperText error id="standard-weight-helper-text-productQuntity-login">
                                                    {errors.productQuntity}
                                                </FormHelperText>
                                            )}
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                        <FormControl fullWidth error={Boolean(touched.purchasePrice && errors.purchasePrice)}>
                                            <TextField
                                                fullWidth
                                                label="Purchase Price"
                                                id="purchasePrice"
                                                size="medium"
                                                onChange={handleChange}
                                                value={values.purchasePrice}
                                            />
                                            {touched.purchasePrice && errors.purchasePrice && (
                                                <FormHelperText error id="standard-weight-helper-text-purchasePrice-login">
                                                    {errors.purchasePrice}
                                                </FormHelperText>
                                            )}
                                        </FormControl>
                                    </Grid>

                                    {/* ------------------------------------- */}

                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                        <FormControl fullWidth error={Boolean(touched.retailerAddress && errors.retailerAddress)}>
                                            <TextField
                                                fullWidth
                                                label="Retailer Address"
                                                id="retailerAddress"
                                                size="medium"
                                                multiline
                                                onChange={handleChange}
                                                value={values.retailerAddress}
                                            />
                                            {touched.retailerAddress && errors.retailerAddress && (
                                                <FormHelperText error id="standard-weight-helper-text-retailerAddress-login">
                                                    {errors.retailerAddress}
                                                </FormHelperText>
                                            )}
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                        <FormControl fullWidth error={Boolean(touched.retailerMobileNo && errors.retailerMobileNo)}>
                                            <TextField
                                                fullWidth
                                                label="Retailer Mobile No."
                                                id="retailerMobileNo"
                                                size="medium"
                                                onChange={handleChange}
                                                value={values.retailerMobileNo}
                                            />
                                            {touched.retailerMobileNo && errors.retailerMobileNo && (
                                                <FormHelperText error id="standard-weight-helper-text-retailerMobileNo-login">
                                                    {errors.retailerMobileNo}
                                                </FormHelperText>
                                            )}
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                        <FormControl fullWidth error={Boolean(touched.purchaseDate && errors.purchaseDate)}>
                                            <TextField
                                                fullWidth
                                                label="Purchase Date"
                                                id="purchaseDate"
                                                type="date"
                                                size="medium"
                                                onChange={handleChange}
                                                value={values.purchaseDate}
                                            />
                                            {touched.purchaseDate && errors.purchaseDate && (
                                                <FormHelperText error id="standard-weight-helper-text-purchaseDate-login">
                                                    {errors.purchaseDate}
                                                </FormHelperText>
                                            )}
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                        <FormControl fullWidth>
                                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                <Stack spacing={3}>
                                                    <MobileTimePicker
                                                        label="For mobile"
                                                        value={values.purchaseTime}
                                                        onChange={(value) => {
                                                            setFieldValue(
                                                                'purchaseTime',
                                                                value !== null
                                                                    ? moment(value).tz('Asia/Kolkata').format()
                                                                    : initialValues.purchaseTime
                                                            );
                                                            console.log(
                                                                '##purchaseTime: ',
                                                                moment(value).tz('Asia/Kolkata').format('hh:mm A')
                                                            );
                                                            console.log(
                                                                '#purchaseTime: ',
                                                                moment(values.purchaseTime).tz('Asia/Kolkata').format()
                                                            );
                                                            console.log(
                                                                '##purchaseDate: ',
                                                                values.purchaseTime.replace(
                                                                    values.purchaseTime.toString().substring(0, 10),
                                                                    values.purchaseDate
                                                                )
                                                            );
                                                            console.log('##dup: ', moment(value).tz('Asia/Kolkata').format());
                                                        }}
                                                        renderInput={(params) => <TextField {...params} />}
                                                    />
                                                </Stack>
                                            </LocalizationProvider>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                        {}
                                    </Grid>
                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                        <Stack direction="row" spacing={2}>
                                            <Button
                                                disableElevation
                                                disabled={isSubmitting}
                                                size="large"
                                                type="submit"
                                                variant="contained"
                                                color="info"
                                            >
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
