import styled from '@emotion/styled';

export const Container = styled.div`
  background: #fafafa;
  margin: 50px 0;
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, .05);

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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;

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

  @media(max-width: 768px) {
    padding: 0;

    > p {
      width: 100%;
    }
  }
`