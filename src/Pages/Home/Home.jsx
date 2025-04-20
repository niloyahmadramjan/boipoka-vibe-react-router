import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import Books from "../Books/Books";
import { useLoaderData } from "react-router";

const Home = () => {
   const bookData = useLoaderData();
    console.log(bookData)
  return (
    <div>
      <HeroSection></HeroSection>
      <Books></Books>
    </div>
  );
};

export default Home;
