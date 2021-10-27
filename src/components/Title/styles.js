import styled from '@emotion/styled';

export const Container = styled.div`
  > h1 {
    font-size: 22px;
    color: gray;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      height: 5px;
      width: 30px;
      bottom: -5px;
      background: #eb1d27;
    }
  }
`