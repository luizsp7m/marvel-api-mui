import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, .05);
  cursor: pointer;
  background: #fafafa;

  &:hover {
    > img {
      opacity: .85;
    }

    > h3 {
      color: #eb1d27;
    }
  }

  > img {
    width: 100%;
    object-fit: cover;
    transition: opacity .25s;
  }

  > h3 {
    color: gray;
    font-size: 13px;
    text-align: center;

    max-width: 20ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  > p {
    color: gray;
    font-size: 13px;
    text-align: center;

    max-width: 14ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media(max-width: 375px) {
    > h3, p {
      max-width: 18ch;
    }
  }

  @media(max-width: 320px) {
    > h3, p {
      max-width: 14ch;
    }
  }
`