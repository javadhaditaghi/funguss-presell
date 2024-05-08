import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import blogService from './blogsService';
import { useState, useEffect } from 'react';


const pageSize = 6;
export default function BlogsPagination({ setBlogItems }) {

    const [pagination, setPagination] = useState({
        count: 0,
        from: 0,
        to: pageSize
    });



    useEffect(() => {
        blogService.getData({ from: pagination.from, to: pagination.to }).then((response) => {
            setPagination({ ...pagination, count: response.count })
            setBlogItems(response.data)
        }

        )
    }, [pagination.from, pagination.to])


    const handlePageChange = (event, page) => {
        const from = (page - 1) * pageSize;
        const to = (page - 1) * pageSize + pageSize;
        setPagination({ ...pagination, from: from, to: to });
    };


    return (
        <Pagination count={Math.ceil(pagination.count / pageSize)} onChange={handlePageChange} variant="outlined" shape="rounded" />
    );
}
