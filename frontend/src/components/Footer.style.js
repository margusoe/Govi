import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(0deg, #f5f7f6, #f5f7f6), #ffffff;
  display: flex;
  flex-direction: column;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 60px 0 0;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 55px 100px 20px 90px;
  background-color: #fff;
`;

export const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 10px;
  grid-column-gap: 50px;
`;

export const Title = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.125em;
  color: #000000;
  padding-bottom: 30px;
  cursor: default;
`;

export const First = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #5f5f5f;
  padding-bottom: 16px;
  cursor: default;
`;

export const Second = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #5f5f5f;
  padding-bottom: 16px;
  cursor: default;
`;
export const Third = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #5f5f5f;
  padding-bottom: 16px;
  cursor: default;
`;
export const Fourth = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #5f5f5f;
  padding-bottom: 16px;
  cursor: default;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContributorsGroup = styled.div`
  display: flex;
  flex-direction: row;
  padding: 40px 0 0;
`;

export const Image = styled.img`
  width: 36px;
  height: 22px;
  padding-right: 9px;
  cursor: pointer;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f6f6f6;
  padding: 55px 60px 20px;
  justify-content: space-between;
`;

export const SocialButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  a {
    padding-bottom: 20px;
    font-size: 18px;
    color: #000;
    text-decoration: none;
  }
`;

export const Language = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 10px;
  i {
    color: #5f5f5f;
    padding-left: 10px;
    font-size: 18px;
  }
`;

export const Span = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #5f5f5f;
  cursor: default;
`;

export const CopyRight = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  text-align: center;
  color: #575f61;
  cursor: default;
`;

export const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 0 20px 90px;
`;
