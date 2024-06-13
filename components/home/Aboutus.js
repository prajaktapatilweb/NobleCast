import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { data } from "./feature.data";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import Heading from "./Heading";
import { headList1 } from "../Constant/titlefile";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";



const Aboutus = () => {
   

    return (
        <>

            {/* <!-- ======= About Us Section ======= --> */}
                <section  style={{ background: 'white' }}>
                    <Container>
<Heading data={headList1}></Heading>
                        <Grid container spacing={3}>
                           
                            <Grid item xs={12} md={12} sx={{mx:10}}>
                                <p  style={{marginTop:4,marginBottom:0,textAlign:'justify'}}>
                                Noble Cast Inc. estd in 2024 aiming for Warehousing, Distribution and Trading of Aluminum Products to US Clients.
At our core, we specialize in the warehousing, distribution, and trading of high-quality aluminum products. With extensive industry experience and a robust logistics network, we ensure prompt and efficient delivery to meet the diverse needs of our clients. Our commitment to excellence and customer satisfaction has established us as a trusted partner in the aluminum market, delivering tailored solutions that drive business success.

                                </p>
                              
                                
                            </Grid>
                        </Grid>

                    </Container>
                </section>
        </>
    );
};
export default Aboutus;
