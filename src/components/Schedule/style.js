import styled from "styled-components";

const Content = styled.div`
  margin-top: 67px;
  padding: 0 20px;
  margin-bottom: 125px;
`;

const Title = styled.p`
  height: 110px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #293845;
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.04em;
  text-align: center;
`;

const Container = styled.div`
  letter-spacing: 0.02em;
  font-weight: 400;
  text-align: center;

  margin-bottom: 20px;

  .date {
    color: #293845;
    font-size: 20px;
    line-height: 23px;

    display: flex;
    align-items: center;

    margin-bottom: 20px;
  }

  .schedules {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .show-times {
    width: 83px;
    height: 43px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 3px;
    background-color: #e8833a;

    color: #ffffff;
    font-size: 18px;
    line-height: 21px;
  }
`;

const Chosen = styled.div`
  width: 100%;
  height: 117px;

  display: flex;
  align-items: center;

  padding: 0 10px;
  background-color: #dfe6ed;
  border: 1px solid #9eadba;

  position: fixed;
  bottom: 0;
  left: 0;

  color: #293845;
  font-size: 26px;
  font-weight: 400;
  line-height: 30px;

  .movie {
    width: 64px;
    height: 89px;

    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;

    padding: 8px;
    margin-right: 14px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export default {
  Chosen,
  Container,
  Content,
  Title,
};
