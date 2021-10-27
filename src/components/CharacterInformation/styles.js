import styled from '@emotion/styled';

import Image from 'next/image';

export const StyledImage = styled(Image)`
  border-radius: 10px;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  margin: 30px 0 60px 0;
  border-radius: 10px;
  justify-content: center;

  @media(max-width: 768px) {
    flex-direction: column;
    gap: 30px;
    padding: 30px;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Description = styled.div`  
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;

  max-width: 668px;

  > h1 {
    color: gray;
    margin: 0;
    text-align: center;
  }

  > p {
    text-align: center;
    width: 70%;
    color: gray;
    line-height: 30px;
  }

  > div.moreInformation {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    > span {
      font-size: 16px;
      font-weight: 500;
      color: gray;
    }

    > div {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;

      > a {
        font-size: 14px;
        width: 100px;
        text-align: center;
        text-decoration: none;
        padding: 6px 14px;
        border: 1px solid #2c3e50;
        color: #2c3e50;
        border-radius: 5px;
        font-weight: 400;
        text-transform: capitalize;
        transition: background .25s;

        &:hover {
          background: #2c3e50;
          color: #fafafa;
        }
      }
    }
  }

  @media(max-width: 768px) {
    padding: 0;

    > p {
      width: 100%;
    }
  }
`