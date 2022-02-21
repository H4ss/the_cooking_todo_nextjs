import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { firestore } from '../firebase/clientApp';

import { collection, QueryDocumentSnapshot, DocumentData, query, where, limit, getDocs, updateDoc, doc } from "@firebase/firestore";

import { useEffect, useState } from 'react';



const Home: NextPage = () => {

  const [todos, setTodos] = useState<QueryDocumentSnapshot<DocumentData>[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getTodos();
    // reset loading
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }, []);

  const todosCollection = collection(firestore, 'todos');

  const getTodos = async () => {
    const todosQuery = query(todosCollection, where('done', '==', false), limit(10));
    const querySnapshot = await getDocs(todosQuery);

    // map through todos adding them to an array
    const result: QueryDocumentSnapshot<DocumentData>[] = [];
    querySnapshot.forEach((snapshot) => {
      result.push(snapshot);
    });

    setTodos(result);
  };

  const updateTodo = async (documentId: string) => {
    // create a pointer to the Document id
    const _todo = doc(firestore, `todos/${documentId}`);
    // update the doc by setting done to true
    await updateDoc(_todo, {
      "done": true
    });
    // retrieve todos
    getTodos();
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Todos app</title>
        <meta name="description" content="Next.js firebase todos app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          Todos app
        </h1>

        <div className={styles.grid}>
          {
            loading ? (
              <div className={styles.card}>
                <h2>Loading</h2>
              </div>
            ) :
              todos.length === 0 ? (
                // console.log(todos),
                <div className={styles.card}>
                  <h2>No undone todos</h2>
                  <p>Consider adding a todo from <a href="/add-todo">here</a></p>
                  {/* {console.log(todos)} */}
                </div>
              ) : (
                todos.map((todo) => {
                  return (
                    <div className={styles.card}>
                      <h2>{todo.data().title}</h2>
                      <p>{todo.data().description}</p>
                      {/* <h2>{todo.data.arguments['title']}</h2>
            <p>{todo.data.arguments['description']}</p> */}
                      <div className={styles.cardActions}>
                        <button type="button" onClick={() => updateTodo(todo.data().id)}>Mark as done</button>
                        <button type="button">Delete</button>
                      </div>
                    </div>
                  )
                })
              )
          }
        </div>

        {/* hopefully, data will arrive here */}

      </main>


    </div>
  )
}

export default Home
