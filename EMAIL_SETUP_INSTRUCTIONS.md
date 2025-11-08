# WhatsApp Integration Setup Instructions

Your website now has WhatsApp integration for direct customer communication!

## ✅ What's Been Added:

1. **Contact Page WhatsApp Button** - Large green button on the contact page
2. **Floating WhatsApp Button** - Fixed button on all pages (bottom-right corner)
3. **Alternative Contact Methods** - Phone and email options on contact page

## 📱 Current WhatsApp Number:

The WhatsApp buttons are configured with: **064 897 6019**

This appears as: `27648976019` in the WhatsApp link (South African format with country code +27)

## 🔧 How to Update Your WhatsApp Number:

If you need to change the WhatsApp number, search for this in all HTML files:

```html
https://wa.me/27648976019
```

Replace `27648976019` with your WhatsApp number in international format:
- Remove any spaces, dashes, or special characters
- Start with country code (27 for South Africa)
- Example: 064 897 6019 becomes 27648976019

### Files to Update:
- `index.html` (line ~149)
- `about.html` (line ~154)
- `services.html` (line ~210)
- `contact.html` (line ~54 and ~175)

## 💡 How It Works:

When customers click the WhatsApp button:
1. It opens WhatsApp on their device (mobile or desktop)
2. Pre-fills a message: "Hello, I would like to inquire about your services"
3. Opens a chat with your number
4. Customer can modify the message and send

## 🎨 Features:

### Contact Page Button:
- Large green button with WhatsApp icon
- Text: "Text us on WhatsApp"
- Hover effect (darker green + slight lift)
- Shadow effect for depth

### Floating Button:
- Always visible in bottom-right corner
- Follows user as they scroll
- Pulsing animation to attract attention
- Green circular button with WhatsApp icon
- Available on ALL pages

## 📝 Customization Options:

### Change the Pre-filled Message:

In the WhatsApp link, find:
```
?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services
```

Replace with your message (use %20 for spaces, %2C for commas):
- Example: "Hi! I need a quote" becomes `?text=Hi!%20I%20need%20a%20quote`

### Hide Floating Button on Specific Pages:

Add this CSS to hide it:
```css
/* Hide on homepage only */
body.home .floating-whatsapp {
    display: none;
}
```

## 🚀 Benefits:

✅ **Instant Communication** - Customers reach you immediately
✅ **Higher Response Rate** - People prefer WhatsApp over forms
✅ **Mobile-Friendly** - Works perfectly on phones
✅ **No Spam** - Direct messages to your WhatsApp
✅ **Personal Touch** - Real-time conversation
✅ **Free** - No monthly fees or service costs

## 📞 Alternative Contact Methods:

The contact page still includes:
- Direct phone link: Click to call 064 897 6019
- Email link: Click to email info@rooftooproofing.com

## 🧪 Testing:

1. Open your website
2. Look for the green floating button (bottom-right)
3. Click it - WhatsApp should open
4. Verify your number appears correctly
5. Test the pre-filled message

## ⚠️ Important Notes:

- Make sure WhatsApp is installed (mobile) or use WhatsApp Web (desktop)
- The number MUST be active on WhatsApp
- Customers need internet connection to send messages
- You'll receive messages in your WhatsApp app

---

## Old Email Form Setup (No Longer Needed)

The contact form has been replaced with WhatsApp integration for better customer engagement and instant communication.

6. Copy the Form ID (it looks like: `xvoepqrs`)
7. Open `contact.html` in your code editor
8. Find this line:
   ```html
   <form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
9. Replace `YOUR_FORM_ID` with your actual Form ID
10. Save the file

### Example:
If your Form ID is `xvoepqrs`, the line should look like:
```html
<form id="contactForm" action="https://formspree.io/f/xvoepqrs" method="POST">
```

### Benefits:
- ✅ FREE (50 submissions/month)
- ✅ Easy setup (5 minutes)
- ✅ No server required
- ✅ Spam protection included
- ✅ Email notifications
- ✅ You can reply directly from your email

---

## Option 2: EmailJS (Alternative - FREE)

### Steps:
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Add an email service (Gmail, Outlook, etc.)
4. Create an email template
5. Get your Public Key, Service ID, and Template ID
6. Update the JavaScript code in `js/script.js`

### Benefits:
- ✅ FREE (200 emails/month)
- ✅ Works directly from browser
- ✅ Custom email templates
- ✅ Multiple email services

---

## Option 3: Simple mailto: Link (Quick but Limited)

If you want a super simple solution (not recommended for professional sites):

Replace the form action with:
```html
<form id="contactForm" action="mailto:your-email@example.com" method="POST" enctype="text/plain">
```

**Note:** This will open the user's email client and is not a good user experience.

---

## Recommended: Use Formspree (Option 1)

It's the easiest and most professional solution. After setup, when someone fills out your contact form:
1. They click Submit
2. The message is sent to Formspree
3. Formspree forwards it to your email
4. You receive it in your inbox
5. You can reply directly to the customer

---

## Testing Your Form

After setup:
1. Open your website
2. Go to the Contact page
3. Fill out the form with test data
4. Click Submit
5. Check your email inbox (and spam folder)
6. You should receive the form submission

---

## Troubleshooting

- **Not receiving emails?** Check your spam folder
- **Form not submitting?** Make sure you replaced `YOUR_FORM_ID` correctly
- **Need help?** Contact Formspree support or check their documentation

---

## Your Email Address

Make sure to use the email address where you want to receive inquiries:
- Current email in footer: info@rooftooproofing.com
- Update this if needed in all HTML files (footer section)
