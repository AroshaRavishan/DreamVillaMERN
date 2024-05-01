import React from "react";
import WebLayout from "../Layouts/WebLayout";
import Hero from "../Components/Hero";
import Details from "../Components/Details";
import FacolitiesCard from "../Components/FacilitiesCard";
import { motion } from "framer-motion";
import Collection from "../Components/Collection";
import VideoBanner from "../Components/VideoBanner";
import Rooms from "../Components/Rooms";

function Home() {
  const backgroundVideo = "https://assets.mixkit.co/videos/preview/mixkit-sunset-on-a-beach-seen-from-a-terrace-44500-large.mp4";
  const heroText = "Luxury Hotel Experience"; // Replace this with the data you want to pass
  const heroDescription = "A unique Experience where to stay";
  const heroDescription2 = 'Choose from an extensive collection of courses and enhance your career opportunities and earning potential. Gain a strong foundation for professional and personal growth. Our popular qualifications are widely recognised and highly respected by employers and organisations, worldwide.';

  const backgroundVideoBanner="https://cdn.pixabay.com/video/2021/10/28/93705-642181946_large.mp4";
  const bannerText = "Luxury Hotel Experience"; // Replace this with the data you want to pass
  const bannerDescription = "Enjoy in a very Immersive Relax";
 
  const productCards = [
    {
      id: 1,
      image: "https://www.boutiquecollectionbyamaya.com/wp-content/uploads/2023/02/18343774873012305.jpg",
      brand: "Brand 1",
      name: "Product Name 1",
      price: 149,
      originalPrice: 199,
    },
    {
      id: 2,
      image: "https://www.boutiquecollectionbyamaya.com/wp-content/uploads/2023/02/17990952355691181.jpg",
      brand: "Brand 2",
      name: "Product Name 2",
      price: 149,
      originalPrice: 199,
    },
    {
      id: 3,
      image: "https://www.boutiquecollectionbyamaya.com/wp-content/uploads/2023/02/17990952355691181.jpg",
      brand: "Brand 2",
      name: "Product Name 2",
      price: 149,
      originalPrice: 199,
    },
    // Add more product data as needed
  ];

  return (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}>

      <WebLayout title='Home - Dream Villa'>
        <Hero backgroundVideo={backgroundVideo} heroText={heroText} heroDescription={heroDescription} heroDescription2={heroDescription2} />
        <motion.div>
          <Details
            title1={'Experience'}
            title2={'DREAM VILLA'}
            description={'Known to be one of the most charming villas in Bentota, exuding tropical charm and complemented with all modern amenities. The space is easily converted into a breezy open-plan living room from where you can go straight for a swim into the crystal-clear water of the swimming pool.'}
          />
        </motion.div>
        <VideoBanner backgroundVideoBanner={backgroundVideoBanner} bannerText={bannerText} bannerDescription={bannerDescription}/>
        <Rooms/>
        <FacolitiesCard products={productCards} cardTitle={'Hello'} cardDescription={'HI'} />
        <Collection />
      </WebLayout>
    </motion.div>
  );
}

export default Home;