import styled from '@emotion/styled';

import Image from 'next/image';

export const StyledImage = styled(Image)`
  width: 100%;
  object-fit: cover;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:hover {
    > div.cardImage {
      transform: translateY(-5px);
    }

    > div.cardBody {
      > h5 {
        color: #EB1D27;
        font-weight: 600;
      }
    }
  }

  > div.cardImage {
    transition: .3s;
  }

  > div.cardBody {
    > h5 {
      text-align: center;
      color: gray;
      font-size: 11px;
      font-weight: 500;
      transition: color .3s;
    }
  }
`