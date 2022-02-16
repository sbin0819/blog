import styled from 'styled-components';
import PostList from './PostList';
import UserCard from './UserCard';

const Container = styled.div``;

function User() {
  return (
    <Container>
      <UserCard />
      <PostList />
    </Container>
  );
}

export default User;
