import ResumeTemplate from "./components/ResumeTemplate";
import ResumeForm from "./components/Depre_ResumeForm";
import ShadResumeForm from "./components/Shad_ResumeForm";
import { AspectRatio } from "./components/ui/aspect-ratio";
import { ScrollArea } from "./components/ui/scroll-area";

function App() {
  return (
    <>
      <div className="grid h-screen bg-slate-50 grid-cols-1 2xl:grid-cols-5">
        <div className="justify-self-center rounded-lg 2xl:col-span-3">
          <ShadResumeForm />
        </div>
        <div className=" justify-self-center 2xl:col-span-2 2xl:mr-10">
          <ResumeTemplate />
        </div>
      </div>
    </>
  );
}

export default App;
