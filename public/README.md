# Public Assets

This folder contains static files that are publicly accessible.

## Adding Your Resume

To make your resume accessible from the website:

1. **Save your resume as PDF** (recommended format)
2. **Name it `resume.pdf`**
3. **Place it in this folder** (`/public/resume.pdf`)

The resume link in the sidebar will automatically work at: `https://yoursite.com/resume.pdf`

### Alternative Resume Names

If you prefer a different filename (e.g., `Miruna_Resume.pdf`), update the link in:
- `src/domain/constants.ts` line 32
- Change `href: "/resume.pdf"` to `href: "/your-filename.pdf"`

## Other Public Files

You can add other public files here like:
- Images (`/public/images/profile.jpg`)
- Documents (`/public/portfolio.pdf`)
- Favicon (`/public/favicon.ico`)

All files in this folder are accessible at `https://yoursite.com/filename`
