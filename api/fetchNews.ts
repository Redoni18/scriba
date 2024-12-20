import { fetchLatestNews } from '../index';

export default {
  async fetch(request: Request): Promise<Response> {
    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    try {
      console.log('Starting news fetch job');
      await fetchLatestNews();
      console.log('Finished fetching and saving news');
      return new Response(JSON.stringify({ message: 'News fetch completed successfully' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (error) {
      console.error('Error fetching and saving news:', error);
      return new Response(JSON.stringify({ error: 'Failed to fetch news' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }
}