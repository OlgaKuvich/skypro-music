import classNames from "classnames";
import styles from "@components/PlayListItem/PlayListItem.module.css";
import { trackType } from "@/types";
import Link from "next/link";
type trackTypePros = { item: trackType; onClick: () => void }

export default function PlayListItem({ item, onClick }: trackTypePros) {
    return (
        <div onClick={onClick} className={styles.playlistItem}>
            <div className={classNames(styles.playlistTrack, styles.track)}>
                <div className={styles.trackTitle}>
                    <div className={styles.trackTitleImage}>
                        <svg className={styles.trackTitleSvg}>
                            <use href="/image/icon/sprite.svg#icon-note" />
                        </svg>
                    </div>
                    <div className={styles.trackTitleText}>
                        <Link className={styles.trackTitleLink} href="http://">
                            {item.name} <span className={styles.trackTitleSpan} />
                        </Link>
                    </div>
                </div>
                <div className={styles.trackAuthor}>
                    <Link className={styles.trackAuthorLink} href="http://">
                        {item.author}
                    </Link>
                </div>
                <div className={styles.trackAlbum}>
                    <Link className={styles.trackAlbumLink} href="http://">
                        {item.album}
                    </Link>
                </div>
                <div className={styles.trackTime}>
                    <svg className={styles.trackTimeSvg}>
                        <use href="/image/icon/sprite.svg#icon-like" />
                    </svg>
                    <span className={styles.trackTimeText}>{item.duration_in_seconds}</span>
                </div>
            </div>
        </div>
    )
}