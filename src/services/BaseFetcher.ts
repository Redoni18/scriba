export abstract class BaseFetcher {
    protected async fetchData<T>(url: string): Promise<T> {
      try {
        const response = await fetch(url, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
          }
        });
  
        if (!response.ok) {
          if (response.status === 403 || response.status === 503) {
            console.warn(`Site ${new URL(url).hostname} appears to be protected. Skipping...`);
            return {} as T;
          }
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        return await response.json() as T;
      } catch (error) {
        console.error(`Failed to fetch data from ${url}:`, error);
        return {} as T;
      }
    }
  
    protected logError(message: string, error: unknown): void {
      console.error(message, error);
    }
  }
  
  