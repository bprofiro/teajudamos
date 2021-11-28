import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  padding: 1.5rem 0;

  margin: 40px 0;
`;

export const DoctorsContainer = styled.section`
  background: #e5e8ea;
  opacity: 0.7;
  border-radius: 8px;

  padding: 24px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p {
    font-size: 20px;
    line-height: 28px;

    color: #00182c;

    opacity: 0.9;
  }

  > div {
    margin-top: 24px;

    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 16px;
  }
`;

export const BannerContainer = styled.section`
  background: #e5e8ea;
  opacity: 0.7;
  border-radius: 8px;

  padding: 24px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  p {
    a {
      margin-left: 4px;

      &:hover {
        filter: brightness(0.7);
      }
    }
  }
`;
