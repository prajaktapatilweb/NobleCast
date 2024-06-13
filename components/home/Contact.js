import React from 'react';
import { Typography, Card, Link } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Axios from 'axios';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import AppTextField from '../Formik/AppTextField';
import { Button, FormControl, Grid, InputLabel } from '@mui/material';
import CustomizedSelectFormik from '../Formik/CustomizedSelectFormik';
import { useRouter } from 'next/router';
import CallTwoToneIcon from "@mui/icons-material/CallTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import IconButton from "@mui/material/IconButton";
import Heading from './Heading';
import { headList9 } from '../Constant/titlefile';


const All = [
  { key: 1, text: 'Braces/ aligners', value: 'Braces/ aligners' },
  { key: 2, text: 'Dental implants', value: 'Dental implants' },
  { key: 3, text: 'Dental veneers (smile designing)', value: 'Dental veneers (smile designing)' },
  { key: 4, text: 'Full mouth rehabilitation', value: 'Full mouth rehabilitation' },
  { key: 5, text: 'Pediatric (kids dentistry)', value: 'Pediatric (kids dentistry)' },
  { key: 6, text: 'Root canal', value: 'Root canal' },
  { key: 7, text: 'Wisdom teeth extraction/ Teeth extraction', value: 'Wisdom teeth extraction/ Teeth extraction' },
  { key: 8, text: 'Other', value: 'Other' }
];
const validationSchema = yup.object({
  name: yup
    .string()
    .required('Name is required'),
  email: yup
    .string()
    .email('Please enter valid email ID')
    .required('Email ID is required'),
  mobilenumber: yup
    .string()
    .required('Mobile Number is mandatory')
    .matches(/^[0-9]+$/, 'Only digits are allowed for this field ')
    .length(10, 'Only 10 digit mobile number'),
  selection: yup
    .string()
    .required('It is required'),
});

const Contact = () => {

  const contactno1 = "+919049349588";
  const contactno2 = "+919822840862";

  const router = useRouter()
  const onSubmit = async (values, submitProps) => {
    console.log({ values })
    Axios.post("/api/nodemail", {
      // Axios.post("/api/sendemail", {
      name: values.name,
      email: values.email,
      mobileno: values.mobilenumber,
      msg: values.msg,
      selection: values.selection

    })
      .then(function (response) {
        //handle success
        // console.log('Success')
        router.push('/thankyou')
        submitProps.setSubmitting(false);
        submitProps.resetForm();
      })
      .catch(function (response) {
        // handle error
        console.log('Rrtt', response)
        alert("Error in submission. Please resubmit");
      });
  };

  return (
    <Box id='contactform' sx={{ backgroundColor: 'white' }}>
      <Container >
        {/* <!-- ======= Contact Section ======= --> */}
        <section id="contact" class="contact">

          <Heading data={headList9}></Heading>
          {/* <div>
            <iframe style="border:0; width: 100%; height: 350px;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
          </div> */}


          <Grid container spacing={2} alignItems='center' justifyContent='center'>
          
                <Grid item xs={12} md={4}>
                  <div class="info-box" style={{ background: '#ffffff', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' }}>

                    <i class="bx"><LocationOnIcon sx={{ color: 'primary.main' }} /></i>
                    <h3 style={{ fontSize: '18px' }}>Our Location</h3>
                    <p> Noble Cast Inc.<br />
                      1023 LeGrand Boulevard, <br />
                      Charleston, South Carolina 29492
                      USA

                    </p>
                  </div>
                </Grid>
                <Grid item xs={12} md={8}>
                  <div class="info-box mt-4" style={{ background: '#ffffff', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' }}>
                    {/* <IconButton aria-label="phone" style={{ color: '#49caeb' }}> */}
                    <i class="bx">
                      <CallTwoToneIcon sx={{ color: 'primary.main' }} />
                    </i>
                    {/* </IconButton> */}
                    <h3>Contact Us</h3>
                    <Grid container spacing={2} alignItems='center' justifyContent='center'>
          
          <Grid item xs={12} md={6}>
                    Akshay N Bhagwat<br />
                    President<br />


                    <Link href={`tel:${contactno1}`} target="_blank">
                      +919049349588

                    </Link>
                    <br />
                    <Link
                      href={`mailto:${'akshaybhagwat@noblecastinc.com'}`} target="_blank">
                      akshaybhagwat@noblecastinc.com

                    </Link>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    Nitin T Bhagwat<br />
                    Director<br />


                    <Link href={`tel:${contactno2}`} target="_blank">
                      +919822840862

                    </Link>
                    <br />
                    <Link
                      href={`mailto:${'nitinbhagwat@noblecastinc.com'}`} target="_blank">
                    nitinbhagwat@noblecastinc.com
                    </Link>
                    </Grid>
                    </Grid>
                  </div>
                </Grid>
             

          </Grid>

        </section>
        {/* <!-- End Contact Section --> */}
      </Container>
    </Box>
  );
};
export default Contact;
