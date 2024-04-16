// "use client"
// import classNames from "classnames";
// import styles from "@components/NavMenu/NavMenu.module.css";
// import { useState } from "react";
// import Link from "next/link";

// export default function NavMenu() {
//     const [isOpened, setIsOpened] = useState(false);
//     function togglePopUp() {
//         setIsOpened((prev) => !prev)
//     }
//     return (
//         <>
//             {isOpened &&
//                 (<div className={classNames(styles.navMenu, styles.menu)}>
//                     <ul className={styles.menuList}>
//                         <li className={styles.menuItem}>
//                             <Link href="/" className={styles.menuLink}>
//                                 Главное
//                             </Link>
//                         </li>
//                         <li className={styles.menuItem}>
//                             <Link href="/myplaylist" className={styles.menuLink}>
//                                 Мой плейлист
//                             </Link>
//                         </li>
//                         <li className={styles.menuItem}>
//                             <Link href="../signin.html" className={styles.menuLink}>
//                                 Войти
//                             </Link>
//                         </li>
//                     </ul>
//                 </div>)}
//         </>
//     )
// }