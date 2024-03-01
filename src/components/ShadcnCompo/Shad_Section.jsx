import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

function Shad_Section() {
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
          <Input type="text" placeholder="" />

          <Label>Terms</Label>
          <Input type="text" placeholder="" />
        </div>

        <div className="grid grid-cols-1 gap-4">
          <Label>Heading 2</Label>
          <Input type="text" placeholder="" />

          <Label>Terms</Label>
          <Input type="text" placeholder="" />
        </div>

        <div className="grid grid-cols-1 gap-4">
          <Label>Heading 3</Label>
          <Input type="text" placeholder="" />

          <Label>Terms</Label>
          <Input type="text" placeholder="" />
        </div>
      </div>
    </>
  );
}

export default Shad_Section;
