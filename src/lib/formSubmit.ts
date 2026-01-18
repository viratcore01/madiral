// Centralized FormSubmit configuration
export const FORM_SUBMIT_EMAIL = import.meta.env.VITE_FORM_SUBMIT_EMAIL ?? "your-gmail@example.com";

export const formSubmitAction = `https://formsubmit.co/${FORM_SUBMIT_EMAIL}`;

export const thanksUrl = () => `${window.location.origin}/thanks`;