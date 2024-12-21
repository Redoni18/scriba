import { fetchLatestNews } from '../index';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('Starting news fetch job');
    await fetchLatestNews();
    console.log('Finished fetching and saving news');
    return res.status(200).json({ message: 'News fetch completed successfully' });
  } catch (error) {
    console.error('Error fetching and saving news:', error);
    return res.status(500).json({ error: 'Failed to fetch news' });
  }
}

