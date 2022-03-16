import React from 'react';
import User from '@components/User';

function UserPage() {
  // api user 없으면 redirect
  return <User />;
}
// export async function getStaticPaths() {
//   const res = await fetch('http://localhost:1337/api/users');
//   const users = await res.json();
//   const paths = users.map((user) => ({
//     params: { id: '' + user.id, name: user.username },
//   }));

//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//   console.log(params);
//   await fetch(`http://localhost:1337/api/users/${params.id}`);
//   return { props: {} };
// }
export default UserPage;
