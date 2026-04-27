# Observability and Uptime

## Endpoint to Monitor

Monitor:

```text
https://your-domain.example/health
```

Expected response:

```json
{
  "status": "ok",
  "service": "portfolio",
  "timestamp": "2026-04-27T00:00:00.000Z",
  "uptime": 123.456
}
```

## Better Stack Uptime

1. Create a Better Stack account.
2. Add a new uptime monitor.
3. Choose HTTP monitor.
4. URL: `https://your-domain.example/health`.
5. Expected status: `200`.
6. Check frequency: 1 minute or 3 minutes.
7. Add alert contacts for email, Slack, or phone.

## Public Status Page

1. In Better Stack, create a status page.
2. Attach the portfolio uptime monitor.
3. Add a short public description such as `Personal portfolio availability`.
4. Link the status page in your README or CV only if you want it public.

## Logs

The app writes structured JSON logs for requests, health checks, and contact form events. Container platforms can collect these logs automatically:

- Fly.io: `fly logs`
- Coolify: application logs panel
- Docker: `docker compose logs -f portfolio`

For aggregation, forward container logs to Better Stack Logtail, Grafana Loki, or your VPS syslog pipeline. Do not log secrets, tokens, or full contact messages.

## Privacy-friendly Analytics

Plausible or Umami are good choices for simple analytics. Keep analytics disabled by default, then add the provider script only after updating the privacy notice and domain settings.
