import { jsPDF } from "jspdf";

export type PdfSection = {
  heading?: string;
  rows: Array<{ label: string; value: string }>;
  note?: string;
};

export type PdfDoc = {
  title: string;
  subtitle?: string;
  source: string; // outil/page
  sections: PdfSection[];
  disclaimer?: string;
};

export function downloadPdf(doc: PdfDoc) {
  const pdf = new jsPDF({ unit: "pt", format: "a4" });
  const pageW = pdf.internal.pageSize.getWidth();
  const marginX = 56;
  let y = 64;

  // Brand header
  pdf.setFillColor(26, 61, 46);
  pdf.rect(0, 0, pageW, 6, "F");

  pdf.setFont("times", "bold");
  pdf.setFontSize(20);
  pdf.setTextColor(26, 61, 46);
  pdf.text("Placement-éthique.fr", marginX, y);

  pdf.setFont("times", "normal");
  pdf.setFontSize(10);
  pdf.setTextColor(120, 120, 120);
  pdf.text("Gestion de patrimoine éthique et responsable — sans greenwashing", marginX, y + 16);
  y += 56;

  pdf.setFont("times", "bold");
  pdf.setFontSize(18);
  pdf.setTextColor(20, 20, 20);
  const titleLines = pdf.splitTextToSize(doc.title, pageW - marginX * 2);
  pdf.text(titleLines, marginX, y);
  y += titleLines.length * 22;

  if (doc.subtitle) {
    pdf.setFont("times", "italic");
    pdf.setFontSize(11);
    pdf.setTextColor(100, 100, 100);
    const sub = pdf.splitTextToSize(doc.subtitle, pageW - marginX * 2);
    pdf.text(sub, marginX, y);
    y += sub.length * 14 + 8;
  }

  y += 8;
  pdf.setDrawColor(184, 137, 61);
  pdf.setLineWidth(1);
  pdf.line(marginX, y, pageW - marginX, y);
  y += 24;

  for (const section of doc.sections) {
    if (y > 720) {
      pdf.addPage();
      y = 64;
    }
    if (section.heading) {
      pdf.setFont("times", "bold");
      pdf.setFontSize(13);
      pdf.setTextColor(26, 61, 46);
      pdf.text(section.heading, marginX, y);
      y += 18;
    }
    pdf.setFont("times", "normal");
    pdf.setFontSize(11);
    pdf.setTextColor(40, 40, 40);
    for (const row of section.rows) {
      if (y > 770) {
        pdf.addPage();
        y = 64;
      }
      const label = row.label + " :";
      pdf.setFont("times", "normal");
      pdf.text(label, marginX, y);
      pdf.setFont("times", "bold");
      const valueLines = pdf.splitTextToSize(row.value, pageW - marginX * 2 - 200);
      pdf.text(valueLines, marginX + 220, y);
      y += Math.max(16, valueLines.length * 14);
    }
    if (section.note) {
      pdf.setFont("times", "italic");
      pdf.setFontSize(9.5);
      pdf.setTextColor(120, 120, 120);
      const noteLines = pdf.splitTextToSize(section.note, pageW - marginX * 2);
      y += 4;
      pdf.text(noteLines, marginX, y);
      y += noteLines.length * 12;
    }
    y += 14;
  }

  if (doc.disclaimer) {
    if (y > 720) {
      pdf.addPage();
      y = 64;
    }
    y += 8;
    pdf.setDrawColor(220, 220, 220);
    pdf.line(marginX, y, pageW - marginX, y);
    y += 14;
    pdf.setFont("times", "italic");
    pdf.setFontSize(9);
    pdf.setTextColor(110, 110, 110);
    const dl = pdf.splitTextToSize(doc.disclaimer, pageW - marginX * 2);
    pdf.text(dl, marginX, y);
    y += dl.length * 11;
  }

  // Footer
  const pageCount = pdf.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    pdf.setPage(i);
    pdf.setFont("times", "normal");
    pdf.setFontSize(9);
    pdf.setTextColor(150, 150, 150);
    pdf.text(
      `Placement-éthique.fr · ${doc.source} · ${new Date().toLocaleDateString("fr-FR")}`,
      marginX,
      pdf.internal.pageSize.getHeight() - 32,
    );
    pdf.text(`${i} / ${pageCount}`, pageW - marginX - 30, pdf.internal.pageSize.getHeight() - 32);
  }

  const slug = doc.source
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  pdf.save(`placement-ethique-${slug}.pdf`);
}

export function summarizeForEmail(doc: PdfDoc): string {
  const lines: string[] = [doc.title];
  if (doc.subtitle) lines.push(doc.subtitle);
  lines.push("");
  for (const s of doc.sections) {
    if (s.heading) lines.push(`— ${s.heading} —`);
    for (const r of s.rows) lines.push(`${r.label} : ${r.value}`);
    if (s.note) lines.push(`(${s.note})`);
    lines.push("");
  }
  if (doc.disclaimer) lines.push(doc.disclaimer);
  return lines.join("\n");
}
