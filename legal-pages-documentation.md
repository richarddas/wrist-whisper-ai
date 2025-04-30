# wristGPT Legal Pages Documentation

## Overview

This document outlines the implementation of legal pages (Terms and Conditions, Privacy Policy) for the wristGPT application. These pages were created to ensure compliance with UK company laws and regulations while maintaining the design consistency of the application.

## Pages Created

1. **Terms and Conditions** (`/terms`)
2. **Privacy Policy** (`/privacy`)

## Implementation Details

### File Structure

The following files were created or modified:

- **New Files**:
  - `src/pages/TermsAndConditions.tsx` - Terms and Conditions page component
  - `src/pages/PrivacyPolicy.tsx` - Privacy Policy page component
  - `src/components/Header.tsx` - Header component for legal pages

- **Modified Files**:
  - `src/App.tsx` - Added routes for the new pages
  - `src/components/Footer.tsx` - Updated links to point to the new pages

### Routing Configuration

Routes were added to the application's routing configuration in `App.tsx`:

```tsx
<Routes>
  <Route path="/" element={<Index />} />
  <Route path="/terms" element={<TermsAndConditions />} />
  <Route path="/privacy" element={<PrivacyPolicy />} />
  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
  <Route path="*" element={<NotFound />} />
</Routes>
```

### Company Information

Both legal pages include the following company information:

- **Company Name**: Cleverbit AI
- **Company Number**: 15290449
- **Registered Address**: 85 Great Portland Street, First Floor, London, England, W1W 7LT
- **Contact Email**: support@wristgpt.app (for Terms and Conditions)
- **Contact Email**: privacy@wristgpt.app (for Privacy Policy)

### Terms and Conditions Content

The Terms and Conditions page includes the following sections:

1. Company Information
2. Acceptance of Terms
3. Use License
4. Disclaimer
5. Limitations
6. Accuracy of Materials
7. Links
8. Modifications
9. Governing Law
10. Consumer Rights
11. User Data and Privacy
12. Contact Us

Key legal provisions include:

- Clear usage terms and limitations
- Intellectual property protections
- Liability limitations
- Governing law (England and Wales)
- Consumer rights under UK law
- Data handling references

### Privacy Policy Content

The Privacy Policy page includes the following sections:

1. Company Information
2. Introduction
3. Data We Collect
4. How We Collect Your Data
5. How We Use Your Data
6. Data Security
7. Data Retention
8. Your Legal Rights
9. Third-Party Links
10. International Transfers
11. Cookies
12. Contact Us

Key privacy provisions include:

- Types of data collected
- Legal basis for processing
- Data security measures
- User rights under GDPR
- International data transfer safeguards
- Cookie usage information

### Navigation

A consistent header was implemented across both legal pages, featuring:

- wristGPT logo and branding
- Navigation links to Home, Terms, and Privacy pages
- Responsive design for mobile and desktop viewing

The footer was updated to include links to both legal pages.

### Design Consistency

The legal pages maintain design consistency with the rest of the application by:

- Using the same color scheme (navy, teal, silver)
- Maintaining typography standards
- Following the established layout patterns
- Using consistent spacing and section organization

## Compliance Considerations

The legal pages were designed to comply with:

- **UK Companies Act** - Proper display of company information
- **UK GDPR** - Data protection provisions and user rights
- **Consumer Rights Act** - Consumer protection provisions
- **Electronic Commerce Regulations** - Online business requirements

## Accessibility

Both pages include:

- Semantic HTML structure
- Proper heading hierarchy
- Adequate color contrast
- Responsive design for all device sizes

## URLs

The legal pages are accessible at:

- Terms and Conditions: https://wristgpt.app/terms
- Privacy Policy: https://wristgpt.app/privacy

## Future Maintenance

When updating these legal pages in the future:

1. Ensure the "Last updated" date is current
2. Maintain all required company information
3. Update any legal provisions to reflect current laws
4. Preserve the navigation and design consistency

## Conclusion

The implementation of these legal pages provides wristGPT with professionally crafted, legally compliant documents that protect both the business and its users while maintaining a seamless user experience consistent with the application's design language.
