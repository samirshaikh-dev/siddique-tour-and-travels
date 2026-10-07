/**
 * Utility functions for Siddique Tours and Travels
 */

/**
 * Combines conditional CSS class names into a single string
 * @param  {...(string|boolean|null|undefined)} classes 
 * @returns {string}
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Formats a currency amount into standard Indian Rupee or specified currency
 * @param {number} amount 
 * @param {string} currency 
 * @returns {string}
 */
export function formatCurrency(amount, currency = "INR") {
  if (typeof amount !== "number" || isNaN(amount)) return "Contact for price";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Generates a clean WhatsApp click-to-chat URL with pre-filled message
 * @param {string} phone e.g. "+919876543210" or "919876543210"
 * @param {string} text Message text
 * @returns {string}
 */
export function getWhatsAppUrl(phone, text = "") {
  const cleanPhone = phone.replace(/[^0-9]/g, "");
  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${cleanPhone}${encodedText ? `?text=${encodedText}` : ""}`;
}
