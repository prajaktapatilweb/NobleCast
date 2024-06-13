import { Suspense, lazy } from "react";
const Photogallery = lazy(() => import('../components/home/photo-gallery'))
import { MainLayout } from '../components/layout';
import Equipment from '../components/home/Equipment';
import Services from '../components/home/Services';
import Contact from '../components/home/Contact';
import Aboutus from "../components/home/Aboutus";
import Centermode from "../components/home/Centermode";
import DrAkshay from "../components/home/DrAkshay";
import Mission from "../components/home/Mission";
const Testimonial = lazy(() => import('../components/home/Testimonial'))

export default function Home() {
  return (
    <>
<Aboutus/>
      <Services/>
      <Mission/>
     
      <Contact></Contact>

    </>
  )
}
Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

