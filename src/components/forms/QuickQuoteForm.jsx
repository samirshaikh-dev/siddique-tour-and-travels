"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site-config";

export default function QuickQuoteForm({ className }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    journeyType: "Umrah",
    travelers: "2",
    departureCity: "Mumbai",
  });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState("");
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function buildWhatsAppMessage(data) {
    return `Assalam Alaikum Siddique Tours,

I would like to inquire about a pilgrimage package:

*Full Name:* ${data.name.trim()}
*Contact Number:* ${data.phone.trim()}
*Journey Type:* ${data.journeyType}
*Number of Travelers:* ${data.travelers}
*Departure City:* ${data.departureCity ? data.departureCity.trim() : "Not specified"}

Please share available departure dates, hotel details near the Haram, and custom family pricing. Jazakallah Khair!`;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setErrorMessage("Please enter both your name and contact phone number.");
      return;
    }
    setErrorMessage("");
    setStatus("submitting");

    const message = buildWhatsAppMessage(formData);
    const cleanNumber = siteConfig.contact.whatsapp.replace(/[^0-9]/g, "");
    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
    setGeneratedWhatsAppUrl(whatsappUrl);

    // 1. Send data to server endpoint in background for logging & record
    try {
      await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch {
      // Continue even if offline - direct WhatsApp transmission is primary
    }

    // 2. Open WhatsApp directly so the agency receives the exact form data
    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }

    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className={`bg-[var(--color-surface)] border border-[var(--color-primary)]/20 p-6 sm:p-8 rounded-2xl text-center shadow-md ${className || ""}`}>
        <div className="w-14 h-14 bg-emerald-100 text-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
          <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h4 className="font-display text-2xl font-bold text-[var(--color-primary)]">
          Jazakallah Khair!
        </h4>
        <p className="mt-2 text-xs sm:text-sm text-[var(--color-text-muted)] font-light leading-relaxed max-w-sm mx-auto">
          Your inquiry for <strong className="font-semibold text-[var(--color-primary)]">{formData.journeyType}</strong> has been formatted for WhatsApp transmission.
        </p>

        {generatedWhatsAppUrl && (
          <div className="mt-6">
            <a
              href={generatedWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#25D366] to-[#1ebe5d] text-white font-semibold text-sm shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all w-full sm:w-auto"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Open in WhatsApp</span>
            </a>
          </div>
        )}

        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setFormData({
              name: "",
              phone: "",
              journeyType: "Umrah",
              travelers: "2",
              departureCity: "Mumbai",
            });
            setGeneratedWhatsAppUrl("");
          }}
          className="mt-6 text-xs text-[var(--color-primary)] underline hover:text-[var(--color-primary-hover)] font-medium block mx-auto cursor-pointer"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-[var(--color-surface)] border border-[var(--color-sage)]/70 p-6 sm:p-8 rounded-2xl shadow-md ${className || ""}`}
    >
      <div className="border-b border-[var(--color-sage)]/50 pb-4 mb-5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-display text-2xl font-bold text-[var(--color-primary)]">
            Request Package Details
          </h3>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#25D366]/15 text-[#1a8e45] text-[11px] font-semibold border border-[#25D366]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
            WhatsApp Direct
          </span>
        </div>
        <p className="text-xs sm:text-sm text-[var(--color-text-muted)] mt-1 font-light">
          Receive customized itineraries and exact dates directly on WhatsApp.
        </p>
      </div>

      {errorMessage && (
        <div className="mb-4 p-3 bg-red-50 text-[var(--color-error)] text-xs rounded-xl border border-red-200">
          {errorMessage}
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-[var(--color-text)] mb-1">
            Your Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Mohammed Siddique"
            className="w-full px-3.5 py-2.5 bg-[var(--color-background)] border border-[var(--color-sand)] rounded-xl text-sm text-[var(--color-text)] focus:border-[var(--color-primary)] focus:bg-white outline-none transition-colors"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-[var(--color-text)] mb-1">
            Phone / WhatsApp Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +91 98765 43210"
            className="w-full px-3.5 py-2.5 bg-[var(--color-background)] border border-[var(--color-sand)] rounded-xl text-sm text-[var(--color-text)] focus:border-[var(--color-primary)] focus:bg-white outline-none transition-colors"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="journeyType" className="block text-xs font-semibold text-[var(--color-text)] mb-1">
              Journey
            </label>
            <select
              id="journeyType"
              name="journeyType"
              value={formData.journeyType}
              onChange={handleChange}
              className="w-full px-3 py-2.5 bg-[var(--color-background)] border border-[var(--color-sand)] rounded-xl text-sm text-[var(--color-text)] focus:border-[var(--color-primary)] focus:bg-white outline-none transition-colors"
            >
              <option value="Umrah">Umrah</option>
              <option value="Hajj">Hajj</option>
              <option value="Ziyarat">Ziyarat</option>
              <option value="Custom">Custom Tour</option>
            </select>
          </div>

          <div>
            <label htmlFor="travelers" className="block text-xs font-semibold text-[var(--color-text)] mb-1">
              Travelers
            </label>
            <select
              id="travelers"
              name="travelers"
              value={formData.travelers}
              onChange={handleChange}
              className="w-full px-3 py-2.5 bg-[var(--color-background)] border border-[var(--color-sand)] rounded-xl text-sm text-[var(--color-text)] focus:border-[var(--color-primary)] focus:bg-white outline-none transition-colors"
            >
              <option value="1">1 Person</option>
              <option value="2">2 Persons</option>
              <option value="3-4">3 - 4 (Family)</option>
              <option value="5+">5+ Group</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="departureCity" className="block text-xs font-semibold text-[var(--color-text)] mb-1">
            Departure City
          </label>
          <input
            id="departureCity"
            name="departureCity"
            type="text"
            value={formData.departureCity}
            onChange={handleChange}
            placeholder="e.g. Mumbai, Delhi, Ahmedabad"
            className="w-full px-3.5 py-2.5 bg-[var(--color-background)] border border-[var(--color-sand)] rounded-xl text-sm text-[var(--color-text)] focus:border-[var(--color-primary)] focus:bg-white outline-none transition-colors"
          />
        </div>
      </div>

      <div className="mt-6">
        <Button
          type="submit"
          variant="whatsapp"
          size="md"
          className="w-full shadow-md py-3 text-sm flex items-center justify-center gap-2 font-semibold"
          disabled={status === "submitting"}
        >
          <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span>{status === "submitting" ? "Connecting to WhatsApp..." : "Send Inquiry via WhatsApp"}</span>
        </Button>
      </div>

      <p className="text-[11px] text-[var(--color-text-muted)] text-center mt-3 font-light">
        🔒 Instantly opens WhatsApp with your pre-filled inquiry. No spam.
      </p>
    </form>
  );
}
