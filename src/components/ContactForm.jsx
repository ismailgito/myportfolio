// src/components/ContactForm.jsx
"use client";

import { useState } from "react";
import Button from "./ui/Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert(result.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to send message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full scroll-mt-24">
      {/* Full-width black CTA section */}
      <div className="w-full bg-bg border-t border-[#333333] border-b border-[#333333] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-[10px] font-headline font-bold tracking-wider uppercase text-accent border border-accent/25 bg-accent/5 mb-4">
              Pipeline Activation
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold uppercase text-apptext mb-4 leading-none">
              Let&apos;s Build Something
            </h3>
            <p className="text-sm sm:text-base font-body text-muted max-w-xl mx-auto">
              Have a project, campaign audit request, or performance role? Submit details below and I&apos;ll respond within 24 hours.
            </p>
          </div>

          {submitted && (
            <div className="mb-6 p-4 bg-accent/10 text-accent border border-accent/20 font-headline font-bold text-xs uppercase text-center">
              Message Dispatched Successfully! I will reply within 24 hours.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-[10px] font-headline font-bold uppercase tracking-wider text-muted">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-surface border border-[#444444] text-apptext font-body text-sm placeholder-muted"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-[10px] font-headline font-bold uppercase tracking-wider text-muted">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-surface border border-[#444444] text-apptext font-body text-sm placeholder-muted"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-[10px] font-headline font-bold uppercase tracking-wider text-muted">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-surface border border-[#444444] text-apptext font-body text-sm placeholder-muted"
                placeholder="Google Ads Audit / Consultation"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-[10px] font-headline font-bold uppercase tracking-wider text-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-surface border border-[#444444] text-apptext font-body text-sm placeholder-muted resize-none"
                placeholder="Tell me about your business goals or performance challenges..."
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              variant="red"
              className="w-full py-3.5 px-6"
            >
              {isSubmitting ? (
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                "Deploy Message →"
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
