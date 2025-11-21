# EmailJS Setup Guide

Follow these steps to set up EmailJS and enable the contact form to send emails to your Gmail:

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** from the list
4. Click **Connect Account** and sign in with your Gmail
5. Give your service a name (e.g., "gmail_service")
6. Click **Create Service**
7. **Copy the Service ID** - you'll need this

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

**Template Name:** contact_form

**Subject:** New Contact Form Message from {{user_name}}

**Content (HTML):**

```html
<p>You have received a new message from your portfolio contact form:</p>

<h3>Contact Details:</h3>
<ul>
  <li><strong>Name:</strong> {{user_name}}</li>
  <li><strong>Email:</strong> {{user_email}}</li>
  <li><strong>Subject:</strong> {{subject}}</li>
</ul>

<h3>Message:</h3>
<p>{{message}}</p>

<hr />
<p><em>This message was sent from your portfolio website contact form.</em></p>
```

4. Click **Save**
5. **Copy the Template ID** - you'll need this

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (it's a string of characters)
3. **Copy the Public Key**

## Step 5: Update Your Code

Open `src/App.jsx` and find these lines (around line 564):

```javascript
const serviceId = "YOUR_SERVICE_ID";
const templateId = "YOUR_TEMPLATE_ID";
const publicKey = "YOUR_PUBLIC_KEY";
```

Replace with your actual values:

```javascript
const serviceId = "gmail_service"; // Your Service ID from Step 2
const templateId = "contact_form"; // Your Template ID from Step 3
const publicKey = "YOUR_ACTUAL_PUBLIC_KEY"; // Your Public Key from Step 4
```

## Step 6: Test the Form

1. Save your changes
2. Refresh your website
3. Fill out the contact form
4. Submit it
5. Check your Gmail inbox (shohanshovo.dev@gmail.com) for the message

## Important Notes

- EmailJS free plan allows **200 emails per month**
- All emails will be sent to the Gmail account you connected in Step 2
- The form includes loading states and success/error messages
- Form field names match the template variables (user_name, user_email, subject, message)

## Troubleshooting

If emails aren't sending:

1. Check browser console for errors
2. Verify all IDs and keys are correct
3. Make sure the template variable names match the form field names
4. Check EmailJS dashboard for any error logs

## Security Note

The Public Key is safe to expose in frontend code - that's why it's called "public". Your Service ID and Template ID can also be public. EmailJS handles authentication on their end.
