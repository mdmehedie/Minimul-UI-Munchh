import * as Yup from 'yup';
import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Grid, MenuItem, Select, InputLabel, FormControl, Typography } from '@mui/material';
import { useFormik, Form, FormikProvider } from 'formik';
// material
import {
  Link,
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
// component
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

function Create() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    couponCode: Yup.string().required('Coupon Code is required'),
    discountType: Yup.string().required('Discount Type is required'),
    amount: Yup.string().required('Amount is required'),
    startDate : Yup.string().required("Start date is required")
  });


  const formik = useFormik({
    initialValues: {
      couponCode : '',
      discountType: '',
      amount : '',
      startDate : '',
      expireDate : '',
      usagePerUser : '',
      minSpend : '',
      maxDiscountValue : '',
      maxLimit : '',
      specificDays : '',
      status : ''
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      console.log(values)
      // navigate('/dashboard', { replace: true });
    }
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return(
        <>
        <Typography variant="h4" gutterBottom>
          Create New Coupon
        </Typography>
            
        <Grid
            container
            // item xs={8} 
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '60vh' }}
        >
            <Grid item xs={6} >
                <FormikProvider value={formik}>
                    <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                        <Stack style={{ width : "450px" }} spacing={3}>
                        <TextField
                            fullWidth
                            type="text"
                            label="Coupon Code"
                            {...getFieldProps('couponCode')}
                            error={Boolean(touched.title && errors.title)}
                            helperText={touched.title && errors.title}
                        />

                        <TextField
                            fullWidth
                            select
                            label="discountType"
                            {...getFieldProps('Discount Type')}
                            error={Boolean(touched.type && errors.type)}
                            helperText={touched.type && errors.type}
                        >    
                            <MenuItem value= "User">Quantity discount</MenuItem>
                            <MenuItem value= "Merchant">Cash discount</MenuItem>
                        </TextField>

                        <TextField
                            fullWidth
                            type="text"
                            label="Amount"
                            {...getFieldProps('amount')}
                            error={Boolean(touched.title && errors.title)}
                            helperText={touched.title && errors.title}
                        />

                        <TextField
                            fullWidth
                            InputLabelProps={{
                              shrink: true,
                            }}
                            type="date"
                            label="Start Date"
                            {...getFieldProps('startDate')}
                            error={Boolean(touched.title && errors.title)}
                            helperText={touched.title && errors.title}
                        />  

                         <TextField
                            fullWidth
                            InputLabelProps={{
                              shrink: true,
                            }}
                            type="date"
                            label="Expire Date"
                            {...getFieldProps('expireDate')}
                            error={Boolean(touched.title && errors.title)}
                            helperText={touched.title && errors.title}
                        />  

                        <TextField
                            fullWidth
                            type="text"
                            label="Usage Per User"
                            {...getFieldProps('usagePerUser')}
                            error={Boolean(touched.title && errors.title)}
                            helperText={touched.title && errors.title}
                        />  

                         <TextField
                            fullWidth
                            type="text"
                            label="Minimum Spend"
                            {...getFieldProps('minSpend')}
                            error={Boolean(touched.title && errors.title)}
                            helperText={touched.title && errors.title}
                        />  

                        <TextField
                            fullWidth
                            type="text"
                            label="Maximum Discount Value"
                            {...getFieldProps('maxDiscountValue')}
                            error={Boolean(touched.title && errors.title)}
                            helperText={touched.title && errors.title}
                        />  

                        <TextField
                            fullWidth
                            type="text"
                            label="Maximum Limit"
                            {...getFieldProps('maxLimit')}
                            error={Boolean(touched.title && errors.title)}
                            helperText={touched.title && errors.title}
                        />  
                        <TextField
                            fullWidth
                            select
                            label="Status"
                            {...getFieldProps('status')}
                            error={Boolean(touched.status && errors.status)}
                            helperText={touched.status && errors.status}
                        >    
                            <MenuItem value= "true">Active</MenuItem>
                            <MenuItem value= "false">Inactive</MenuItem>
                        </TextField>
                        <LoadingButton
                            fullWidth
                            size="large"
                            type="submit"
                            variant="contained"
                            loading={isSubmitting}
                        >
                            Create
                        </LoadingButton>
                        </Stack>
                    </Form>
                    
                </FormikProvider>
            </Grid>   
         </Grid>
    </> 
  );
}

export default Create;