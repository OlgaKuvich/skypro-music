import Link from "next/link";
import styles from "../app/not-found.module.css";

export default function NotFound() {
    return (
        <div className={styles.box}>
            <div className={styles.boxFound}>
                <h1 className={styles.boxTitle}>404</h1>
                <h3 className={styles.boxHeading}>
                    Страница не найдена
                </h3>
                <p className={styles.boxText}>
                    Возможно, она была удалена или перенесена на другой адрес
                </p>
                <Link className={styles.boxLink} href="/">
                    <p className={styles.boxLinkText}>Вернуться на главную</p>
                </Link>
            </div>
        </div>
    );
}