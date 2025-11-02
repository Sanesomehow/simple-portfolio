// Basic query to fetch all published posts
export const POSTS_QUERY = `*[_type == "post" && defined(publishedAt)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  author->{
    name,
    slug,
    image
  },
  mainImage,
  categories[]->{
    title,
    slug
  },
  publishedAt,
  body
}`

// Query to fetch a single post by slug
export const POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  author->{
    name,
    slug,
    image,
    bio
  },
  mainImage,
  categories[]->{
    title,
    slug
  },
  publishedAt,
  body
}`

// Query to fetch recent posts (limit to 3-5)
export const RECENT_POSTS_QUERY = `*[_type == "post" && defined(publishedAt)] | order(publishedAt desc)[0...3] {
  _id,
  title,
  slug,
  author->{
    name
  },
  mainImage,
  publishedAt,
  body[0...2]
}`

// Query to fetch posts by category
export const POSTS_BY_CATEGORY_QUERY = `*[_type == "post" && defined(publishedAt) && $categorySlug in categories[]->slug.current] | order(publishedAt desc) {
  _id,
  title,
  slug,
  author->{
    name,
    slug
  },
  mainImage,
  categories[]->{
    title,
    slug
  },
  publishedAt
}`