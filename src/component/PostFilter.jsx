import MySelect from './UI/select/MySelect'
import MyInput from './UI/input/MyInput'

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        placeholder="Search..."
        value={filter.query}
        onChange={(event) => setFilter({ ...filter, query: event.target.value })}
      />
      <MySelect
        defaultValue="Sort by"
        options={[
          { value: 'title', name: 'Name' },
          { value: 'body', name: 'Description' },
        ]}
        value={filter.sort}
        onChange={(sort) => setFilter({ ...filter, sort })}
      />
    </div>
  )
}

export default PostFilter
