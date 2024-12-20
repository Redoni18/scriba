import { NewsFetcher } from './src/services/NewsFetcher';

export async function fetchLatestNews() {
    const newsFetcher = new NewsFetcher();
    await newsFetcher.fetchLatestNews();
}