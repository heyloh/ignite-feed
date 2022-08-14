import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { SideBar } from "./components/SideBar";

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/heyloh.png",
      name: "Lohana Torres",
      role: "Software Developer @ Serasa Experian"
    },
    publishedAt: new Date('2022-07-07 20:00:00'),
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 heyloh.design/doctorcare' },
      { type: 'link', content: '#novoprojeto' },
      { type: 'link', content: '#nlw' },
      { type: 'link', content: '#rocketseat' },
    ]
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/heyloh.png",
      name: "Tauriel",
      role: "Hunter @ Home"
    },
    publishedAt: new Date('2022-07-07 20:00:00'),
    content: [
      { type: 'paragraph', content: 'Miau' },
      { type: 'paragraph', content: 'Miau Miau 🚀' },
      { type: 'link', content: '#miau' },
    ]
  }
];

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map(post => (
            <Post
              key={post.id}
              author={post.author}
              publishedAt={post.publishedAt}
              content={post.content}
            />
          ))}
        </main>
      </div>
    </>
  )
}


