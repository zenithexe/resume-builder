import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personal: {
    name: "Your Name",
    profession: "Profession",
    email: "yourmail@xyz.com",
    phone: "+91 1234567890",
    website: "example.com",
  },
  education: [
    {
      education: "Course/Degree Name",
      institute: "Institute/College Name",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores adipisci pariatur quasi voluptate vel placeat modi.",
      time: "2021-Present",
    },
    {
      education: "Course/Degree Name",
      institute: "Institute/College Name",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores adipisci pariatur quasi voluptate vel placeat modi.",
      time: "2021-Present",
    },
  ],
  experience: [
    {
      experience: "Experience Position",
      company: "Company Name",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores adipisci pariatur quasi voluptate vel placeat modi.",
      time: "2021-Present",
    },
    {
      experience: "Experience Position",
      company: "Company Name",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores adipisci pariatur quasi voluptate vel placeat modi.",
      time: "2021-Present",
    },
  ],
  sections: [
    {
      heading: "Heading",
      terms: ["Term1", "Term2"],
    },
    {
      heading: "Heading",
      terms: ["Term1", "Term2"],
    },
    {
      heading: "Heading",
      terms: ["Term1", "Term2"],
    },
  ],
};
