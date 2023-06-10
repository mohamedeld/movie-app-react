import ReactPaginate from 'react-paginate';


export default function Paginate({getPage}) {
    const handlePageClick =(data)=>{
        getPage(data.selected+1)
    }
    const pageCount=500;
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}

        pageCount={pageCount}
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
