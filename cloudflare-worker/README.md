# Cloudflare Worker: Student Photo Proxy

This Worker bypasses CORS restrictions by proxying requests to randomuser.me API.

## Files

- `worker.js` - Main Worker code
- `DEPLOYMENT_GUIDE.md` - Step-by-step deployment instructions
- `README.md` - This file

## Quick Start

1. Create a Cloudflare account (free): https://dash.cloudflare.com/sign-up/workers
2. Follow instructions in `DEPLOYMENT_GUIDE.md`
3. Update your `js/script.js` with the Worker URL

## Features

- ✅ Bypasses CORS restrictions
- ✅ 100% free (100k requests/day)
- ✅ Global edge network (fast!)
- ✅ Automatic gender randomization
- ✅ 1-hour caching for performance
- ✅ Error handling with fallback

## API

### GET /

Returns a random realistic photo from randomuser.me

**Query Parameters:**
- `gender` (optional): `male` or `female`

**Example:**
```
https://student-photo-proxy.YOUR-SUBDOMAIN.workers.dev
https://student-photo-proxy.YOUR-SUBDOMAIN.workers.dev?gender=female
```

**Response:**
- `Content-Type: image/jpeg`
- CORS headers included
- 1-hour cache

## Local Testing

You can test locally using Wrangler:

``bash
npm install -g wrangler
wrangler dev
```

Then visit `http://localhost:8787`

## Deployment

### Option 1: Dashboard (Recommended for beginners)

Follow `DEPLOYMENT_GUIDE.md`

### Option 2: Wrangler CLI (Advanced)

```bash
wrangler login
wrangler publish
```

## Monitoring

View logs and metrics in Cloudflare dashboard:
- Dashboard → Workers & Pages → student-photo-proxy → Metrics

## License

MIT
