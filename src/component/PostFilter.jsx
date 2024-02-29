import MySelect from './UI/select/MySelect'
import MyInput from './UI/input/MyInput'

const PostFilter = ({ searchQuery, onSearch, selectedSort, onSort }) => {
  return (
    <div>
      <MyInput placeholder="Search..." value={searchQuery} onChange={(event) => onSearch(event.target.value)} />
      <MySelect
        defaultValue="Sort by"
        options={[
          { value: 'title', name: 'Name' },
          { value: 'body', name: 'Description' },
        ]}
        value={selectedSort}
        onChange={onSort}
      />
    </div>
  )
}

export default PostFilter
