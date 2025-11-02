'use client'

import { useEffect, useState } from 'react'
import { getPosts } from '../sanity/lib/fetch'
import { BlogPost } from '../types/blog'

export const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getPosts()
        setPosts(fetchedPosts)
      } catch (error) {
        console.error('Error fetching posts:', error)
        setError('Failed to load blog posts')
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div>Loading blog posts...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="text-red-500">{error}</div>
      </div>
    )
  }

  if (posts.length === 0) {
    return (
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-4 p-8 rounded-lg border-2 border-color-border text-center">
          <div className="text-color-text-secondary text-lg">
            No blog posts yet. Check back soon!
          </div>
          <div className="text-color-text-secondary/70 text-sm">
            Create your first post in the <a href="/studio" className="underline decoration-color-accent-secondary hover:decoration-2 text-color-accent-secondary">Sanity Studio</a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-col gap-6 w-full max-w-2xl mb-10">
        {posts.map((post) => (
          <div key={post._id} className="flex flex-col gap-4 p-6 rounded-lg border-2 border-color-border transition-all duration-300 shadow-lg hover:shadow-xl">
            <div className="flex justify-between items-start">
              <div className="flex-grow">
                <h4 className="text-lg font-semibold text-color-text-main hover:text-color-accent-secondary cursor-pointer transition-all duration-300">
                  {post.title}
                </h4>
                <p className="text-sm text-color-text-secondary mt-1">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
                {post.author && (
                  <p className="text-sm text-color-text-secondary">
                    by {post.author.name}
                  </p>
                )}
              </div>
            </div>
            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.categories.map((category) => (
                  <span 
                    key={category._id} 
                    className="px-3 py-1 bg-color-accent-secondary/10 text-color-accent-secondary text-xs rounded-full border border-color-accent-secondary/20"
                  >
                    {category.title}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}