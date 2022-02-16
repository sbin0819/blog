import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';

// Card 데이터
// media query 로 사이즈 잡아주자
const Container = styled.div`
  width: 320px;
  aspect-ratio: 16 / 17;
  box-shadow: rgb(255 255 255 / 10%) 4px 4px 16px 8px;
  border-radius: 8px;
  cursor: pointer;
  .card_img {
    border-radius: 8px 8px 0 0;
    height: 50%;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  @media screen and (max-width: 1010px) {
    flex: 2 0 320px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 60%;
  padding: 18px 20px;
  .title {
    font-size: 1rem;
    margin: 0px 0px 0.25rem;
    line-height: 1.5;
    word-break: break-word;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-weight: bold;
  }
  .description {
    margin: 0px 0px 1.5rem;
    word-break: break-word;
    overflow-wrap: break-word;
    font-size: 0.875rem;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Footer = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
`;

interface CardProps {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  username?: string;
}
function Card({ title, description, username = 'sbinha' }: CardProps) {
  const router = useRouter();
  return (
    <Container onClick={() => router.push(`/${username}/${title}`)}>
      <div className="card_img">
        <img src="/img/cardBg.jpg" />
      </div>
      <ContentContainer>
        <div>
          <div>
            <h4 className="title">{title}</h4>
            <p className="description">
              {description} 다크 모드는 2020년의 트렌드였고, 2022년인 지금,
              너무나도 당연해져서 없으면 사용자가 많이 불편해 하죠. 다크 모드는
              벨로그에도 정말 필요했는데요, 미루고 미루다가 드디어 이번 설날
              연휴를 맞이하여 이를 적용해보려고 합니다.
            </p>
          </div>
          <div>
            <span>7일전</span>
            <span>10개의 댓글</span>
          </div>
        </div>
        <Footer>
          <div>by {username}</div>
          <div>heart 100</div>
        </Footer>
      </ContentContainer>
    </Container>
  );
}

export default Card;
