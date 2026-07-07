---
name: Ribbon-Kku Creative Design System
colors:
  surface: '#faf9fb'
  surface-dim: '#dadadc'
  surface-bright: '#faf9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f5'
  surface-container: '#eeedef'
  surface-container-high: '#e8e8ea'
  surface-container-highest: '#e3e2e4'
  on-surface: '#1a1c1d'
  on-surface-variant: '#4a454d'
  inverse-surface: '#2f3032'
  inverse-on-surface: '#f1f0f2'
  outline: '#7b757e'
  outline-variant: '#ccc4ce'
  surface-tint: '#6b5582'
  primary: '#695380'
  on-primary: '#ffffff'
  primary-container: '#826b9a'
  on-primary-container: '#fffbff'
  inverse-primary: '#d7bcf0'
  secondary: '#725477'
  on-secondary: '#ffffff'
  secondary-container: '#fad3fd'
  on-secondary-container: '#77587c'
  tertiary: '#814970'
  on-tertiary: '#ffffff'
  tertiary-container: '#9c628a'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#efdbff'
  primary-fixed-dim: '#d7bcf0'
  on-primary-fixed: '#25113b'
  on-primary-fixed-variant: '#533e69'
  secondary-fixed: '#fcd7ff'
  secondary-fixed-dim: '#dfbbe4'
  on-secondary-fixed: '#2a1131'
  on-secondary-fixed-variant: '#593d5f'
  tertiary-fixed: '#ffd7ee'
  tertiary-fixed-dim: '#f6b2de'
  on-tertiary-fixed: '#36082c'
  on-tertiary-fixed-variant: '#69355a'
  background: '#faf9fb'
  on-background: '#1a1c1d'
  surface-variant: '#e3e2e4'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-padding-mobile: 20px
  container-padding-desktop: 64px
  gutter: 24px
  section-gap: 80px
---

## Brand & Style

The design system is built to evoke a sense of "Lovely & Ethereal" charm, specifically tailored for the K-pop fan community. The brand personality is whimsical, supportive, and premium, treating lightstick decoration as a form of high-effort creative expression. 

The visual style blends **Modern Minimalism** with **Glassmorphism**. It utilizes expansive white space to allow vibrant product photography—featuring ribbons, crystals, and textures—to remain the focal point. The interface should feel light, as if floating, using translucent layers and soft color bleeds to create an atmosphere of "K-pop dreaminess." Every interaction should feel as delicate and intentional as tying a silk ribbon.

## Colors

The palette is a curated gradient of lavenders and orchids, designed to feel sophisticated rather than juvenile. 

- **Primary (#957DAD):** Used for interactive elements and brand-heavy moments. It provides enough contrast for accessibility while maintaining a soft, muted tone.
- **Secondary (#E0BBE4):** The signature "Lilac Cloud" color, used for large decorative surfaces, secondary buttons, and subtle background shapes.
- **Tertiary (#D291BC):** A warmer orchid tone used for accents, badges, and highlighting special "Handmade" or "Limited Edition" tags.
- **Neutral (#FDFCFE):** A "Paper White" with a hint of purple tint to ensure the UI feels integrated with the palette rather than starkly clinical.

Avoid pure black; use a deep, desaturated plum for text to maintain the ethereal aesthetic.

## Typography

**Plus Jakarta Sans** was selected for its modern, friendly geometry and uniquely soft terminals that mimic the gentle curves of ribbons. 

- **Headlines:** Use Bold and Semi-Bold weights with tighter letter-spacing to create a "contained" and professional look. 
- **Body Text:** Use Regular weight with generous line-height (1.6) to ensure breathability and a premium editorial feel.
- **Labels:** Small caps or increased letter-spacing should be used for category labels (e.g., "STIKKERS", "RIBBONS") to add a touch of boutique sophistication.

## Layout & Spacing

The layout follows a **Fluid Grid** model with an emphasis on "Negative Space as Luxury." 

- **Desktop:** A 12-column grid with extremely wide margins (64px+) to keep the content centered and focused, resembling a high-end lookbook.
- **Mobile:** A 4-column grid with 20px margins. 
- **Rhythm:** Use an 8px base unit. Section vertical spacing should be aggressive (80px to 120px) to prevent the "cluttered" look common in e-commerce and instead emphasize individual kit components.

## Elevation & Depth

To achieve the "Ethereal" quality, this design system avoids heavy, dark shadows. Instead, it uses:

1.  **Ambient Tinted Shadows:** Shadows are elongated and soft, using a low-opacity version of the Primary color (#957DAD) instead of grey. This makes elements appear to glow against the background.
2.  **Backdrop Blurs:** Navigation bars and modal overlays use a 20px blur with a 70% opacity white fill, creating a "frosted glass" effect.
3.  **Soft Inner Glows:** Use 1px white inner borders on cards to simulate the way light hits the edge of a physical ribbon or plastic sticker sheet.

## Shapes

The shape language is defined by "Organic Softness." 

- **Cards & Containers:** Use `rounded-lg` (1rem) to maintain a friendly, approachable feel that aligns with the "Kku" (decorating) culture.
- **Images:** Product photography should always feature rounded corners to avoid breaking the "soft" visual narrative.
- **Buttons:** Interactive elements use a slightly higher roundedness or full pill shapes to invite touch.

## Components

- **Buttons:** The primary button is a solid pill-shape in Primary Lavender with a subtle white drop shadow. Secondary buttons are "Ghost" style with a 1.5px border in Secondary Lilac.
- **Chips/Badges:** Small, pill-shaped tags used for "New" or "Artist Name." These should use a Tertiary Orchid background with white text.
- **Cards:** Product cards use a white background, no visible border, and a soft tinted shadow. The "Product Name" is centered below the image in Headline-md.
- **Input Fields:** Search and form fields use a very light Lilac tint (#F5EEF6) instead of white, with a 1px Primary border appearing only on focus.
- **Interactive "Ribbons":** Use decorative SVG ribbon-tails on the corners of featured product cards to reinforce the brand's handmade, "kku" identity.
- **Customization Toggles:** Checkboxes and radio buttons should be custom-styled as soft circles/squares with "heart" or "star" icons for the active state where appropriate.