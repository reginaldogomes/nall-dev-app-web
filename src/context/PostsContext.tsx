'use client'
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'
import { fetchPosts } from '@/services/api' // Suponha que isso retorna uma array de objetos de post

// Definição de tipo para um post individual
interface Post {
  body: ReactNode
  id: number
  title: string
  content: string
}

// Tipo para o estado do contexto
interface PostsContextType {
  posts: Post[]
}

// Criação do contexto com um estado inicial
const PostsContext = createContext<PostsContextType | undefined>(undefined)

// Componente Provider
interface PostsProviderProps {
  children: ReactNode
}

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<Post[]>([]) // Usando o tipo definido para posts

  useEffect(() => {
    const loadPosts = async () => {
      const postsData = await fetchPosts() // Assumindo que isso retorna Post[]
      setPosts(postsData)
    }

    loadPosts()
  }, [])

  return (
    <PostsContext.Provider value={{ posts }}>{children}</PostsContext.Provider>
  )
}

// Hook personalizado para uso do contexto
// export const usePosts = () => {
//   const context = useContext(PostsContext)
//   if (context === undefined) {
//     throw new Error('usePosts must be used within a PostsProvider')
//   }
//   return context
// }

export function usePosts() {
  const context = useContext(PostsContext)
  if (context === undefined) {
    throw new Error('usePosts must be used within a PostsProvider')
  }
  return context
}
