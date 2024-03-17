import { Label } from "./ui/label";
import { Input } from "./ui/input";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Shad_PersonalInfo from "./ShadcnCompo/Shad_PersonalInfo";
import Shad_Education from "./ShadcnCompo/Shad_Education";
import Shad_Experience from "./ShadcnCompo/Shad_Experience";
import Shad_Section from "./ShadcnCompo/Shad_Section";
import { ScrollArea } from "./ui/scroll-area";

import SiteHeader from "./othercompo/SiteHeader";

function ShadResumeForm() {
  return (
    <>
      <div className="lg:w-[700px]">
        <SiteHeader />
        <Tabs defaultValue="personal" className="">
          <TabsList className="grid  grid-cols-4">
            <TabsTrigger value="personal">Personal</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="sections">Sections</TabsTrigger>
          </TabsList>
          <div className="m-5">
            <TabsContent value="personal">
              <Shad_PersonalInfo />
            </TabsContent>

            <TabsContent value="education">
              <Shad_Education />
            </TabsContent>

            <TabsContent value="experience">
              <Shad_Experience />
            </TabsContent>

            <TabsContent value="sections">
              <ScrollArea className="">
                <Shad_Section />
              </ScrollArea>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </>
  );
}

export default ShadResumeForm;
