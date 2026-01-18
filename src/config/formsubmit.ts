// FormSubmit Configuration
// Replace these email addresses with your actual FormSubmit email addresses
// Get your FormSubmit email at: https://formsubmit.co/

export const FORMSUBMIT_EMAILS = {
  // Email for Get Notified form submissions
  GET_NOTIFIED: "your-email@example.com",
  
  // Email for Contact form submissions
  CONTACT: "your-email@example.com",
  
  // Email for Join Us form submissions
  JOIN_US: "your-email@example.com",
  
  // Email for Partnership form submissions
  PARTNERSHIP: "your-email@example.com",
} as const;

// Base FormSubmit URL
export const FORMSUBMIT_BASE_URL = "https://formsubmit.co";

// Helper function to get FormSubmit action URL
export const getFormSubmitUrl = (email: string): string => {
  return `${FORMSUBMIT_BASE_URL}/${email}`;
};
