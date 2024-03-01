import { Label } from "../ui/label";
import { Input } from "../ui/input";
import React from "react";
import { Tabs, TabsContent, TabsList,TabsTrigger } from "../ui/tabs";
import Shad_PersonalInfo from "./Shad_PersonalInfo";
import Shad_Education from "./Shad_Education";
import Shad_Experience from "./Shad_Experience";
import Shad_Section from "./Shad_Section";


function ShadRForm() {
  return (
    <>
      <Shad_PersonalInfo/>
      <Shad_Education/>
      <Shad_Experience/>
      <Shad_Section/>
    </>
  );
}

export default ShadRForm;
