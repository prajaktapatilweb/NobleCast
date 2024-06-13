import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "next/image";

import { FooterSocialLinks } from "../footer";
import Link from "next/link";
import Whatsappnew from "./Whatsappnew";
import CallIcon from '@mui/icons-material/Call';
import { UpgradeRounded, WhatsApp } from "@mui/icons-material";
const Footer = () => {
  const contactno1 = "+919833389890";
  const contactno2 = "+919702955057";


  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#121f38",
        py:3,
        color: "primary.contrastText",
      }}
    >
      <Container sx={{ textAlign: { xs: "center", md: "left" }, maxWidth: { xl: 1300 } }}>
        <Grid container spacing={2} alignItems='center' justifyContent='center'>
        <Grid item xs={0} sm={0} md={1}>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: { xs: 3, md: 0 } }}>

<h3 style={{ fontSize: '18px' }}>Our Location</h3>
<p> Noble Cast Inc.<br />
  1023 LeGrand Boulevard, <br />
  Charleston, South Carolina 29492
  USA

</p>
             
            </Box>
          </Grid>
        

       
          <Grid item xs={12} md={7}>
            <Typography variant="h4" sx={{ fontWeight: "400" }} gutterBottom>
             Contact Us
            </Typography>

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
           

          </Grid>

        


       
        </Grid>
      </Container>
    </Box>
  );
};
export default Footer;
