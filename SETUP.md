# Website Setup Guide

This guide will help you complete the setup of your newly redesigned personal website.

## Quick Start

Your website has been completely rebuilt with a modern design! Here's what you need to do to get it fully running:

### 1. Install Required Gems

Make sure you have the necessary Jekyll plugins installed. Create or update your `Gemfile`:

```ruby
source "https://rubygems.org"

gem "jekyll", "~> 4.3"
gem "webrick", "~> 1.7"

group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
end
```

Then run:
```bash
bundle install
```

### 2. Add Your Profile Image

Replace or update `/images/profile.png` with your professional photo:
- Recommended size: 500x500px
- Format: PNG or JPG
- Will be displayed as circular on the site

### 3. Generate Favicons

Create favicon files and place them in `/images/`:
- `favicon-32x32.png`
- `favicon-16x16.png`
- `apple-touch-icon.png`

See `/images/README.md` for detailed instructions and tools.

### 4. Update Configuration

The `_config.yml` file has been set up with your information. Review and update:
- Google Analytics ID (if you want tracking)
- Twitter username (if applicable)
- Any other personal details

### 5. Test Locally

Run the Jekyll development server:
```bash
bundle exec jekyll serve
```

Visit `http://localhost:4000` to see your new site!

### 6. Deploy

#### GitHub Pages (Recommended)

1. Push your changes to your GitHub repository:
   ```bash
   git add .
   git commit -m "Complete website redesign"
   git push origin main
   ```

2. Enable GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Source: Deploy from branch
   - Branch: main / root
   - Save

Your site will be live at `https://qinxuqiang.github.io` in a few minutes!

## What's New

### Modern Design
- Clean, minimal aesthetic with professional polish
- Fully responsive (mobile-first design)
- Modern typography and spacing
- Smooth animations and transitions

### Enhanced Content Sections
- **Hero Homepage**: Eye-catching introduction with CTA buttons
- **Enhanced About Page**: Detailed bio with timeline and skills
- **Publications Section**: Professional showcase of your research
- **Projects Page**: Highlight your GitHub and Hugging Face work
- **Modern Blog**: Card-based layout with search functionality

### Technical Improvements
- SEO optimized with meta tags
- Open Graph and Twitter Card support
- RSS feed properly configured
- Mobile menu with smooth interactions
- Reading time estimates for blog posts
- Syntax highlighting for code blocks
- Copy-to-clipboard for code snippets
- Back-to-top button
- Reading progress bar for posts

### Performance
- Minimal JavaScript (vanilla JS, no frameworks)
- Efficient CSS with CSS variables
- Fast page loads
- Optimized for web performance

## Customization

### Colors

Edit CSS variables in `/assets/style.css`:
```css
:root {
  --color-primary: #2563eb;      /* Main brand color */
  --color-primary-dark: #1e40af; /* Darker shade */
  /* ... other colors */
}
```

### Navigation

Update navigation items in `_config.yml`:
```yaml
navigation:
  - title: "Home"
    url: /
  - title: "Your New Page"
    url: /new-page.html
```

### Footer

Edit `/includes/footer.html` to customize the footer content.

### Adding Blog Posts

Create new posts in `_posts/` with the format: `YYYY-MM-DD-title.md`

Include frontmatter:
```yaml
---
layout: post
title: "Your Post Title"
date: YYYY-MM-DD
tags: [tag1, tag2, tag3]
excerpt: "Brief description for post preview"
read_time: 5
---
```

### Adding Publications

Create new publication files in `_publications/`:
```yaml
---
title: "Publication Title"
authors: "Author names"
venue: "Conference or Journal"
year: 2024
pdf: "/files/paper.pdf"
arxiv: "https://arxiv.org/abs/..."
layout: publication
---

## Abstract
Your abstract here...
```

## Troubleshooting

### Jekyll Build Errors

If you encounter build errors:
1. Check Ruby version: `ruby -v` (should be 2.7+)
2. Update bundler: `gem install bundler`
3. Clean and rebuild: `bundle exec jekyll clean && bundle exec jekyll serve`

### Styling Issues

If styles aren't loading:
1. Check that `/assets/style.css` exists
2. Clear browser cache
3. Check for CSS syntax errors

### Navigation Not Working

If mobile menu doesn't work:
1. Ensure `/assets/main.js` is loaded
2. Check browser console for JavaScript errors
3. Clear browser cache

## Optional Enhancements

### Add Google Analytics

1. Get your GA tracking ID
2. Add to `_config.yml`:
   ```yaml
   google_analytics: "G-XXXXXXXXXX"
   ```

### Add Comments

Integrate Disqus, Utterances, or another comment system by editing `_layouts/post.html`

### Add Search

The blog page already has basic client-side search. For more advanced search, consider:
- Algolia
- Lunr.js
- Google Custom Search

## Next Steps

1. ✅ Review all pages and content
2. ✅ Add your profile image
3. ✅ Generate favicons
4. ✅ Test locally
5. ✅ Deploy to GitHub Pages
6. Share your new website!

## Support

For Jekyll documentation: https://jekyllrb.com/docs/
For GitHub Pages help: https://docs.github.com/en/pages

---

**Enjoy your new website!** 🎉



