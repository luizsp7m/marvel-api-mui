import styled from '@emotion/styled';

export const Container = styled.div`
  min-height: 100vh;
  background: #f0f0f5;
`

export const Content = styled.div`
  max-width: 1280px;
  width: 90%;
  margin: 0 auto;
  padding: 30px 0;

  > button {
    cursor: pointer;
    background: 0;
    border: 0;
    padding: 10px 28px;
    border: 1px solid #EB1D27;
    color: #EB1D27;
    border-radius: 5px;
    font-weight: bold;
    transition: background .25s;
    margin-bottom: 10px;

    &:hover {
      background: #EB1D27;
      color: #fafafa;
    }
  }
`