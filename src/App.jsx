import { Header } from "./components/Header";
import { Post } from "./components/Post";

import styles from './App.module.css';

import './global.css';
import { SideBar } from "./components/SideBar";

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <Post />
        </main>
      </div>
    </>
  )
}


