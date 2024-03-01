import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

function Shad_Experience() {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-base font-semibold leading-7 text-gray-900">
          Experience
        </h1>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Provide your personal work experience or internships
        </p>
      </div>
      <div className="">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Experience #1</Label>
            <Input type="text" placeholder="" />
          </div>
          <div>
            <Label>Company Name</Label>
            <Input type="text" placeholder="" />
          </div>
          <div>
            <Label>Timeline</Label>
            <Input type="text" placeholder="" />
          </div>
          <div>
            <Label>Description</Label>
            <Textarea type="text" placeholder="" />
          </div>
        </div>
      </div>
      <div className="mx-2 my-6 border-t border-dashed border-spacing-10 border-collapse border-gray-300"></div>
      <div className="">
        <div className="grid grid-cols-2 gap-4">
        <div>
            <Label>Experience #2</Label>
            <Input type="text" placeholder="" />
          </div>
          <div>
            <Label>Company Name</Label>
            <Input type="text" placeholder="" />
          </div>
          <div>
            <Label>Timeline</Label>
            <Input type="text" placeholder="" />
          </div>
          <div>
            <Label>Description</Label>
            <Textarea type="text" placeholder="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Shad_Experience;
