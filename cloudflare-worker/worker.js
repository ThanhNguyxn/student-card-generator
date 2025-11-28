/**
 * Cloudflare Worker: Student Photo Proxy
 * 
 * Purpose: Bypass CORS restrictions by proxying randomuser.me API requests
 * Deployment: Cloudflare Workers (Free tier: 100k requests/day)
 * 
 * This worker:
 * 1. Receives requests from the frontend
 * 2. Fetches a random photo from randomuser.me API
 * 3. Returns the photo with proper CORS headers
 */

export default {
    async fetch(request) {
        const url = new URL(request.url);

        // Handle CORS preflight requests
        if (request.method === 'OPTIONS') {
            return handleOptions();
        }

        // Only allow GET requests
        if (request.method !== 'GET') {
            return new Response('Method not allowed', { status: 405 });
        }

        try {
            // Extract query parameters (optional: for controlling gender, etc.)
            const gender = url.searchParams.get('gender') || (Math.random() > 0.5 ? 'male' : 'female');

            // Fetch from randomuser.me API (server-side, no CORS issues)
            const apiUrl = `https://randomuser.me/api/?inc=picture&gender=${gender}`;
            const apiResponse = await fetch(apiUrl);

            if (!apiResponse.ok) {
                throw new Error('randomuser.me API failed');
            }

            const data = await apiResponse.json();
            const photoUrl = data.results[0].picture.large;

            console.log('[WORKER] Fetching photo:', photoUrl);

            // Fetch the actual photo
            const photoResponse = await fetch(photoUrl);

            if (!photoResponse.ok) {
                throw new Error('Photo fetch failed');
            }

            // Get the photo as a blob
            const photoBlob = await photoResponse.blob();

            // Return photo with CORS headers
            return new Response(photoBlob, {
                headers: {
                    'Content-Type': 'image/jpeg',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
                    'X-Proxy': 'Cloudflare Worker',
                },
            });

        } catch (error) {
            console.error('[WORKER] Error:', error);

            // Return error response with CORS headers
            return new Response(JSON.stringify({
                error: 'Failed to fetch photo',
                message: error.message
            }), {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
            });
        }
    },
};

/**
 * Handle CORS preflight OPTIONS requests
 */
function handleOptions() {
    return new Response(null, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Max-Age': '86400', // 24 hours
        },
    });
}
