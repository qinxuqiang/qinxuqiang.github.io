# Image Assets

This directory contains images and visual assets for the website.

## Profile Images

The site uses the following profile images:
- `profile.png` - Main profile photo (used in hero sections and about page)
- Current image: `/images/profile.png` (already exists)

You can replace this with your own professional photo. Recommended specifications:
- Format: PNG or JPG
- Size: 500x500px minimum
- Shape: Square (will be displayed as circular)
- Background: Solid color or simple background

## Favicon Files

The site expects the following favicon files in the `/images/` directory:

- `favicon-32x32.png` - Standard favicon (32x32px)
- `favicon-16x16.png` - Small favicon (16x16px)
- `apple-touch-icon.png` - iOS home screen icon (180x180px)

### How to Generate Favicons

You can use online tools to generate favicons from your profile image or logo:

1. **favicon.io** (https://favicon.io/)
   - Upload an image or use the text generator
   - Download the generated package
   - Place the files in the `/images/` directory

2. **RealFaviconGenerator** (https://realfavicongenerator.net/)
   - Upload your image
   - Customize for different platforms
   - Download and extract to `/images/`

3. **Manual Creation**
   - Use an image editor (Photoshop, GIMP, etc.)
   - Create square versions at the specified sizes
   - Export as PNG files with the correct names

### Quick Favicon Creation

If you have ImageMagick installed, you can create basic favicons from your profile image:

```bash
# From the root directory
convert images/profile.png -resize 32x32 images/favicon-32x32.png
convert images/profile.png -resize 16x16 images/favicon-16x16.png
convert images/profile.png -resize 180x180 images/apple-touch-icon.png
```

## Post Images

To add featured images to blog posts:

1. Add images to this directory with descriptive names
2. In your post frontmatter, add: `image: /images/your-image.jpg`
3. The image will appear as the featured image on post cards

Recommended specifications for post images:
- Format: JPG or PNG
- Aspect ratio: 16:9 or 2:1
- Size: 1200x630px (optimal for social media sharing)
- File size: < 500KB (optimize for web)

## Existing Images

The site already contains several images from the previous design. You may want to:
- Review and remove unused images
- Replace placeholder images with your own
- Optimize large images for web performance

## Image Optimization

To keep the site fast, optimize all images before adding them:

1. **Online Tools:**
   - TinyPNG (https://tinypng.com/)
   - Squoosh (https://squoosh.app/)

2. **Command Line:**
   ```bash
   # Using ImageMagick
   convert input.jpg -quality 85 -strip output.jpg
   
   # Using pngquant for PNG
   pngquant --quality=65-80 input.png --output output.png
   ```

---

*Last updated: November 2025*



