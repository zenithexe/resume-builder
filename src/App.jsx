import ResumeTemplate from "./components/ResumeTemplate";
import ResumeForm from "./components/Depre_ResumeForm";
import ShadResumeForm from "./components/Shad_ResumeForm";
import { AspectRatio } from "./components/ui/aspect-ratio";
import { ScrollArea } from "./components/ui/scroll-area";
import { Button } from "./components/ui/button";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function App() {
  const resumePDFRef = useRef(null);

  const handlePDF = async () => {
    const input = resumePDFRef.current;
    try {
      const canvas = await html2canvas(input,{scale:2});
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portraint",
        unit: "px",
        format: "a4",
      });

      const pdfWidth = pdf.internal.pageSize.setWidth(canvas.width);
      const pdfHeight = pdf.internal.pageSize.setHeight(canvas.height);
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;

      // const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      // const imgX = (pdfWidth - imgWidth * ratio) / 2;
      // const imgY = 30;
      pdf.addImage({
        imageData:imgData,
        format:"PNG",
        x:0,
        y:0,
        width:imgWidth,
        height:imgHeight
      }
      );
      pdf.save("Resume.pdf");
      console.log("PDF:: ",pdf);
      console.log("Canvas :: ",canvas);
      console.log("IMG ::", imgData);
    } catch (error) {
      console.log("Erro Generating PDF :", error);
    }
  };

  const print = () => {
    window.print()
  }

  return (
    <>
      <div className="grid h-screen bg-slate-50 grid-cols-1 2xl:grid-cols-5">
        <div className="justify-self-center rounded-lg 2xl:col-span-3">
          <ShadResumeForm />
        </div>
        <div className=" justify-self-center 2xl:col-span-2 2xl:mr-10">
          <div className="bg-white" ref={resumePDFRef}>
            <ResumeTemplate />
          </div>
        </div>
      </div>
      <Button onClick={handlePDF}>Print</Button>
      <Button onClick={print}>Print 2</Button>
    </>
  );
}

export default App;
