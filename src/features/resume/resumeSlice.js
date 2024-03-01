import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personal: {
    name: "Your Name",
    profession: "Profession",
    email: "yourmail@xyz.com",
    phone: "+91 1234567890",
    website: "example.com",
  },
  education: {
    edu1:{
      education: "Course/Degree Name",
      institute: "Institute/College Name",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores adipisci pariatur quasi voluptate vel placeat modi.",
      time: "2021-Present",
    },
    edu2:{
      education: "Course/Degree Name",
      institute: "Institute/College Name",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores adipisci pariatur quasi voluptate vel placeat modi.",
      time: "2021-Present",
    },
  },
  experience: {
    exp1:{
      experience: "Experience Position",
      company: "Company Name",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores adipisci pariatur quasi voluptate vel placeat modi.",
      time: "2021-Present",
    },
    exp2:{
      experience: "Experience Position",
      company: "Company Name",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores adipisci pariatur quasi voluptate vel placeat modi.",
      time: "2021-Present",
    },
  },
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

export const resumeSlice = createSlice({
  name:"resume",
  initialState,
  reducers:{
    updateName: (state,actions)=>{
      state.personal.name=actions.payload.name
    },

    updateProfession: (state,actions)=>{
      state.personal.profession=actions.payload.profession;
    },

    updateEmail: (state,actions)=>{
      state.personal.email=actions.payload.email;
    },

    updatePhone: (state,actions)=>{
      state.personal.phone=actions.payload.phone;
    },

    updateWebsite: (state,actions)=>{
      state.personal.website=actions.payload.website;
    },

    updateEducation1: (state,actions)=>{
      state.education.edu1.education=actions.payload.education;
    },

    updateInstitute1: (state,actions)=>{
      state.education.edu1.institute=actions.payload.institute;
    },

    updateEdDescription1: (state,actions)=>{
      state.education.edu1.description=actions.payload.description;
    },

    updateEdTime1: (state,actions)=>{
      state.education.edu1.time=actions.payload.time;
    },

    updateEducation2: (state,actions)=>{
      state.education.edu2.education=actions.payload.education;
    },

    updateInstitute2: (state,actions)=>{
      state.education.edu2.institute=actions.payload.institute;
    },

    updateEdDescription2: (state,actions)=>{
      state.education.edu2.description=actions.payload.description;
    },

    updateEdTime2: (state,actions)=>{
      state.education.edu2.time=actions.payload.time;
    },

    updateExperience1: (state,actions)=>{
      state.experience.exp1.experience=actions.payload.experience;
    },

    updateCompany1: (state,actions)=>{
      state.experience.exp1.company=actions.payload.company;
    },

    updateExDescription1: (state,actions)=>{
      state.experience.exp1.description=actions.payload.description;
    },

    updateExTime1: (state,actions)=>{
      state.experience.exp1.time=actions.payload.time;
    },

    updateExperience2: (state,actions)=>{
      state.experience.exp2.experience=actions.payload.experience;
    },

    updateCompany2: (state,actions)=>{
      state.experience.exp2.company=actions.payload.company;
    },

    updateExDescription2: (state,actions)=>{
      state.experience.exp2.description=actions.payload.description;
    },

    updateExTime2: (state,actions)=>{
      state.experience.exp2.time=actions.payload.time;
    },

    updateSecHeading1:(state,actions)=>{
      state.sections[0].heading=actions.payload.heading;
    },

    updateTerms1:(state,actions)=>{
      state.sections[0].terms.push(actions.payload)
    },

    updateSecHeading2:(state,actions)=>{
      state.sections[1].heading=actions.payload.heading;
    },

    updateTerms2:(state,actions)=>{
      state.sections[1].terms.push(actions.payload)
    },

    updateSecHeading3:(state,actions)=>{
      state.sections[2].heading=actions.payload.heading;
    },

    updateTerms3:(state,actions)=>{
      state.sections[2].terms.push(actions.payload)
    }
  }
})

export const {
  updateName,
  updateProfession,
  updateEmail,
  updatePhone,
  updateWebsite,
  updateEducation1,
  updateEducation2,
  updateInstitute1,
  updateInstitute2,
  updateEdDescription1,
  updateEdDescription2,
  updateEdTime1,
  updateEdTime2,
  updateExperience1,
  updateExperience2,
  updateCompany1,
  updateCompany2,
  updateExDescription1,
  updateExDescription2,
  updateExTime1,
  updateExTime2,
  updateSecHeading1,
  updateSecHeading2,
  updateSecHeading3,
  updateTerms1,
  updateTerms2,
  updateTerms3
} = resumeSlice.actions

export default resumeSlice.reducer
