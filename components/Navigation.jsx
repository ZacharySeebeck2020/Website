import React from "react";
import Link from 'next/link'
import styles from '../styles/components/navigation.module.scss'
import NavItem from "./NavItem";

function Navigation(props) {
  return (
    <nav className="flex items-center justify-items-center flex-row z-10 bg-offwhite shadow-xl fixed w-screen">
		<div className="flex space-x-4 mx-auto py-2">
			<NavItem name="Home" href="/"/>
			<NavItem name="Experience" href="/experience"/>

			{/* <Link href="/">
				<a className={styles.navBtn}>Home</a>
			</Link>
			<Link href="/experience">
				<a className={styles.navBtn}>Experience</a>
			</Link> */}
			{/* <a className={styles.navBtn}>Experience</a>
			<a className={styles.navBtn}>Projects</a>
			<a className={styles.navBtn}>Resume</a> */}
		</div>
	</nav>
  );
}

export default Navigation;
