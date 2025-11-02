import { client } from './client'
import { POSTS_QUERY, POST_QUERY, RECENT_POSTS_QUERY } from './queries'

// Fetch all posts
export async function getPosts() {
  return await client.fetch(POSTS_QUERY)
}

// Fetch single post by slug
export async function getPost(slug: string) {
  return await client.fetch(POST_QUERY, { slug })
}

// Fetch recent posts
export async function getRecentPosts() {
  return await client.fetch(RECENT_POSTS_QUERY)
}

// With next-sanity for live updates (optional)
import { sanityFetch } from './live'

export async function getPostsLive() {
  return await sanityFetch({
    query: POSTS_QUERY,
    // Add tags for revalidation
    tags: ['post']
  })
}