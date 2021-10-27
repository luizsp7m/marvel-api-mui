import styled from "@emotion/styled";

import Image from 'next/image';

export const StyledImage = styled(Image)`
  width: 100%;
  object-fit: cover;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    > div.characterImage {
      transform: scale(1.05);
      filter: brightness(.9);
    }

    > div.characterName {
      background-position: top;
    }
  }

  > div.characterImage {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transition: .3s;
  }

  > div.characterName {
    padding: 0 1.35rem;
    display: flex;
    justify-content: center;
    height: 145px;
    
    border-top: 5px solid #EB1D27;

    background-image: 
    linear-gradient(to bottom, #EB1D27, 50%, #151515 50%);
    background-size: 100% 200%;
    background-position: bottom;
    transition: background-position 0.5s ease-in-out;

    position: relative;

    &::after {
      content: "";
      position: absolute;
      z-index: 2;
      bottom: -15px;
      right: -15px;
      width: 25px;
      height: 25px;
      transform: rotate(45deg);
      background-color: #f0f0f5;
    }

    > h3 {
      font-size: 14px;
      text-align: center;
      color: #fafafa;
      font-weight: 500;
    }
  }
`