import ResumeTemplate from "./components/ResumeTemplate";
import ResumeForm from "./components/ResumeForm";
import ShadRForm from "./components/ShadcnCompo/ShadRForm";
import { AspectRatio } from "./components/ui/aspect-ratio";
import { ScrollArea } from "./components/ui/scroll-area";

const personalTemplate = {
  name: "Your Name",
  profession: "Profession",
  email: "yourmail@xyz.com",
  phone: "+91 1234567890",
  website: "example.com",
};

const educationTemplate = {
  education: "Course/Degree Name",
  institute: "Institute/College Name",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores adipisci pariatur quasi voluptate vel placeat modi.",
  time: "2021-Present",
};

const experienceTemplate = {
  experience: "Experience Position",
  company: "Company Name",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores adipisci pariatur quasi voluptate vel placeat modi.",
  time: "2021-Present",
};

const sectionTemplate = {
  heading: "Heading",
  terms: ["Term1", "Term2"],
};

function App() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 2xl:grid-cols-2">
        <ScrollArea className="h-screen w-auto">
          <div className="ml-4 mr-4">
            {/* <ResumeForm /> */}
            <ShadRForm />
          </div>
        </ScrollArea>
        <div className="">
          <AspectRatio className="mr-2 justify-self-end">
            <ResumeTemplate/>
          </AspectRatio>
        </div>
      </div>
    </>
  );
}

export default App;
