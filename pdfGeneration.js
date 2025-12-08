import express from "express";
import PDFDocument from "pdfkit";

const app = express();

app.get("/generate-ticket", (req, res) => {
  const doc = new PDFDocument({ margin: 50 });

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "inline; filename=ticket.pdf");

  doc.pipe(res);

  doc
    .fontSize(24)
    .text(" Bus Ticket Booking System", { align: "center" })
    .moveDown(1);

  doc.fontSize(16).text("Ticket Details", { underline: true });
  doc.moveDown(0.5);

  doc.fontSize(12)
    .text(`PNR Number: 8F6B29K1`)
    .text(`Booking Date: 12-Dec-2025`)
    .text(`Status: Confirmed`)
    .moveDown(1);

  doc.fontSize(16).text("Passenger Information", { underline: true });
  doc.moveDown(0.5);

  doc.fontSize(12)
    .text(`Passenger Name: John Doe`)
    .text(`Gender: Male`)
    .text(`Age: 28`)
    .moveDown(1);

  doc.fontSize(16).text("Journey Details", { underline: true });
  doc.moveDown(0.5);

  doc.fontSize(12)
    .text(`From: Chennai`)
    .text(`To: Bengaluru`)
    .text(`Bus Type: AC Sleeper`)
    .text(`Seat Number: U12`)
    .text(`Departure Date: 15-Dec-2025`)
    .text(`Departure Time: 10:30 PM`)
    .text(`Arrival Time: 05:00 AM`)
    .moveDown(1);

  doc.fontSize(16).text("Payment Information", { underline: true });
  doc.moveDown(0.5);

  doc.fontSize(12)
    .text(`Amount Paid: 950`)
    .text(`Payment Method: UPI`)
    .moveDown(1);

  doc
    .moveDown(2)
    .fontSize(14)
    .text("Thank you for choosing our service!", { align: "center" })
    .text("Wish you a safe and comfortable journey.", { align: "center" });

  doc.end();
});

app.listen(5000, () => console.log("PDF Ticket Server running on port 5000"));
