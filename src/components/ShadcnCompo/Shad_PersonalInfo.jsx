import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

function Shad_PersonalInfo() {
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
          <Input type="text" placeholder="Enter Name" />
        </div>
        <div>
          <Label>Profession</Label>
          <Input type="text" placeholder="Enter Profession" />
        </div>
      </div>
      <div className="grid gap-3 md:grid-cols-3 grid-cols-1">
        <div>
          <Label>Email</Label>
          <Input type="email" placeholder="Enter Email" />
        </div>
        <div>
          <Label>Phone</Label>
          <Input type="text" placeholder="Enter Phone No." />
        </div>
        <div>
          <Label>Website</Label>
          <Input type="text" placeholder="Enter Website" />
        </div>
      </div>
      <div className="mx-2 my-6 border-t border-dashed border-spacing-10 border-collapse border-gray-300"/>
    </>
  );
}

export default Shad_PersonalInfo;
