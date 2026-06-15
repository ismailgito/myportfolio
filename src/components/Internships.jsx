// src/components/Internships.jsx
"use client";

import { useState } from "react";
import { FaDownload, FaBuilding, FaCalendarAlt, FaUserGraduate } from "react-icons/fa";
import SectionHeading from "./ui/SectionHeading";
import Card from "./ui/Card";
import Button from "./ui/Button";

export default function Internships() {
  const [showModal, setShowModal] = useState(false);

  const internships = [
    {
      id: 1,
      title: "Sales & Marketing Intern",
      company: "Ifelse Techsmart Solutions Pvt Ltd",
      location: "Chennai, India",
      period: "16th August 2023 - 8th November 2023",
      duration: "12 Weeks",
      registrationNo: "2113181096157",
      course: "B.B.A - Business Administration",
      college: "The New College",
      certificateDate: "19th January 2024",
      issuedBy: "Mohammed Aadil H., CEO",
      pdf: "/Internship.pdf",
      skills: ["Sales Pitching", "Marketing Copy", "Lead Qualification", "Account Management", "Market Research"],
    },
  ];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = internships[0].pdf;
    link.download = "Mohammed_Ismail_Internship_Certificate.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <section id="internships" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full scroll-mt-24">
        <SectionHeading
          badge="Work History"
          title="Professional Internships"
          subtitle="Practical industry placements applying sales psychology, copy testing, and lead acquisition metrics in real corporate setups."
        />

        <div className="max-w-4xl mx-auto">
          {internships.map((internship) => (
            <Card
              key={internship.id}
              variant="yellow"
              className="p-0 overflow-hidden border border-[#333333]"
            >
              {/* Header */}
              <div className="bg-surface border-b border-[#333333] px-6 py-5 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h4 className="text-xl font-headline font-bold text-apptext leading-tight">
                    {internship.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-2">
                    <FaBuilding size={12} className="text-accent" />
                    <span className="electric-tag electric-tag-accent">
                      {internship.company}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    onClick={() => setShowModal(true)}
                    variant="yellow"
                    className="text-xs py-2 px-4"
                  >
                    View PDF
                  </Button>
                  <Button
                    onClick={handleDownload}
                    variant="outline"
                    className="text-xs py-2 px-4 border-cta/30 text-cta hover:bg-cta/10 hover:border-cta"
                  >
                    <FaDownload className="mr-1.5 inline" size={11} /> Download
                  </Button>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 bg-bg border border-[#333333] p-4">
                    <FaCalendarAlt className="text-accent mt-1 shrink-0" size={15} />
                    <div>
                      <p className="text-[9px] font-headline font-bold text-muted uppercase tracking-wider">Duration & Period</p>
                      <p className="text-xs sm:text-sm font-headline font-semibold text-apptext mt-0.5">
                        {internship.duration} ({internship.period})
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-bg border border-[#333333] p-4">
                    <FaUserGraduate className="text-accent mt-1 shrink-0" size={15} />
                    <div>
                      <p className="text-[9px] font-headline font-bold text-muted uppercase tracking-wider">Registration ID</p>
                      <p className="text-xs sm:text-sm font-headline font-semibold text-apptext mt-0.5">
                        ID: {internship.registrationNo}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 bg-bg border-l-4 border-accent space-y-2.5 font-body text-xs sm:text-sm text-muted">
                  <p><span className="font-headline font-bold text-apptext uppercase tracking-wider text-xs">Course:</span> {internship.course}</p>
                  <p><span className="font-headline font-bold text-apptext uppercase tracking-wider text-xs">Institution:</span> {internship.college}</p>
                  <p><span className="font-headline font-bold text-apptext uppercase tracking-wider text-xs">Completion Date:</span> {internship.certificateDate}</p>
                  <p><span className="font-headline font-bold text-apptext uppercase tracking-wider text-xs">Verified Authority:</span> {internship.issuedBy}</p>
                </div>

                {/* Skills */}
                <div>
                  <h5 className="text-[10px] font-headline font-bold text-muted uppercase tracking-widest mb-3">
                    Skills Gained //
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {internship.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 text-xs font-body font-semibold border border-muted text-muted bg-bg hover:border-accent hover:text-accent transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* PDF Viewer Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-bg/90 z-50 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative bg-surface border border-[#333333] max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 bg-bg border-b border-[#333333]">
              <h3 className="text-xs font-headline font-bold uppercase text-accent tracking-wider">
                Internship Completion Certificate // Verified
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="p-1.5 text-muted hover:text-accent transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-4 bg-bg overflow-auto max-h-[calc(90vh-140px)]">
              <embed
                src={`${internships[0].pdf}#toolbar=0&navpanes=0`}
                type="application/pdf"
                className="w-full h-[65vh] border border-[#333333]"
              />
            </div>

            <div className="p-4 bg-bg border-t border-[#333333] flex justify-end gap-3">
              <Button
                onClick={() => setShowModal(false)}
                variant="outline"
                className="text-xs py-2 px-4"
              >
                Close
              </Button>

              <Button
                onClick={handleDownload}
                variant="red"
                className="text-xs py-2 px-4"
              >
                <FaDownload className="mr-1.5 inline" size={11} /> Download PDF
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
