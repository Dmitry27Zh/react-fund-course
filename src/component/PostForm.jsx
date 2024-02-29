import { useRef } from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

const PostForm = ({ addNewPost }) => {
  const titleInputRef = useRef()
  const bodyInputRef = useRef()
  const onAddNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      id: Date.now(),
      title: titleInputRef.current.value,
      body: bodyInputRef.current.value,
    }
    addNewPost(newPost)
    titleInputRef.current.value = ''
    bodyInputRef.current.value = ''
  }

  return (
    <form>
      <MyInput ref={titleInputRef} type="text" placeholder="Title" />
      <MyInput ref={bodyInputRef} type="text" placeholder="Description" />
      <MyButton onClick={onAddNewPost}>Create</MyButton>
    </form>
  )
}

export default PostForm
