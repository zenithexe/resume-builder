import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { useDispatch } from "react-redux";
import {
  updateSecHeading1,
  updateSecHeading2,
  updateSecHeading3,
  updateTerms1,
  updateTerms2,
  updateTerms3,
  updateIsList1,
  updateIsList2,
  updateIsList3
} from "@/features/resume/resumeSlice";


function Shad_Section() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="mb-10">
        <h1 className="text-base font-semibold leading-7 text-gray-900">
          Sections
        </h1>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Provide information, which be displayed as tags, eg. Skills,
          Languages, etc.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="grid grid-cols-1 gap-4">
          <Label>Heading 1</Label>
          <Input
            onChange={(e) => dispatch(updateSecHeading1(e.target.value))}
            type="text"
            placeholder=""
          />

          <Label>Terms</Label>
          <Input
            onChange={(e) => dispatch(updateTerms1(e.target.value.split(",")))}
            type="text"
            placeholder=""
          />
          <div className="flex gap-2">
            <input type="checkbox" onClick={(e)=>dispatch(updateIsList1(e.target.checked))}></input>
            <Label>Display as List</Label>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <Label>Heading 2</Label>
          <Input
            onChange={(e) => dispatch(updateSecHeading2(e.target.value))}
            type="text"
            placeholder=""
          />

          <Label>Terms</Label>
          <Input
            onChange={(e) => dispatch(updateTerms2(e.target.value.split(",")))}
            type="text"
            placeholder=""
          />
          <div className="flex gap-2">
            <input type="checkbox" onClick={(e)=>dispatch(updateIsList2(e.target.checked))}></input>
            <Label>Display as List</Label>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <Label>Heading 3</Label>
          <Input
            onChange={(e) => dispatch(updateSecHeading3(e.target.value))}
            type="text"
            placeholder=""
          />

          <Label>Terms</Label>
          <Input
            onChange={(e) => dispatch(updateTerms3(e.target.value.split(",")))}
            type="text"
            placeholder=""
          />
          <div className="flex gap-2">
            <input type="checkbox" onClick={(e)=>dispatch(updateIsList3(e.target.checked))}></input>
            <Label>Display as List</Label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shad_Section;
