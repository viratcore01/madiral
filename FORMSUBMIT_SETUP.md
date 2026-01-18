# FormSubmit Setup Guide

All forms in this application use [FormSubmit](https://formsubmit.co/) for form submissions. FormSubmit is a free service that allows you to receive form submissions via email without needing a backend server.

## Configuration

1. **Get your FormSubmit email address:**
   - Visit https://formsubmit.co/
   - Enter your email address
   - FormSubmit will send you a confirmation email
   - After confirming, you can use your email address in the form action URL

2. **Update the email addresses in the config file:**
   - Open `src/config/formsubmit.ts`
   - Replace `"your-email@example.com"` with your actual email address for each form:
     ```typescript
     export const FORMSUBMIT_EMAILS = {
       GET_NOTIFIED: "your-actual-email@example.com",
       CONTACT: "your-actual-email@example.com",
       JOIN_US: "your-actual-email@example.com",
       PARTNERSHIP: "your-actual-email@example.com",
     } as const;
     ```

3. **Deploy to Vercel:**
   - The forms will work automatically once deployed
   - No backend or server-side code is required
   - All forms use pure HTML POST requests

## How It Works

- Forms submit directly to FormSubmit's servers via HTML POST
- No JavaScript prevents the default form submission
- FormSubmit receives the submission and forwards it to your email
- Users are redirected to a success page after submission

## Forms in This Application

1. **Get Notified** (`/get-notified`) - For users who want to be notified when the app launches
2. **Contact** (`/contact`) - General contact form
3. **Join Us** (`/join-us`) - For customers or partners interested in joining
4. **Partnership** (`/partnership`) - Partnership inquiry form

## Success Redirects

After successful submission, users are redirected to:
- Get Notified: `https://madiral.vercel.app/get-notified?success=true`
- Contact: `https://madiral.vercel.app/contact?success=true`
- Join Us: `https://madiral.vercel.app/join-us?success=true`
- Partnership: `https://madiral.vercel.app/partnership?success=true`

You can add success message handling on these pages if desired.

## Testing

1. Fill out any form on your deployed site
2. Submit the form
3. Check your email inbox for the FormSubmit confirmation email
4. Confirm the email address if it's your first time using it
5. Future submissions will arrive directly in your inbox

## Troubleshooting

- **Forms not submitting:** Make sure you've confirmed your email address with FormSubmit
- **Not receiving emails:** Check your spam folder and verify the email address in the config file
- **Redirect not working:** Update the `_next` hidden input values in each form component if your domain changes
