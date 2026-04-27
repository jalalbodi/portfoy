# Deployment Guide

This project supports two deployment paths: Fly.io for a quick container platform deploy, and a VPS with Coolify for a self-managed production option.

## Option A: Fly.io

1. Install and authenticate the Fly CLI:
   ```bash
   fly auth login
   ```
2. Review `fly.toml` and replace the app name:
   ```toml
   app = "your-unique-portfolio-name"
   ```
3. Create the app if it does not exist:
   ```bash
   fly launch
   ```
4. Set production environment variables:
   ```bash
   fly secrets set NEXT_PUBLIC_SITE_URL=https://your-domain.example CONTACT_RECIPIENT=your.email@example.com
   ```
5. Deploy:
   ```bash
   fly deploy
   ```
6. Check status and health:
   ```bash
   fly status
   fly logs
   ```

The Fly health check calls `/health`.

## Option B: VPS + Coolify

Recommended small VPS target: Hetzner CX22 or similar. You do not need to put credentials in this repository.

1. Create a VPS and install Coolify.
2. Connect Coolify to the GitHub repository, or choose a Docker image from GHCR:
   ```text
   ghcr.io/<owner>/<repo>:latest
   ```
3. Configure environment variables in Coolify:
   ```text
   NODE_ENV=production
   NEXT_PUBLIC_SITE_URL=https://your-domain.example
   CONTACT_RECIPIENT=your.email@example.com
   CONTACT_WEBHOOK_URL=<optional webhook>
   ```
4. Use port `3000` as the container's internal port.
5. Enable the built-in reverse proxy.
6. Add your domain in Coolify and request SSL. Coolify can provision certificates through Let's Encrypt.
7. Set health check path to `/health`.

## Cloudflare Domain + SSL

1. Add the domain to Cloudflare.
2. Point DNS to your platform:
   - Fly.io: use the DNS records shown by `fly certs add your-domain.example`.
   - Coolify/VPS: create an `A` record to the VPS IPv4 address and optionally an `AAAA` record for IPv6.
3. Set SSL/TLS mode to `Full (strict)` after the origin certificate is valid.
4. Enable "Always Use HTTPS".
5. Keep redirects in one place: platform or Cloudflare, not both.

## Lighthouse

Run locally:

```bash
npm run build
npm start
```

Then open Chrome DevTools, go to Lighthouse, test desktop and mobile, and save screenshots of:

- Performance score
- Accessibility score
- Best Practices score
- SEO score
- The tested URL and timestamp

CLI option:

```bash
npx lighthouse http://localhost:3000 --view
```
