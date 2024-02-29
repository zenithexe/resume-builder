import React from "react";
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

function Shad_Education() {
  return (
    <>
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
          <Input type="text" placeholder="" />
          <Label>Instituition Name</Label>
          <Input type="text" placeholder="" />
          <Label>Description</Label>
          <Textarea type="text" placeholder="" />
          <Label>Timeline</Label>
          <Input type="text" placeholder="" />
        </div>

        <div className="">
          <Label>Education 2</Label>
          <Input type="text" placeholder="" />
          <Label>Instituition Name</Label>
          <Input type="text" placeholder="" />
          <Label>Description</Label>
          <Textarea type="text" placeholder="" />
          <Label>Timeline</Label>
          <Input type="text" placeholder="" />
        </div>
      </div>
      <div className="mx-2 my-6 border-t border-dashed border-spacing-10 border-collapse border-gray-300"/>
    </>
  );
}

export default Shad_Education;
