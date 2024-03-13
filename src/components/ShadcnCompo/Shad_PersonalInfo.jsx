import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useDispatch } from "react-redux";
import { updateName,updateProfession,updateEmail,updatePhone,updateWebsite } from "@/features/resume/resumeSlice";
function Shad_PersonalInfo() {

  const dispatch = useDispatch();

  return (
    <>
      <div className="mb-10">
        <h1 className="text-base font-semibold leading-7 text-gray-900">
          Personal Information
        </h1>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Provide your personal work experience or internships
        </p>
      </div>
      <div className="mb-2 grid gap-3 md:grid-cols-2 grid-cols-1">
        <div>
          <Label>Name</Label>
          <Input onChange={(e)=>dispatch(updateName(e.target.value))} type="text" placeholder="Enter Name" />
        </div>
        <div>
          <Label>Profession</Label>
          <Input onChange={(e)=>dispatch(updateProfession(e.target.value))} type="text" placeholder="Enter Profession" />
        </div>
      </div>
      <div className="grid gap-3 md:grid-cols-3 grid-cols-1">
        <div>
          <Label>Email</Label>
          <Input onChange={(e)=>dispatch(updateEmail(e.target.value))} type="email" placeholder="Enter Email" />
        </div>
        <div>
          <Label>Phone</Label>
          <Input onChange={(e)=>dispatch(updatePhone(e.target.value))} type="text" placeholder="Enter Phone No." />
        </div>
        <div>
          <Label>Website</Label>
          <Input onChange={(e)=>dispatch(updateWebsite(e.target.value))} type="text" placeholder="Enter Website" />
        </div>
      </div>
      <div className="mx-2 my-6 border-t border-dashed border-spacing-10 border-collapse border-gray-300"/>
    </>
  );
}

export default Shad_PersonalInfo;
