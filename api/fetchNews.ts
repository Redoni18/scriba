import { NewsFetcher } from '../src/services/NewsFetcher'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default {
  async fetch(request: Request): Promise<Response> {
    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ message: 'Method Not Allowed' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    console.log('Starting news fetch job')
    const newsFetcher = new NewsFetcher()
    
    try {
      await newsFetcher.fetchLatestNews()
      console.log('Finished fetching and saving news')
      return new Response(JSON.stringify({ message: 'News fetch completed successfully' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
    } catch (error) {
      console.error('Error fetching and saving news:', error)
      return new Response(JSON.stringify({ error: 'Failed to fetch news' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      })
    } finally {
      await prisma.$disconnect()
    }
  }
}

