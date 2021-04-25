import React from 'react';
import Link from 'next/link';
import styles from '../styles/components/navLink.module.scss';
import { useRouter } from 'next/router';

function NavItem(props) {
    const router = useRouter();
      

    if (router.pathname === props.href) {
        return (
            <Link href={props.href}>
                <a className={styles.selected}>{props.name}</a>
            </Link>
        );
    }  
    
    return (
        <Link href={props.href}>
            <a className={styles.navBtn}>{props.name}</a>
        </Link>
    );
}

export default NavItem;