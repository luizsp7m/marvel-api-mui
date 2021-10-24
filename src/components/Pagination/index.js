import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

export default function PaginationWrapper({ numPages }) {
  const [page, setPage] = useState(1);

  const router = useRouter();

  const { query } = useRouter();

  const changePage = (event, value) => {
    router.push(`/page/${value}`);
  };

  useEffect(() => {
    setPage(Number(query.page));
  }, [query]);

  return (
    <Stack spacing={2}>
      <Pagination
        count={numPages}
        variant="outlined"
        shape="rounded"
        onChange={changePage}
        page={page}
        color="primary"
      />
    </Stack>
  );
}