export const getPageCount = (totalPages, limit) => {
  return Math.ceil(totalPages / limit)
}

export const getPagesArray = (totalPages) => {
  return Array.from({ length: totalPages }, (_, index) => index + 1)
}
