"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "GFS Builders Pakistan",
    description: "Construction Company",
    image: "./images/projects/gfs-pak.png",
    tag: ["All", "WordPress"],
    gitUrl: "https://gfsbuilders.com.pk/",
    previewUrl: "https://gfsbuilders.com.pk/",
  },
  {
    id: 2,
    title: "Go Quick Base",
    description: "SAA Product UK",
    image: "./images/projects/goquickbase.png",
    tag: ["All", "WordPress"],
    gitUrl: "https://goquickbase.com/",
    previewUrl: "https://goquickbase.com/",
  },
  {
    id: 3,
    title: "Karachi Beats",
    description: "Social Media News Agency",
    image: "./images/projects/karachi-beats.png",
    tag: ["All", "WordPress"],
    gitUrl: "https://karachibeats.com/",
    previewUrl: "https://karachibeats.com/",
  },
  {
    id: 4,
    title: "Hi Links",
    description: "Travel UI Next JS",
    image: "./images/projects/MextJS.png",
    tag: ["All", "Next JS"],
    gitUrl: "https://anosh-raza.github.io/travel/",
    previewUrl: "https://anosh-raza.github.io/travel/",
  },
  {
    id: 5,
    title: "Vape Universe UK",
    description: "Vape Ecommerce UK",
    image: "./images/projects/vapeunivers.png",
    tag: ["All", "WordPress"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Rover Jackets",
    description: "Leather Jacket Store UK",
    image: "./images/projects/rover.png",
    tag: ["All", "Shopify"],
    gitUrl: "https://roverjackets.com/",
    previewUrl: "https://roverjackets.com/",
  },
  {
    id: 7,
    title: "Vue JS",
    description: "Digital Marketing Agency",
    image: "./images/projects/vuejs.png",
    tag: ["All", "Vue JS"],
    gitUrl: "https://new521.000webhostapp.com/",
    previewUrl: "https://new521.000webhostapp.com/",
  },
  {
    id: 8,
    title: "Attendance System - PPH",
    description: "University Project",
    image: "./images/projects/PHP.png",
    tag: ["All", "PHP"],
    gitUrl: "https://new521.000webhostapp.com/",
    previewUrl: "https://new521.000webhostapp.com/",
  },
  {
    id: 9,
    title: "Design Studio Online",
    description: "Digital Marketing Agency",
    image: "./images/projects/design-studio.png",
    tag: ["All", "WordPress"],
    gitUrl: "https://www.designstudioonline.com/",
    previewUrl: "https://www.designstudioonline.com/",
  },
  {
    id: 10,
    title: "DG Concepts",
    description: "Digital Marketing Agency",
    image: "./images/projects/dg-con.png",
    tag: ["All", "WordPress"],
    gitUrl: "https://www.dgconcepts.com.pk/",
    previewUrl: "https://www.dgconcepts.com.pk/",
  },
  {
    id: 11,
    title: "Dilli Creative",
    description: "Online Agency UK",
    image: "./images/projects/dilli.png",
    tag: ["All", "WordPress"],
    gitUrl: "https://www.dilliecreative.com/",
    previewUrl: "https://www.dilliecreative.com/",
  },
  {
    id: 12,
    title: "GFS Builders Internation",
    description: "International Construction Company",
    image: "./images/projects/gfs-intl.png",
    tag: ["All", "WordPress"],
    gitUrl: "https://www.gfsbuilder.com/",
    previewUrl: "https://www.gfsbuilder.com/",
  },
  {
    id: 13,
    title: "Oasis Paper",
    description: "Paper Products",
    image: "./images/projects/oasis.png",
    tag: ["All", "WordPress"],
    gitUrl: "https://www.oasispaper.com/",
    previewUrl: "https://www.oasispaper.com/",
  },
  {
    id: 14,
    title: "Q Marble",
    description: "Marble Tiles UK",
    image: "./images/projects/qmarble.png",
    tag: ["All", "WordPress"],
    gitUrl: "https://www.qmarble-granite.co.uk/",
    previewUrl: "https://www.qmarble-granite.co.uk/",
  },
  {
    id: 15,
    title: "Rover Outfits",
    description: "Clothing Brand UK",
    image: "./images/projects/rover-outfits.png",
    tag: ["All", "WordPress"],
    gitUrl: "https://www.roveroutfits.com/",
    previewUrl: "https://www.roveroutfits.com/",
  },
  {
    id: 15,
    title: "Cordex Store",
    description: "Agri Firm UK",
    image: "./images/projects/cordex.png",
    tag: ["All", "Shopify"],
    gitUrl: "https://www.cordexstore.com/",
    previewUrl: "https://www.cordexstore.com/",
  },
  {
    id: 16,
    title: "The Heritage",
    description: "Skin Care UK",
    image: "./images/projects/heritage.png",
    tag: ["All", "Shopify"],
    gitUrl: "https://www.theheritage.se/",
    previewUrl: "https://www.theheritage.se/",
  },
  {
    id: 17,
    title: "Mush Editions",
    description: "Leather Jacket Store USA",
    image: "./images/projects/mush.png",
    tag: ["All", "Shopify"],
    gitUrl: "https://www.musheditions.com/",
    previewUrl: "https://www.musheditions.com/",
  },
  {
    id: 18,
    title: "Vehicle Partner",
    description: "Car Leasing UK",
    image: "./images/projects/zoho.png",
    tag: ["All", "Zoho"],
    gitUrl: "https://www.vehicle-partners.co.uk/",
    previewUrl: "https://www.vehicle-partners.co.uk/",
  },
  {
    id: 19,
    title: "Car Max Report",
    description: "VIN Number",
    image: "./images/projects/carmax.png",
    tag: ["All", "WordPress"],
    gitUrl: "https://www.carmaxreport.com/",
    previewUrl: "https://www.carmaxreport.com/",
  },
  {
    id: 20,
    title: "Q Leathers",
    description: "Leather Wholesaler",
    image: "./images/projects/qleathers.png",
    tag: ["All", "WordPress"],
    gitUrl: "https://www.qamarleathers.shop/",
    previewUrl: "https://www.qamarleathers.shop/",
  },
  {
    id: 21,
    title: "SacraSoul",
    description: "Health Products",
    image: "",
    tag: ["All", "Shopify"],
    gitUrl: "https://sacrasoul.com/",
    previewUrl: "https://sacrasoul.com/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="overflow-tabs text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
          <ProjectTag
            onClick={handleTagChange}
            name="WordPress"
            isSelected={tag === "WordPress"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Shopify"
            isSelected={tag === "Shopify"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Zoho"
            isSelected={tag === "Zoho"}
          />
        <ProjectTag
          onClick={handleTagChange}
          name="Next JS"
          isSelected={tag === "Next JS"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Vue JS"
          isSelected={tag === "Vue JS"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="PHP"
          isSelected={tag === "PHP"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
