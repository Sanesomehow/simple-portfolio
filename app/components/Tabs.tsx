'use client'

import { useState } from 'react'

interface TabsProps {
  tabs: {
    id: string
    label: string
    content: React.ReactNode
  }[]
  defaultTab?: string
}

export const Tabs = ({ tabs, defaultTab }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id)

  const activeContent = tabs.find(tab => tab.id === activeTab)?.content

  return (
    <div className="w-full flex flex-col items-center">
      {/* Tab Navigation */}
      <div className="flex border-b-2 border-color-border mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-8 py-4 text-lg font-semibold transition-all duration-300 ${
              activeTab === tab.id
                ? 'border-b-2 border-color-accent-secondary text-color-text-main -mb-0.5'
                : 'text-color-text-secondary hover:text-color-text-main hover:border-b-2 hover:border-color-accent-primary hover:-mb-0.5'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      {/* Tab Content */}
      <div className="w-full">
        {activeContent}
      </div>
    </div>
  )
}