import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Recipes from "../components/Recipes";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full flex flex-col">
      <Header
        title={
          <p>
            Taste the World with <br /> FlavorVerse!
          </p>
        }
        type="home"
      />

      <Navbar />

      <section id="recipes" className="md:max-w-[1440px] mx-auto">
        <Recipes />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
