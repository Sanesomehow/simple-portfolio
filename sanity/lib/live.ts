// Temporarily disabled live content due to experimental API issues
// You can re-enable this later when the API is stable
import { client } from './client'

// Simple fallback sanityFetch function
export const sanityFetch = async ({ query, params = {}, tags = [] }: {
  query: string;
  params?: any;
  tags?: string[];
}) => {
  return await client.fetch(query, params);
};

// Placeholder SanityLive component
export const SanityLive = () => null;

