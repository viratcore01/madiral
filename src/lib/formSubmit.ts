// Centralized FormSubmit configuration
// Prefer token over email for privacy and recommended setup
export const FORM_SUBMIT_TOKEN = import.meta.env.VITE_FORM_SUBMIT_TOKEN;
export const FORM_SUBMIT_EMAIL = import.meta.env.VITE_FORM_SUBMIT_EMAIL ?? "your-gmail@example.com";

const FORM_SUBMIT_TARGET = FORM_SUBMIT_TOKEN ?? FORM_SUBMIT_EMAIL;

export const formSubmitAction = `https://formsubmit.co/${FORM_SUBMIT_TARGET}`;

export const thanksUrl = () => `${window.location.origin}/thanks`;