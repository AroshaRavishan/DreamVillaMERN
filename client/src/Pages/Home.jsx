// Home.jsx

import React from "react";
import WebLayout from "../Layouts/WebLayout";
import Hero from "../Components/Hero";
import Details from "../Components/Details";
import FacolitiesCard from "../Components/FacilitiesCard";
import { motion } from "framer-motion";
import Collection from "../Components/Collection";


function Home() {
  const backgroundImage = "https://png.pngtree.com/background/20230616/original/pngtree-impressive-contemporary-villa-with-dark-wooden-exteriors-and-a-stunning-garden-picture-image_3651961.jpg";
  const heroText = "TROPICAL LIVING"; // Replace this with the data you want to pass
  const heroDescription = "DREAM VILLA";
  const heroDescription2 = 'Choose from an extensive collection of courses and enhance your career opportunities and earning potential. Gain a strong foundation for professional and personal growth. Our popular qualifications are widely recognised and highly respected by employers and organisations, worldwide.';

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
      id: 1,
      image: "https://www.boutiquecollectionbyamaya.com/wp-content/uploads/2023/02/17990952355691181.jpg",
      brand: "Brand 1",
      name: "Product Name 1",
      price: 149,
      originalPrice: 199,
    },
    {
      id: 1,
      image: "https://www.boutiquecollectionbyamaya.com/wp-content/uploads/2023/02/17973527117073882.jpg",
      brand: "Brand 1",
      name: "Product Name 1",
      price: 149,
      originalPrice: 199,
    },
    {
      id: 1,
      image: "https://www.boutiquecollectionbyamaya.com/wp-content/uploads/2023/02/18267052276119758.jpg",
      brand: "Brand 1",
      name: "Product Name 1",
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
        <Hero backgroundImage={backgroundImage} heroText={heroText} heroDescription={heroDescription} heroDescription2={heroDescription2} />
        <motion.div>
          <Details
            title1={'Experience'}
            title2={'DREAM VILLA'}
            description={'Known to be one of the most charming villas in Bentota, exuding tropical charm and complemented with all modern amenities. The space is easily converted into a breezy open-plan living room from where you can go straight for a swim into the crystal-clear water of the swimming pool.'}
          />
        </motion.div>
        <FacolitiesCard products={productCards} cardTitle={'Hello'} cardDescription={'HI'} />
        <Collection />
      </WebLayout>
    </motion.div>
  );
}

export default Home;
