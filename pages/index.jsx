import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <section className="glass">
      <div className={styles.container}>
        <Head>
          <title>Zachary Seebeck</title>
        </Head>
        <img src="/senior_wall.jpg" className="h-64 w-64 rounded-full mx-auto object-cover"></img>
        <h5 className="text-center text-2xl text-offwhite mt-3">Hi, I'm Zachary Seebeck</h5>
        <p className="text-white text-center text-xl mt-2">
          I am a student, developer, and musician located in Bay City, Michigan.
        </p>
        <p className="text-white text-center text-lg mt-2">
          I'm working on this new site, so for the time being there isn't much. Feel free to reach out though!
          {/* You seem to have come across my little corner of the web, well, welcome! <br/>
          Feel free to look around, and contact me if there's anything you want! */}
        </p>

        <div className="my-10 flex justify-items-center justify-evenly">
          <a href="https://github.com/ZacharySeebeck2020" target="new" className={styles.socialBtn}><FontAwesomeIcon className="mr-1" icon={faGithub}/> Github</a>
          <a href="https://www.linkedin.com/in/zacharyseebeck/" target="new" className={styles.socialBtn}><FontAwesomeIcon className="mr-1" icon={faLinkedin}/> LinkedIn</a>
          <a href="https://www.twitter.com/xeinix/" target="new" className={styles.socialBtn}><FontAwesomeIcon className="mr-1" icon={faTwitter}/> Twitter</a>
        </div>
      </div>
    </section>
  )
}
