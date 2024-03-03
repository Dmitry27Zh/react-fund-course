import { useMemo } from 'react'
import MyButton from '..//button/MyButton'
import { getPagesArray } from '../../../utils/pages'

const MyPagination = ({ totalPages, page, changePage }) => {
  const pagesArray = useMemo(() => {
    return getPagesArray(totalPages)
  }, [totalPages])

  return (
    <div className="pagination">
      {pagesArray.map((pageItem) => {
        const rootClasses = ['pagination__button']
        if (pageItem === page) {
          rootClasses.push('current')
        }

        return (
          <MyButton key={pageItem} className={rootClasses.join(' ')} onClick={() => changePage(pageItem)}>
            {pageItem}
          </MyButton>
        )
      })}
    </div>
  )
}

export default MyPagination
