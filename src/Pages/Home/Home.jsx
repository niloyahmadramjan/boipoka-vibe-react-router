import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import Books from "../Books/Books";
import { useLoaderData } from "react-router";

const Home = () => {
  const booksData = useLoaderData();
   
  return (
    <div>
      <HeroSection></HeroSection>
      <Books booksData={booksData}></Books>
    </div>
  );
};

export default Home;
