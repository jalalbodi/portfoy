---
title: "Contact Form Notes"
description: "How the form validates input, handles spam, and keeps deployment simple until a mail provider is configured."
date: "2026-04-26"
---

The contact form uses a server route so validation does not depend only on the browser. It checks name, email, and message length, then blocks submissions that fill the hidden honeypot field.

## Delivery model

When `CONTACT_WEBHOOK_URL` is not configured, the route still works and writes a structured JSON log. For production, set the webhook to a trusted mail automation, form backend, or notification service.

This keeps the project demo-friendly while avoiding hardcoded API keys or unnecessary mail dependencies.
