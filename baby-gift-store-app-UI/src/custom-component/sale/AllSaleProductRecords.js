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
    Autocomplete,
    IconButton,
    Paper
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';

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
import { useEffect, useState } from 'react';
import { CustomDataTable, renderCellExpand } from 'utils/CustomDataTable';

// ==============================|| AllPurchaseProductRecords PAGE ||============================== //

const columns = [
    { field: 'srNo', headerName: 'Sr. No', width: 80, headerClassName: 'super-app-theme--header', renderCell: renderCellExpand },
    { field: 'id', headerName: 'Id', width: 125, headerClassName: 'super-app-theme--header', renderCell: renderCellExpand },
    {
        field: 'productType',
        headerName: 'Product Type',
        width: 150,
        headerClassName: 'super-app-theme--header',
        renderCell: renderCellExpand
    },

    {
        field: 'productName',
        headerName: 'Product Name',
        width: 150,
        headerClassName: 'super-app-theme--header',
        renderCell: renderCellExpand
    },
    {
        field: 'productQuntity',
        headerName: 'Product Quntity',
        width: 150,
        headerClassName: 'super-app-theme--header',
        renderCell: renderCellExpand
    },

    {
        field: 'purchasePrice',
        headerName: 'Purchase Price',
        width: 150,
        headerClassName: 'super-app-theme--header',
        renderCell: renderCellExpand
    },
    {
        field: 'retailerAddress',
        headerName: 'Retailer Address',
        width: 150,
        headerClassName: 'super-app-theme--header',
        renderCell: renderCellExpand
    },

    {
        field: 'retailerMobileNo',
        headerName: 'Retailer Mobile No',
        width: 150,
        headerClassName: 'super-app-theme--header',
        renderCell: renderCellExpand
    },
    {
        field: 'purchaseDate',
        headerName: 'Purchase Date',
        width: 130,
        headerClassName: 'super-app-theme--header',
        renderCell: renderCellExpand
    },
    {
        field: 'purchaseTime',
        headerName: 'Purchase Time',
        width: 130,
        headerClassName: 'super-app-theme--header',
        renderCell: renderCellExpand
    },

    {
        field: 'action',
        headerName: 'Action',
        width: 90,
        headerClassName: 'super-app-theme--header',
        disableExport: true,
        renderCell: (params) => (
            <strong>
                <IconButton aria-label="edit" color="primary" onClick={() => alert(params.value)}>
                    <BorderColorIcon />
                </IconButton>

                <IconButton aria-label="delete" color="error" onClick={() => alert(params.value)}>
                    <DeleteIcon />
                </IconButton>
            </strong>
        )
    }
];

const AllSaleProductRecords = ({ ...others }) => {
    const history = useNavigate();

    const theme = useTheme();

    const [purchaseList, setPurchaseList] = useState([]);

    const newDate = new Date();
    const date = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();

    const currentDate = `${year}-${month < 10 ? `0${month}` : `${month}`}-${date < 10 ? `0${date}` : `${date}`}`;

    const scriptedRef = useScriptRef();

    const getAllProductPurchaseList = async () => {
        // alert('getAllProductPurchaseList()');
        console.log('##getAllProductPurchaseList(): ');
        const tempList = [];
        await axiosInstance
            .get('/product-purchase/list')
            .then((response) => {
                console.log('##response: ', response.data);
                // setPurchaseList(...purchaseList, response.data);

                response.data.map((val, key) =>
                    tempList.push({
                        srNo: key + 1,
                        id: val.id,
                        productType: val.productType,
                        productName: val.productName,
                        productQuntity: val.productQuntity,
                        purchasePrice: val.purchasePrice,
                        retailerAddress: val.retailerAddress,
                        retailerMobileNo: val.retailerMobileNo,
                        purchaseDate: val.purchaseDate,
                        purchaseTime: moment(val.purchaseTime).tz('Asia/Kolkata').format('hh:mm A'),
                        action: val.id
                    })
                );

                setPurchaseList(...purchaseList, tempList);
            })
            .catch((error) => {
                console.log('##error:', error);
            });
        console.log('##purchaseProductsList: ', purchaseList);
    };

    useEffect(() => {
        getAllProductPurchaseList();
    }, []);

    return (
        <>
            <MainCard title="All Sale Product Records">
                <Paper elevation={3}>
                    <CustomDataTable rows={purchaseList} columns={columns} />
                </Paper>
            </MainCard>
        </>
    );
};

export default AllSaleProductRecords;
