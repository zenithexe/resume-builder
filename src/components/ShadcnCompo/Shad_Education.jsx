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
import {
  updateEdDescription1,
  updateEdTime1,
  updateEducation1,
  updateInstitute1,
  updateEdDescription2,
  updateEdTime2,
  updateEducation2,
  updateInstitute2,
} from "@/features/resume/resumeSlice";
import { Separator } from "../ui/separator";
import { Alert, AlertTitle, AlertDescription } from "../ui/alert";
import { AlertCircle } from "lucide-react";

function Shad_Education() {
  const dispatch = useDispatch();

  return (
    <>
      <form>
        <div className="mb-10">
          <h1 className="text-xl font-semibold leading-7 text-gray-900">
            Educational Details
          </h1>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Provide your Educational Details.
          </p>
        </div>
        <div className="">
          <div className="grid md:grid-cols-2 gap-3">
            <div>
              <Label>Educational Degree</Label>
              <Input
                onChange={(e) => dispatch(updateEducation1(e.target.value))}
                type="text"
                placeholder="Enter Degree Name"
              />
      
            </div>
            <div>
              <Label>Instituition Name</Label>
              <Input
                onChange={(e) => dispatch(updateInstitute1(e.target.value))}
                type="text"
                placeholder="Enter Institution Name"
              />
            </div>
            <div>
              <Label>Description</Label>
              <Textarea
                onChange={(e) => dispatch(updateEdDescription1(e.target.value))}
                type="text"
                placeholder="Details about your qualification."
              />
            </div>
            <div>
              <Label>Timeline</Label>
              <Input
                onChange={(e) => dispatch(updateEdTime1(e.target.value))}
                type="text"
                placeholder="Present - 2021"
                className="w-1/2"
              />
            </div>
          </div>
          <Separator className="my-5" />

          <div className="grid md:grid-cols-2 gap-3">
            <div>
              <Label>Educational Degree</Label>
              <Input
                onChange={(e) => dispatch(updateEducation2(e.target.value))}
                type="text"
                placeholder="Enter Degree Name"
              />
            </div>
            <div>
              <Label>Instituition Name</Label>
              <Input
                onChange={(e) => dispatch(updateInstitute2(e.target.value))}
                type="text"
                placeholder="Enter Institution Name"
              />
            </div>
            <div>
              <Label>Description</Label>
              <Textarea
                onChange={(e) => dispatch(updateEdDescription2(e.target.value))}
                type="text"
                placeholder="Details about your qualification."
              />
            </div>
            <div>
              <Label>Timeline</Label>
              <Input
                onChange={(e) => dispatch(updateEdTime2(e.target.value))}
                type="text"
                placeholder="2021 - 2018"
                className="w-1/2"
              />
            </div>
          </div>
        </div>
      </form>
      <Alert className="mt-4 bg-slate-100">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle className="">You can mention your notable achievements in the description.</AlertTitle>
      </Alert>
    </>
  );
}

export default Shad_Education;
