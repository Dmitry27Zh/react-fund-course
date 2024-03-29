import { useMemo } from 'react'

export const useSortedPosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
    } else {
      return posts
    }
  }, [sort, posts])

  return sortedPosts
}

export const usePosts = (posts, sort, query) => {
  const sortedPosts = useSortedPosts(posts, sort)
  console.log(sortedPosts)
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) => post.title.trim().toLowerCase().includes(query.trim().toLowerCase()))
  }, [sortedPosts, query])

  return sortedAndSearchedPosts
}
