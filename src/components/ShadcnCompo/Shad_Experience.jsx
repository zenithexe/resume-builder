import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { useDispatch } from "react-redux";
import {
  updateExperience1,
  updateCompany1,
  updateExDescription1,
  updateExTime1,
  updateExperience2,
  updateCompany2,
  updateExDescription2,
  updateExTime2,
} from "@/features/resume/resumeSlice";
import { Separator } from "../ui/separator";
import { AlertCircle } from "lucide-react";
import { Alert,AlertTitle,AlertDescription } from "../ui/alert";

function Shad_Experience() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="mb-10">
        <h1 className="text-xl font-semibold leading-7 text-gray-900">
          Work Experience
        </h1>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Provide your professional work experience or internships.
        </p>
      </div>
      <div className="">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label>Experience Position</Label>
            <Input
              onChange={(e) => dispatch(updateExperience1(e.target.value))}
              type="text"
              placeholder="Enter Experience Position"
            />
          </div>
          <div>
            <Label>Company Name</Label>
            <Input
              onChange={(e) => dispatch(updateCompany1(e.target.value))}
              type="text"
              placeholder="Enter Company Name"
            />
          </div>
          <div>
            <Label>Description</Label>
            <Textarea
              onChange={(e) => dispatch(updateExDescription1(e.target.value))}
              type="text"
              placeholder="Details about your professional experience."
            />
          </div>
          <div>
            <Label>Timeline</Label>
            <Input
              onChange={(e) => dispatch(updateExTime1(e.target.value))}
              type="text"
              placeholder="Feb, 2024 - 2023"
              className="w-1/2"
            />
          </div>
        </div>
      </div>
      <Separator className="my-10" />
      <div className="">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label>Experience Position</Label>
            <Input
              onChange={(e) => dispatch(updateExperience2(e.target.value))}
              type="text"
              placeholder="Enter Experience Position"
            />
          </div>
          <div>
            <Label>Company Name</Label>
            <Input
              onChange={(e) => dispatch(updateCompany2(e.target.value))}
              type="text"
              placeholder="Enter Company Name"
            />
          </div>
          <div>
            <Label>Description</Label>
            <Textarea
              onChange={(e) => dispatch(updateExDescription2(e.target.value))}
              type="text"
              placeholder="Details about your professional experience."
            />
          </div>
          <div>
            <Label>Timeline</Label>
            <Input
              onChange={(e) => dispatch(updateExTime2(e.target.value))}
              type="text"
              placeholder="Nov, 2023 - 2021"
              className="w-1/2"
            />
          </div>
        </div>
      </div>
      <Alert className="mt-4 bg-slate-100">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle className="">You can mention your projects, incase you are a student and has no work experience.</AlertTitle>
      </Alert>
    </>
  );
}

export default Shad_Experience;
