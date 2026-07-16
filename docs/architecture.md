# Architecture

This project is intended to be a React + TypeScript + Vite portfolio site.

The app should be a single-page experience with the following structure:

1. Navbar
2. Hero
3. Education
4. Work
5. Rowing
6. Contact
7. Footer

## Page details

### 1. Navbar

Top navigation that helps users move through the page.

### 2. Hero

- Title: Enzo Bernardo
- Subheading: Business Economics Student at UCLA

### 3. Education

- Cathedral Catholic High School (2022-2026)
- UCLA Business Economics Major (2026-2030)
- Notable Courses:
  - Multivariable Calculus at UCSD Extension
  - AP Physics C
  - AP Statistics
  - AP Macroeconomics

### 4. Work

- Content Health Management Intern at American Specialty Health (Summer 2026)
- Tutor at CrossRoads Tutoring (2025-2026)

### 5. Rowing

- Cathedral Catholic High School Varsity Rower (2022-2026)
- Cathedral Catholic High School Team Captain (2025-2026)
- UCLA Mens Rowing (2026-Present)

### 6. Contact

- Email: eqbernardo@gmail.com
- Instagram: https://www.instagram.com/__enzobernardo__

### 7. Footer

Footer area for closing links, copyright, or a short sign-off.

## Suggested implementation shape

- Use a Vite React app with TypeScript.
- Build each major section as a component so the page stays easy to maintain.
- Keep the content data-driven where practical so section copy can be updated without rewriting the layout.
- Keep navigation anchors aligned with the section ids in the page.