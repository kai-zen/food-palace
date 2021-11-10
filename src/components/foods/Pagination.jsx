import React, {Fragment} from 'react';
import { Button } from 'react-bootstrap';

const MyPagination = ({nextPage, prevPage, currentPage}) => {
    return ( 
        <Fragment>
            <Button id='paginationNext' onClick={nextPage} style={{
                marginRight: '10px',
                fontSize: '18px',
                backgroundColor: 'var(--gold)'
            }}>بعد</Button>
            <button className='btn' style={{
                fontSize: '28px',
                marginRight: '10px',
                color: 'var(--white)'
            }}>{currentPage}</button>
            <Button id='paginationPrev' onClick={prevPage} style={{
                fontSize: '18px',
                backgroundColor: 'var(--gold)',
            }}>قبل</Button>
        </Fragment>
     );
}
 
export default MyPagination;