// src/components/ProjectShowcase.js
import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const projects = [
  {
    id: 1,
    title:
      "Structural analysis of Unmanned Aerial Vehicle under various extreme conditions using ANSYS (FEM Solver).",
    shortTitle: "project 1",
    description: `
      This project focuses on the structural analysis and design validation of a lightweight Unmanned Aerial Vehicle (UAV) using Finite Element Method (FEM) simulations.

      The objective was to evaluate the mechanical performance of major UAV components including the drone arm, base plate, combined plate assembly, quadcopter and hexacopter frames, and landing gear under various static loading and boundary conditions.

      Each part was modeled using CAD tools and analyzed in ANSYS Workbench to determine total deformation, equivalent stress, equivalent elastic strain, strain energy, and maximum shear stress.
    `,
    images: ["/pro1img1.png", "/pro1img2.jpg", "/pro1img3.png"],
  },
  // You can add more projects here
  {
    id: 2,
    title:
      "Fluid flow Analysis of Unmanned Aerial Vehicle under Extreme Ambient conditions.",
    shortTitle: "project 2",
    description: `

Computational Fluid Dynamics (CFD) analysis of a quadcopter Unmanned Aerial Vehicle (UAV) frame subjected to varying ambient conditions. 

The objective of the study was to assess the aerodynamic performance including lift, drag, pressure distribution, and velocity profiles of the UAV using ANSYS Fluent.

It also included preliminary CFD investigations on simplified geometries such as pipe flow, cylinders, and nozzles to validate solver settings and meshing approaches.


    `,
    images: ["/pro2img1.jpg", "/pro2img2.jpg", "/pro2img3.jpg"],
  },
  {
    id: 3,
    title:
      "Effect of Biomass Fuel on Thermal Efficiency of Four Pan Jaggery Plant ",
    shortTitle: "project 3",
    description: `
Jaggery production is traditionally an energy-intensive process, predominantly dependent on inefficient open-pan furnace systems that rely on biomass combustion. This numerical study aims to improve the thermal efficiency of a four-pan jaggery furnace through Computational Fluid Dynamics (CFD) modeling and design optimization.

The study focuses on modifying the flue gas duct geometry and analyzing flue gas dynamics to improve heat transfer from combustion gases to the jaggery pans. Simulations were carried out using CFD to evaluate furnace performance with three different biomass fuels: bamboo pellets, coal, and low-grade wood, based on their impact on heat absorption by the jaggery pans.

The integration of CFD tools for furnace design optimization, coupled with strategic improvements in biomass fuel selection, air preheating, and heat transfer mechanisms, presents a scalable pathway for enhancing energy efficiency in small-scale jaggery units. These advancements not only reduce operational fuel costs but also contribute to a more sustainable and profitable jaggery production process.
    `,
    images: ["/pro3img1.png", "/pro3img2.png", "/pro3img3.png"],
  },

  {
    id: 4,
    title: "Predictions of Emission from CNG Burners with and without Swirl",
    shortTitle: "project 4",
    description: `
Numerical simulations were conducted to evaluate the performance of compressed natural gas (CNG) Venturi burners with and without swirl for a heat input of 1200 W (based on the net heating rate). The simulations employed the open-source CFD platform OpenFOAM®, which utilizes the finite volume method (FVM) for solving governing equations.

The introduction of swirl in CNG Venturi burners enhances flame stability and temperature uniformity, though it also influences NO formation in the post-combustion region. These insights are valuable for optimizing low-emission, high-efficiency burner designs using OpenFOAM-based numerical modeling.
    `,
    images: ["/pro4img1.png", "/pro4img2.png", "/pro4img3.png"],
    note: "Temperature contours on the plane passing through the burner",
  },
  {
    id: 5,
    title:
      "Sustainable Energy Generation: An Adiabatic Compressed Air Energy Storage System for Renewable Energy Resources",
    shortTitle: "project 5",
    description: `
In this study, a one-dimensional model of an Adiabatic Compressed Air Energy Storage (A-CAES) system is developed. The model captures the transient behavior of thermal storage, the air cavern, and the compression/expansion stages. 

Results show that an overall system efficiency of 65% can be achieved when the Thermal Energy Storage (TES) component operates with over 90% efficiency. Integrating A-CAES with variable and unsteady renewable sources can help stabilize output and enhance power delivery.
    `,
    images: ["/pro5.png"],
    note: "Schematic of Adiabatic Compression Air Energy Storage (A-CAES) system",
  },
];

const IndustrialProjects = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <div className="container my-4">
      <div className="row">
        {/* Project List */}
        <div className="col-md-3">
          <ul className="list-group">
            {projects.map((project, index) => (
              <li
                key={project.id}
                className={`list-group-item ${
                  selectedProject.id === project.id ? "active" : ""
                }`}
                onClick={() => setSelectedProject(project)}
                style={{ cursor: "pointer" }}
              >
                {project.shortTitle}
              </li>
            ))}
          </ul>
        </div>

        {/* Carousel and Description */}
        <div className="col-md-9">
          {/* Carousel */}
          <Carousel className="mb-3">
            {selectedProject.images.map((img, idx) => (
              <Carousel.Item key={idx}>
                <img
                  className="d-block w-100"
                  src={img}
                  alt={`Slide ${idx + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>

          {selectedProject.note && (
            <div className="mb-3 px-3 py-2 border-start border-4 border-primary bg-white shadow-sm">
              <strong>Note:</strong> {selectedProject.note}
            </div>
          )}

          {/* Description */}
          <div className="border rounded p-3 bg-light">
            <h5>{selectedProject.title}</h5>
            <p style={{ whiteSpace: "pre-line" }}>
              {selectedProject.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrialProjects;
