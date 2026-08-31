# Droidnode website

Minimal marketing site for Droidnode Ltd, built with Next.js 14 (App Router).
Primary purpose: satisfy Google Play Console's developer website requirement
and host a privacy policy / terms page for apps published under Droidnode.

## Structure

- `app/page.tsx` — intro, empty products section, contact
- `app/privacy/page.tsx` — privacy policy (UK GDPR)
- `app/terms/page.tsx` — terms of use
- `components/` — Nav, Products, Contact, Footer

Contact is a plain `mailto:` link (no form, no backend) to
`droidnodeltd@gmail.com`.

## Local development

```bash
npm install
npm run dev
```

## Before going live

- [ ] Point `droidnodeltd.uk` at Vercel (A/CNAME record) and add it as a
      domain in the Vercel project
- [ ] Register with the ICO (data protection fee) if not already done —
      required for most companies that process personal data, including
      via a support email address: https://ico.org.uk/for-organisations/data-protection-fee/
- [ ] If you later add analytics or marketing cookies, add a cookie
      consent banner (PECR) and update the privacy policy's cookies section

## Deploy

Push to a Git repo and import it into [Vercel](https://vercel.com/new).
