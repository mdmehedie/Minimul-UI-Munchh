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
    name: Yup.string().required('Name is required'),
    // type: Yup.string().required('Type is required'),
    // status: Yup.string().required('Status is required')
  });

  const formik = useFormik({
    initialValues: {
      name : '',
      // type: '',
      // status : '',
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
          Create New Cuisine
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
                            label="Cuisine Name"
                            {...getFieldProps('name')}
                            error={Boolean(touched.name && errors.name)}
                            helperText={touched.name && errors.name}
                        />

                        {/* <TextField
                            fullWidth
                            select
                            label="Type"
                            {...getFieldProps('type')}
                            error={Boolean(touched.type && errors.type)}
                            helperText={touched.type && errors.type}
                        >    
                            <MenuItem value= "User">User</MenuItem>
                            <MenuItem value= "Merchant">Merchant</MenuItem>
                        </TextField> */}

                        {/* <TextField
                            fullWidth
                            select
                            label="Status"
                            {...getFieldProps('status')}
                            error={Boolean(touched.status && errors.status)}
                            helperText={touched.status && errors.status}
                        >    
                            <MenuItem value= "true">Active</MenuItem>
                            <MenuItem value= "false">Inactive</MenuItem>
                        </TextField> */}


                      
                       
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