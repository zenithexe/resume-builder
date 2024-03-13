import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { useDispatch} from "react-redux";
import { updateExperience1, updateCompany1, updateExDescription1,updateExTime1,updateExperience2, updateCompany2, updateExDescription2, updateExTime2  } from "@/features/resume/resumeSlice";

function Shad_Experience() {

  const dispatch = useDispatch();

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
            <Input onChange={(e)=>dispatch(updateExperience1(e.target.value))} type="text" placeholder="" />
          </div>
          <div>
            <Label>Company Name</Label>
            <Input onChange={(e)=>dispatch(updateCompany1(e.target.value))} type="text" placeholder="" />
          </div>
          <div>
            <Label>Timeline</Label>
            <Input onChange={(e)=>dispatch(updateExTime1(e.target.value))} type="text" placeholder="" />
          </div>
          <div>
            <Label>Description</Label>
            <Textarea onChange={(e)=>dispatch(updateExDescription1(e.target.value))} type="text" placeholder="" />
          </div>
        </div>
      </div>
      <div className="mx-2 my-6 border-t border-dashed border-spacing-10 border-collapse border-gray-300"></div>
      <div className="">
        <div className="grid grid-cols-2 gap-4">
        <div>
            <Label>Experience #1</Label>
            <Input onChange={(e)=>dispatch(updateExperience2(e.target.value))} type="text" placeholder="" />
          </div>
          <div>
            <Label>Company Name</Label>
            <Input onChange={(e)=>dispatch(updateCompany2(e.target.value))} type="text" placeholder="" />
          </div>
          <div>
            <Label>Timeline</Label>
            <Input onChange={(e)=>dispatch(updateExTime2(e.target.value))} type="text" placeholder="" />
          </div>
          <div>
            <Label>Description</Label>
            <Textarea onChange={(e)=>dispatch(updateExDescription2(e.target.value))} type="text" placeholder="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Shad_Experience;
