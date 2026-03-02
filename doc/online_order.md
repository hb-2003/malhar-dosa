# Implementation Plan - Website Improvements

This plan outlines the steps to improve the Malhar Dosa website based on a comprehensive review. The goals are to fix SEO issues, enhance the UI with modern icons and navigation, and add missing functional sections.

## Proposed Changes

---
## Phase 1: Public UI & Functional Improvements (Current Priority)

### Dependencies
- [NEW] Install `lucide-react` for high-quality, consistent iconography.

---

### Core Layout & Navigation
#### [MODIFY] [PublicNav.tsx](file:///Users/mac/Documents/testing/malhar-dosa/malhar-dosa/components/layout/PublicNav.tsx)
- Add a "Language Toggle" (EN/GUJ) for local accessibility.
- Add "Order Online" and "Book a Table" call-to-action buttons.
- Integrate social media icons (Instagram, Facebook).

#### [MODIFY] [PublicFooter.tsx](file:///Users/mac/Documents/testing/malhar-dosa/malhar-dosa/components/layout/PublicFooter.tsx)
- Expand the footer into a multi-column layout.
- Add sections for:
    - **Quick Links**: Menu, About, Reviews, Contact.
    - **Operating Hours**: Clearly listed for each day or as a summary.
    - **Follow Us**: Social media links with icons.
    - **Address & Contact**: Detailed contact info with a link to Google Maps.

---

### SEO & Metadata
#### [MODIFY] [about/page.tsx](file:///Users/mac/Documents/testing/malhar-dosa/malhar-dosa/app/(public)/about/page.tsx)
#### [MODIFY] [menu/page.tsx](file:///Users/mac/Documents/testing/malhar-dosa/malhar-dosa/app/(public)/menu/page.tsx)
#### [MODIFY] [login/page.tsx](file:///Users/mac/Documents/testing/malhar-dosa/malhar-dosa/app/(public)/login/page.tsx)
- Add `export const metadata` to each page to fix the `undefined` title issue and improve SEO.

---

### Administrative & Internal Views
#### [MODIFY] [login/page.tsx](file:///Users/mac/Documents/testing/malhar-dosa/malhar-dosa/app/(public)/login/page.tsx)
- Add a "Return to Homepage" link/button.
- Include "Forgot Password?" and "Remember Me" options for better UX.

#### Dashboard Enhancements (Role-Specific)
- **Cook View**: Add "Time Elapsed" timers to order cards to track prep speed.
- **Collector View**: Add a "Quick Print" button for kitchen tickets.
- **Cashier View**: Restrict "Add Order" permissions and focus the UI on payment settlement.
- **Global**: Implement a notification sound/badge for new incoming orders.

---

### UI Enhancements
#### [MODIFY] [page.tsx](file:///Users/mac/Documents/testing/malhar-dosa/malhar-dosa/app/(public)/page.tsx)
- Update the hero section to include more prominent "Order Now" buttons.
- Add a small "Hours" and "Location" summary bar below the hero.

## Verification Plan

### Automated Tests
- Run `npm run lint` to ensure no code quality issues were introduced.

### Manual Verification
1. **Metadata Check**: Open the browser and verify that each page tab shows the correct title (e.g., "Menu | Malhar Dosa").
2. **Navigation Check**: Verify that the new CTAs in the header are visible and responsive.
3. **Footer Check**: Verify the expanded footer layout on both mobile and desktop views.
4. **Interaction Check**: Click the language toggle and verify the UI updates (even if translations are minimal for now).

---

## Phase 2: Multi-Branch Architecture
**Reference**: [Design Document](file:///Users/mac/.gemini/antigravity/brain/8505a96a-50f0-483d-b7c2-787594cf6138/multi_branch_architecture.md)

This future phase will implement the complex multi-branch logic, super admin roles, and dynamic data segregation as detailed in the separate design document.
