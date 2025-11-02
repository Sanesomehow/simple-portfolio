export interface Author {
  _id: string
  name: string
  slug: { current: string }
  image?: any
  bio?: any[]
}

export interface Category {
  _id: string
  title: string
  slug: { current: string }
}

export interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  author: Author
  mainImage?: any
  categories: Category[]
  publishedAt: string
  body: any[]
}