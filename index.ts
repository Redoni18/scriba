import { NewsFetcher } from '@/services/NewsFetcher'

export async function fetchLatestNews() {
    const newsFetcher = new NewsFetcher();
    await newsFetcher.fetchLatestNews();
}