import ResumeTemplate from "./components/ResumeTemplate";
import ResumeForm from "./components/Depre_ResumeForm";
import ShadResumeForm from "./components/Shad_ResumeForm";
import { AspectRatio } from "./components/ui/aspect-ratio";
import { ScrollArea } from "./components/ui/scroll-area";
import { Button } from "./components/ui/button";
import { useRef } from "react";
import { PDFViewer, usePDF } from "@react-pdf/renderer";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "./documents/MyDocument.jsx";
import { useSelector } from "react-redux";
import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG,
} from "react-component-export-image";
import React from "react";
import { Download } from "lucide-react";

const CompoPrint = React.forwardRef((props, ref) => (
  <div className="w-fit" ref={ref}>
    <ResumeTemplate />
  </div>
));

// onClick={() =>
//   exportComponentAsPNG(compoRef, {
//     html2CanvasOptions: { scale: 2 },
//   })
// }

function App() {
  const compoRef = useRef();

  const state = useSelector((state) => state);

  return (
    <>
      <div className="grid h-screen bg-slate-50 grid-cols-1 2xl:grid-cols-10">
        <div className="flex flex-col items-center justify-self-center rounded-lg 2xl:col-span-5">
          <ShadResumeForm />
        </div>
        <div className="flex xl:flex-row flex-col  justify-self-center 2xl:justify-self-start 2xl:col-start-6 2xl:mr-10 ">
          <Download
            onClick={() =>
              exportComponentAsPNG(compoRef, {
                html2CanvasOptions: { scale: 2 },
              })
            }
            className=" self-end md:self-start mt-[20px] ml-[10px] mr-[10px] h-[30px] w-[30px] border-inherit text-white bg-slate-800 p-[6px] rounded-full cursor-pointer"
          />
          <CompoPrint ref={compoRef} />
        </div>
      </div>
    </>
  );
}

export default App;
