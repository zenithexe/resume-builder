import React, { useRef, useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "../ui/tabs";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { RefreshCcw } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { updateEdDescription1, updateEdTime1, updateEducation1, updateInstitute1,updateEdDescription2, updateEdTime2, updateEducation2, updateInstitute2 } from "@/features/resume/resumeSlice";

function Shad_Education() {

  const dispatch = useDispatch();

  return (
    <>
      <form>
        <div className="mb-10">
          <h1 className="text-base font-semibold leading-7 text-gray-900">
            Education
          </h1>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Provide your personal work experience or internships
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <Label>Education 1</Label>
            <Input onChange={(e)=>dispatch(updateEducation1(e.target.value))} type="text" placeholder="" />
            <Label>Instituition Name</Label>
            <Input onChange={(e)=>dispatch(updateInstitute1(e.target.value))} type="text" placeholder="" />
            <Label>Description</Label>
            <Textarea onChange={(e)=>dispatch(updateEdDescription1(e.target.value))} type="text" placeholder="" />
            <Label>Timeline</Label>
            <Input onChange={(e)=>dispatch(updateEdTime1(e.target.value))} type="text" placeholder="" />
          </div>

          <div className="">
            <Label>Education 1</Label>
            <Input onChange={(e)=>dispatch(updateEducation2(e.target.value))} type="text" placeholder="" />
            <Label>Instituition Name</Label>
            <Input onChange={(e)=>dispatch(updateInstitute2(e.target.value))} type="text" placeholder="" />
            <Label>Description</Label>
            <Textarea onChange={(e)=>dispatch(updateEdDescription2(e.target.value))} type="text" placeholder="" />
            <Label>Timeline</Label>
            <Input onChange={(e)=>dispatch(updateEdTime2(e.target.value))} type="text" placeholder="" />
          </div>
        </div>
        <div className="mx-2 my-6 border-t border-dashed border-spacing-10 border-collapse border-gray-300"></div>
      </form>
    </>
  );
}

export default Shad_Education;
