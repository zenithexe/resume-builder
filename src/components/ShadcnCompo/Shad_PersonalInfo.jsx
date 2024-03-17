import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import {
  updateName,
  updateProfession,
  updateEmail,
  updatePhone,
  updateWebsite,
} from "@/features/resume/resumeSlice";
import { ChevronRight } from "lucide-react";
import { Separator } from "../ui/separator";
import { Alert, AlertTitle } from "../ui/alert";
import { AlertCircle } from "lucide-react";

function Shad_PersonalInfo() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="mb-10">
        <h1 className="text-xl font-semibold leading-7 text-gray-900">
          Personal Information
        </h1>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Provide your personal information and contact details.
        </p>
      </div>
      <div className="mb-2 grid gap-3 md:grid-cols-2 grid-cols-1">
        <div>
          <Label>Name</Label>
          <Input
            onChange={(e) => dispatch(updateName(e.target.value))}
            type="text"
            placeholder="Enter Full Name"
          />
        </div>
        <div>
          <Label>Profession</Label>
          <Input
            onChange={(e) => dispatch(updateProfession(e.target.value))}
            type="text"
            placeholder="Enter Profession"
          />
          <p className="mt-1 text-sm font-mono leading-6 text-gray-600">
            Eg. Software Engineer, Student
          </p>
        </div>
      </div>
      <Separator className="my-5" />
      <div className="grid gap-3 md:grid-cols-2 grid-cols-1">
        <div>
          <Label>Email</Label>
          <Input
            onChange={(e) => dispatch(updateEmail(e.target.value))}
            type="email"
            placeholder="example@domain.com"
          />
        </div>
        <div>
          <Label>Phone</Label>
          <Input
            onChange={(e) => dispatch(updatePhone(e.target.value))}
            type="text"
            placeholder="+91 1234567890."
          />
        </div>
        <div>
          <Label>Website</Label>
          <Input
            onChange={(e) => dispatch(updateWebsite(e.target.value))}
            type="text"
            placeholder="example.com"
          />
        </div>
      </div>
      <Alert className="mt-4 bg-slate-100">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle className="">
          You can keep a field blank so that it doesn't appear on the Resume
          Output.
        </AlertTitle>
      </Alert>
    </>
  );
}

export default Shad_PersonalInfo;
