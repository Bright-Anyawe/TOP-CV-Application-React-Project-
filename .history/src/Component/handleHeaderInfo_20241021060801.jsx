import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export function HandleHeaderInfo({
  setHideContactEdit,
  setHideForEducationEdit,
  setHideProfessionalEdit,
}) {
  const [loader, setLoader] = useState(false);

  const downloadPDF = () => {
    setLoader(true);

    const capture = document.querySelector("#displayMainContainer");
    console.log(capture);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");
      const docWidth = doc.internal.pageSize.getWidth();
      const docHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, docWidth, docHeight);
      doc.save("Cv application");
    });
    setHideContactEdit(true);
    setHideForEducationEdit(true);
    setHideProfessionalEdit(true)
  };

  return (
    <>
      <header>
        <h1 className="headText">Cv builder </h1>
        <div className="gitHubSvgContainer">
          <a href="https://github.com/Bright-Anyawe/TOP-CV-Application-React-Project-">
          
          </a>
          
        </div>
        <div className="headBtnContainer">
          <button onClick={downloadPDF}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>tray-arrow-down</title>
              <path d="M2 12H4V17H20V12H22V17C22 18.11 21.11 19 20 19H4C2.9 19 2 18.11 2 17V12M12 15L17.55 9.54L16.13 8.13L13 11.25V2H11V11.25L7.88 8.13L6.46 9.55L12 15Z" />
            </svg>
            Download
          </button>
        </div>
      </header>
    </>
  );
}
