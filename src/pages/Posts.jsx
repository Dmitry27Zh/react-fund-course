import { useEffect, useRef, useState } from 'react'
import PostsList from '../component/PostsList'
import PostForm from '../component/PostForm'
import PostFilter from '../component/PostFilter'
import MyModal from '../component/UI/modal/MyModal/MyModal'
import MyButton from '../component/UI/button/MyButton'
import { usePosts } from '../hooks/usePosts'
import PostService from '../API/PostService'
import MyLoader from '../component/UI/loader/MyLoader/MyLoader'
import { useFetching } from '../hooks/useFetching'
import { getPageCount } from '../utils/pages'
import MyPagination from '../component/UI/pagination/MyPagination'
import { useObserver } from '../hooks/useObserver'

function Posts() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const [limit] = useState(10)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page)
    setPosts([...posts, ...response.data])
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })
  const lastElement = useRef()
  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1)
  })
  useEffect(() => {
    fetchPosts()
  }, [page])

  const addNewPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }
  const removePost = (post) => {
    setPosts(posts.filter((existingPost) => existingPost.id !== post.id))
  }

  return (
    <>
      <MyButton className="start" style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
        Create
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm addNewPost={addNewPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1>Error occurred: {postError}</h1>}
      <PostsList posts={sortedAndSearchedPosts} title="List 1" removePost={removePost} />
      <div ref={lastElement} style={{ height: 20, background: 'red' }} />
      {isPostsLoading && <MyLoader />}
      <MyPagination totalPages={totalPages} page={page} changePage={(newPage) => setPage(newPage)} />
    </>
  )
}

export default Posts
