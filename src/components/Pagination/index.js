import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import { useState } from 'react';

import { useRouter } from 'next/router';

export default function PaginationWrapper({ numPages }) {
  const [page, setPage] = useState();

  const router = useRouter();

  const changePage = (event, value) => {
    router.push(`/page/${value}`);
  };

  return (
    <Stack spacing={2}>
      <Pagination count={numPages} variant="outlined" shape="rounded" onChange={changePage} />
    </Stack>
  );
}