// src/components/Internships.jsx
"use client";

import { useState } from "react";
import { FaDownload, FaEye, FaExternalLinkAlt, FaBuilding, FaCalendarAlt, FaUserGraduate } from "react-icons/fa";

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
            skills: ["Sales Strategy", "Marketing Analytics", "Lead Generation", "Client Relations", "Market Research"],
        },
        // Add more internships here if you have more
    ];

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = internships[0].pdf;
        link.download = "Mohammed_Ismail_Internship_Certificate.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <section id="internships" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full scroll-mt-24 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-sm font-mono tracking-widest uppercase text-[#FF6584] mb-2">
                        Professional Experience
                    </h2>
                    <h3 className="text-3xl font-bold font-poppins text-gray-900 dark:text-white">
                        Internships
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
                        Hands-on industry experience gained through professional internships in sales and marketing.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {internships.map((internship) => (
                        <div
                            key={internship.id}
                            className="bg-white dark:bg-[#1A1A2E] rounded-2xl border border-gray-200 dark:border-white/10 overflow-hidden hover:shadow-xl transition-all"
                        >
                            {/* Header with gradient */}
                            <div className="bg-gradient-to-r from-[#6C63FF]/10 to-[#00D9FF]/10 px-6 py-4 border-b border-gray-200 dark:border-white/10">
                                <div className="flex items-start justify-between flex-wrap gap-4">
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                                            {internship.title}
                                        </h4>
                                        <div className="flex items-center gap-2 mt-1">
                                            <FaBuilding size={14} className="text-[#6C63FF]" />
                                            <span className="text-gray-600 dark:text-gray-400 text-sm">
                                                {internship.company}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <button
                                            onClick={handleDownload}
                                            className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm font-medium"
                                        >
                                            <FaDownload size={14} />
                                            Download PDF
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Details Grid */}
                                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                                    <div className="flex items-start gap-3">
                                        <FaCalendarAlt className="text-[#6C63FF] mt-1 flex-shrink-0" size={16} />
                                        <div>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">Duration</p>
                                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                                                {internship.duration} ({internship.period})
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <FaUserGraduate className="text-[#6C63FF] mt-1 flex-shrink-0" size={16} />
                                        <div>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">Registration No.</p>
                                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                                                {internship.registrationNo}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Education Info */}
                                <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                                    <p className="text-sm text-gray-700 dark:text-gray-300">
                                        <span className="font-semibold">Course:</span> {internship.course}
                                    </p>
                                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                                        <span className="font-semibold">Institution:</span> {internship.college}
                                    </p>
                                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                                        <span className="font-semibold">Certificate Date:</span> {internship.certificateDate}
                                    </p>
                                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                                        <span className="font-semibold">Issued By:</span> {internship.issuedBy}
                                    </p>
                                </div>

                                {/* Skills Learned */}
                                <div>
                                    <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                                        Skills & Experience Gained:
                                    </h5>
                                    <div className="flex flex-wrap gap-2">
                                        {internship.skills.map((skill, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Certificate Note */}
                                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-800">
                                    <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                                        Official internship completion certificate issued by {internship.company}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Modal for Viewing Certificate */}
            {showModal && (
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={closeModal}
                >
                    <div
                        className="relative bg-white dark:bg-[#1A1A2E] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-800">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                Internship Certificate
                            </h3>
                            <button
                                onClick={closeModal}
                                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Modal Body - PDF Viewer */}
                        <div className="p-4 overflow-auto max-h-[calc(90vh-80px)]">
                            <embed
                                src={`${internships[0].pdf}#toolbar=0&navpanes=0`}
                                type="application/pdf"
                                className="w-full h-[80vh] rounded-lg"
                                frameBorder="0"
                            />
                        </div>

                        {/* Modal Footer */}
                        <div className="p-4 border-t border-gray-200 dark:border-gray-800 flex justify-end gap-3">
                            <button
                                onClick={closeModal}
                                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                            >
                                Close
                            </button>
                            <button
                                onClick={handleDownload}
                                className="px-4 py-2 bg-[#6C63FF] text-white rounded-xl hover:bg-[#5a52e0] transition-colors flex items-center gap-2"
                            >
                                <FaDownload size={14} />
                                Download PDF
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}