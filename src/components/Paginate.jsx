import ReactPaginate from 'react-paginate';


export default function Paginate({getPage,pages}) {
    const handlePageClick =(data)=>{
        getPage(data.selected+1)
    }
    
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}

        pageCount={pages}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName={'pagination justify-content-center p-3'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        
        
        previousLinkClassName={'page-link'}
        nextLinkClassName={'page-link'}
        breakLinkClassName={'page-link'}
      />
    </>
  );
}
