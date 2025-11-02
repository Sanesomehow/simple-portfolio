'use client'

import { Projects } from './Projects'
import { Blog } from './Blog'
import { Tabs } from './components/Tabs'

export const ProjectsAndBlog = () => {
  const tabs = [
    {
      id: 'projects',
      label: 'Projects',
      content: <Projects />
    },
    {
      id: 'blog',
      label: 'Blog',
      content: <Blog />
    }
  ]

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <Tabs tabs={tabs} defaultTab="projects" />
    </div>
  )
}