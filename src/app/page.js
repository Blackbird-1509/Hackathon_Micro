"use client";
import { motion } from "motion/react"
import { useEffect, useState } from "react"
import Chart from 'chart.js/auto';

export default function Home() {
  const onButtonClick = (check) => {
    if (check) {
      document.body.style.overflow = "auto";
      document.getElementById("our_solution").scrollIntoView({ behavior: "smooth" });
    }
    else {

    }
  }
  useEffect(() => {
    window.scrollTo(0, 0)
    document.body.style.overflow = "hidden";
  }, [])
  const [bgClass, setBgClass] = useState("bg-blue-500");
  const bgClasses = ["bg-blue-500", "bg-blue-600", "bg-blue-700", "bg-blue-800", "bg-blue-900", "bg-blue-950"];


  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sectionHeight = window.innerHeight;
      const sectionIndex = Math.floor(scrollY / sectionHeight);
      setBgClass(bgClasses[sectionIndex] || "bgblue-500");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`font-mono ${bgClass} transition-colors duration-500`}>
      <section className="h-screen cursor-[url('/plastic_bag_cursor.png'),_auto] flex flex-col items-center justify-center overflow-hidden">
        <p className="text-5xl mb-40">Do you care?</p>
        <div className="flex gap-170">
          <motion.button type="button" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="relative group cursor-[url('/plastic_bag_cursor.png'),_auto]" onClick={() => onButtonClick(false)}>          <img src="/turtle_image.png" alt="Turtle" width="100" height="100" ></img>
            <span className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 text-xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              No
            </span></motion.button>
          <motion.button type="button" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="relative group cursor-[url('/plastic_bag_cursor.png'),_auto]" onClick={() => onButtonClick(true)}><img src="/trash_bin.png" width="75" height="75">
          </img><span className="absolute bottom-[-30px] left-1/2 -translate-x-1/2  text-xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Yes
            </span></motion.button>
        </div>
      </section>
      <section
        id="our_solution"
        className="h-screen flex items-center justify-center gap-100 px-20"
      >
        <img src="/AOT.jpg" className="w-128 h-auto"></img>
        <div className="text-right">
          <p className="text-4xl mb-8 font-libertinus">The Problem</p>
          <p className="text-3xl"> Plastics</p>

        </div>
      </section>
      <section className="h-screen"><p className="text-white text-4xl">The Next Part</p></section>
      <section className="h-screen">The Nexter Part</section>
      <section className="h-screen">The Nextest Part</section>


    </div>
  )
}
