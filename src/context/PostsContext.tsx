'use client'
// src/context/PostsContext.tsx
import { createContext, useContext, useState, useEffect } from 'react'
import { fetchPosts } from '@/services/api' // A função fetchPosts será implementada em outro passo

// Tipo para o estado do contexto
interface PostsContextType {
  posts: any[] // Defina um tipo mais específico para seus posts
}

// Criação do contexto com um estado inicial
const PostsContext = createContext<PostsContextType | undefined>(undefined)

// Componente Provider
export const PostsProvider: React.FC = ({ children }) => {
  const [posts, setPosts] = useState<any[]>([]) // Defina um tipo mais específico para seus posts

  useEffect(() => {
    const loadPosts = async () => {
      const postsData = await fetchPosts()
      setPosts(postsData)
    }

    loadPosts()
  }, [])

  return (
    <PostsContext.Provider value={{ posts }}>{children}</PostsContext.Provider>
  )
}

// Hook personalizado para uso do contexto
export const usePosts = () => {
  const context = useContext(PostsContext)
  if (context === undefined) {
    throw new Error('usePosts must be used within a PostsProvider')
  }
  return context
}
