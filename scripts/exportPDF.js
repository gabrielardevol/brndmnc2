var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var dpi = 96; // Assuming a common DPI value

var windowWidthMm = (windowWidth / dpi) * 25.4;
var windowHeightMm = (windowHeight / dpi) * 25.4;

function exportToPdf() {
  console.log("pdf1")

    elementToExport = document.querySelector("#rrr-donuts")
    window.jsPDF = window.jspdf.jsPDF;
    var pdf = new jsPDF('l', 'px', [ windowHeight, windowWidth]);

    html2canvas(elementToExport, { useCORS: true }).then(function(canvas) {
      var imgData = canvas.toDataURL('image/jpeg');
      var rect = elementToExport.getBoundingClientRect();
      console.log(rect)
      console.log("pdf2")

      pdf.addImage(imgData, 'JPEG', rect.left, rect.top, rect.width, rect.height);
      pdf.save('dashboard.pdf');
    }
  );
}