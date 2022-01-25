 import { useQuery } from '@apollo/client';
 import { useEffect, useState } from 'react';
 import { GET_CHARECTER } from '../graphql/queries';
 import styles from '../styles/Home.module.css';

 const randomId = (_) => parseInt(Math.random() * 671);

 export default function Home() {
   const [characterId, setCharacterId] = useState(randomId());
   const { loading, error, data } = useQuery(GET_CHARECTER, {
     variables: {
       id: characterId,
     },
   });
   const [character, setCharacter] = useState();
   useEffect(() => {
     if (data) {
       console.log(data.character);
       setCharacter(data.character);
     }
   }, [data]);
   if (loading) return <div className={styles.container}> loading...</div>;
   return (
     <div className={styles.container}>
       You are
       {character && (
         <>
           <h2> {character.name} </h2>
           <img src={character.image} alt={character.name} />
         </>
       )}
       <button
         className={styles.try__again__btn}
         onClick={() => {
           setCharacterId(randomId());
         }}
       >
         {' '}
         try again
       </button>
     </div>
   );
 }
