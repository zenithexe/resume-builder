import { Label } from "../ui/label";
import { Input } from "../ui/input";
import React from "react";
import { Tabs, TabsContent, TabsList,TabsTrigger } from "../ui/tabs";
import Shad_PersonalInfo from "./Shad_PersonalInfo";
import Shad_Education from "./Shad_Education";


function ShadRForm() {
  return (
    <>
      <Shad_PersonalInfo/>
      <Shad_Education/>
    </>
  );
}

export default ShadRForm;
