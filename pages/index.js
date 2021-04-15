import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import {Toolbar} from '../components/toolbar'

export default function Home() {
  return (
    <div className="page-container">
      <Toolbar />
        <div className={styles.main}>
          <h1>Next.js News APP</h1>
          <h3> Your one stop shop for the latest news articles/</h3>
        </div>
    </div>
  )
}


// b104397bfd4d467fab25dc446b374830