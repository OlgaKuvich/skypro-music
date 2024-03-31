"use client"
import classNames from "classnames";
import Image from "next/image";
import styles from "@components/Nav/Nav.module.css";
import { useState } from "react";
import Link from "next/link";

export default function Nav() {
    const [isOpened, setIsOpened] = useState(false);
    function togglePopUp() {
        setIsOpened((prev) => !prev)
    }
    return (
        <nav className={classNames(styles.mainNav, styles.nav)}>
            <div className={classNames(styles.navLogo, styles.logo)}>
                <Image
                    alt="Логотип"
                    width={113}
                    height={17}
                    className={styles.logoImage}
                    src="/image/logo.png"
                />
            </div>
            <div
            onClick={togglePopUp}
             className={classNames(styles.navBurger, styles.burger)}>
                <span className={styles.burgerLine} />
                <span className={styles.burgerLine} />
                <span className={styles.burgerLine} />
            </div>

            {isOpened &&
                (<div className={classNames(styles.navMenu, styles.menu)}>
                    <ul className={styles.menuList}>
                        <li className={styles.menuItem}>
                            <Link href="/" className={styles.menuLink}>
                                Главное
                            </Link>
                        </li>
                        <li className={styles.menuItem}>
                            <Link href="/myplaylist" className={styles.menuLink}>
                                Мой плейлист
                            </Link>
                        </li>
                        <li className={styles.menuItem}>
                            <Link href="../signin.html" className={styles.menuLink}>
                                Войти
                            </Link>
                        </li>
                    </ul>
                </div>)}

        </nav>
    )
}