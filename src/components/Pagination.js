import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useDispatch, useSelector } from 'react-redux'
import { getPage } from '../actions/MovieActions'

const Paginations = () => {
  const [pageCounts, setPageCounts] = useState(0)
  const dispatch = useDispatch()
  const pages = useSelector(state=>state.pageCount)
  useEffect(()=>{
    setPageCounts(pages)
  },[])
 
  const handlePageClick = (data)=>{
    dispatch(getPage(data.selected + 1))
  }
  return (

    <ReactPaginate
    breakLabel='...'
    nextLabel='next >'
    onPageChange={handlePageClick}
    marginPagesDisplayed={2}
    pageRangeDisplayed={2}
    pageCount={pageCounts}
    previousLabel='< previous'
    containerClassName='pagination justify-content-center p-4'
    pageClassName='page-item'
    pageLinkClassName='page-link'
    previousClassName='page-item'
    previousLinkClassName='page-link'
    nextClassName='page-item'
    nextLinkClassName='page-link'
    breakClassName='page-item'
    breakLinkClassName='page-link'
    activeClassName='active'
    />
  )
}

export default Paginations