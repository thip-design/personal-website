# Thip Design Studio - Portfolio Website

A modern, responsive portfolio website for Thip Design Studio, featuring professional graphic design and custom apparel services.

## Features

- **Fully Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Portfolio Gallery** - Filterable portfolio showcase with category organization
- **Contact Form** - Integrated contact form with validation
- **SEO Optimized** - Semantic HTML and meta tags for better search visibility
- **Fast Loading** - Optimized performance with minimal dependencies
- **Social Media Integration** - Links to LINE, Instagram, TikTok, and email

## Color Palette

- **Primary Blue**: #2563eb
- **Secondary Blue**: #0ea5e9
- **White**: #ffffff
- **Gray Shades**: #f9fafb to #111827

## Pages & Sections

1. **Home**
   - Hero section with call-to-action
   - Service highlights
   - Featured portfolio
   - Client testimonials

2. **Portfolio**
   - Filterable gallery
   - Categories: Shirt Design, Business Card, Sticker, Menu, Logo, Other Design
   - Hover effects and smooth transitions

3. **Services**
   - Detailed service descriptions
   - Custom shirt design
   - Business card design
   - Sticker design
   - Menu design
   - General graphic design

4. **About**
   - Company information
   - Statistics
   - Why choose us section

5. **Contact**
   - Social media links (LINE, Instagram, TikTok)
   - Email contact
   - Contact form with validation

## File Structure

```
thip-design-studio/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── logo-01.png         # Company logo
└── README.md           # This file
```

## Setup Instructions

1. **Upload to Web Server**
   - Upload all files to your web hosting server
   - Ensure files maintain the same directory structure

2. **Update Contact Information**
   - Open `index.html`
   - Find the contact section (search for `#contact`)
   - Update social media links:
     - LINE: Update the `href` in the LINE contact method
     - Instagram: Replace `https://instagram.com/` with your Instagram URL
     - TikTok: Replace `https://tiktok.com/` with your TikTok URL
     - Email: Replace `info@thipdesign.com` with your actual email

3. **Add Portfolio Images**
   - Replace the placeholder `.portfolio-placeholder` elements with actual images
   - Use the format:
     ```html
     <div class="portfolio-image">
         <img src="path/to/your/image.jpg" alt="Project Name">
     </div>
     ```
   - Recommended image size: 800x600px or 4:3 ratio

4. **Customize Content**
   - Edit company information in the About section
   - Update testimonials with real client feedback
   - Modify service descriptions to match your offerings
   - Adjust statistics in the About section

## Customization Guide

### Change Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-blue: #2563eb;      /* Main brand color */
    --secondary-blue: #0ea5e9;    /* Accent color */
    --gray-900: #111827;          /* Dark text */
}
```

### Add More Portfolio Items

In `index.html`, find the portfolio gallery section and add:

```html
<div class="portfolio-item" data-category="CATEGORY_NAME">
    <div class="portfolio-image">
        <img src="your-image.jpg" alt="Project Name">
    </div>
    <div class="portfolio-info">
        <h3>Project Title</h3>
        <span class="portfolio-category">Category Name</span>
    </div>
</div>
```

Categories: `shirt`, `business-card`, `sticker`, `menu`, `logo`, `other`

### Configure Contact Form

The contact form currently uses client-side validation. To make it functional:

1. Set up a backend endpoint (PHP, Node.js, etc.)
2. Update the form submission handler in `script.js`
3. Replace the `setTimeout` mock submission with an actual API call:

```javascript
fetch('your-api-endpoint.php', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json' }
})
.then(response => response.json())
.then(data => {
    showFormMessage('Success!', 'success');
});
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Optimize Images**
   - Compress images before uploading (use TinyPNG or similar)
   - Use WebP format for better compression
   - Recommended max file size: 200KB per image

2. **Enable Caching**
   - Configure server to cache static assets
   - Set appropriate cache headers

3. **Use CDN**
   - Consider using a CDN for faster global delivery
   - Cloudflare or similar services work well

## SEO Recommendations

1. **Update Meta Tags**
   - Edit the `<title>` and `<meta description>` tags
   - Add your business location and keywords

2. **Add Schema Markup**
   - Consider adding JSON-LD schema for local business
   - This helps search engines understand your content

3. **Submit Sitemap**
   - Create and submit a sitemap to Google Search Console
   - Include all important pages

## Analytics Integration

To add Google Analytics:

1. Get your Google Analytics tracking code
2. Add before the closing `</head>` tag in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Social Media Setup

1. **LINE Official Account**
   - Create a LINE Official Account
   - Get your LINE URL and update in the contact section

2. **Instagram**
   - Update with your Instagram handle
   - Post regular design work to attract clients

3. **TikTok**
   - Share behind-the-scenes content
   - Show design process videos

## Support & Updates

For any issues or questions:
- Review the code comments in each file
- Check browser console for JavaScript errors
- Ensure all files are uploaded correctly

## License

This website template is created for Thip Design Studio.
All rights reserved © 2024 Thip Design Studio.

## Credits

- Font: Poppins from Google Fonts
- Icons: Custom SVG icons
- Design: Custom design for Thip Design Studio

---

**Version**: 1.0.0  
**Last Updated**: 2024  
**Developer**: Custom built for Thip Design Studio
