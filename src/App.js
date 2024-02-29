import { useMemo, useState } from 'react'
import './styles/App.css'
import PostsList from './component/PostsList'
import PostForm from './component/PostForm'
import PostFilter from './component/PostFilter'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'ghl', body: '3description' },
    { id: 2, title: 'def', body: '1description' },
    { id: 3, title: 'abc', body: '2description' },
  ])
  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    } else {
      return posts
    }
  }, [selectedSort, posts])
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) => post.title.trim().toLowerCase().includes(searchQuery.trim().toLowerCase()))
  }, [sortedPosts, searchQuery])
  const addNewPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter((existingPost) => existingPost.id !== post.id))
  }
  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }

  return (
    <div className="App">
      <PostForm addNewPost={addNewPost} />
      <hr style={{ margin: '15px 0' }} />
      <PostFilter
        onSearch={(newSearchQuery) => setSearchQuery(newSearchQuery)}
        selectedSort={selectedSort}
        onSort={sortPosts}
      />
      {sortedAndSearchedPosts.length === 0 ? (
        'No posts...'
      ) : (
        <PostsList posts={sortedAndSearchedPosts} title="List 1" removePost={removePost} />
      )}
    </div>
  )
}

export default App
