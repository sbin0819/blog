import { useRouter } from 'next/router';
function post() {
  // api user 없으면 redirect
  const { query } = useRouter();
  return <div>{query.post}</div>;
}

export default post;
