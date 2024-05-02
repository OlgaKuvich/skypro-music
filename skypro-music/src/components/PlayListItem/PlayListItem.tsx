import classNames from "classnames";
import styles from "@components/PlayListItem/PlayListItem.module.css";
import Link from "next/link";
import { useAppDispatch } from "@/hooks";
import { setCurrentTrack } from "@/store/features/playlistSlice";
import { trackType } from "@/types";
type PlayListItemPros = {playlist: trackType[], track: trackType, time: number, name: string, album: string, author: string, setTrack: () => void,}

export default function PlayListItem({ track, playlist, setTrack, time, name, author, album }: PlayListItemPros) {
    const dispatch = useAppDispatch();
    function handleClick() {
        
        dispatch(setCurrentTrack({currentTrack: track, playlist}))
    }
    let minutes = Math.floor(time / 60);
    let seconds = (time % 60).toString().padStart(2, "0")
    return (
        <div onClick={handleClick} className={styles.playlistItem}>
            <div className={classNames(styles.playlistTrack, styles.track)}>
                <div className={styles.trackTitle}>
                    <div className={styles.trackTitleImage}>
                        <svg className={styles.trackTitleSvg}>
                            <use href="/image/icon/sprite.svg#icon-note" />
                        </svg>
                    </div>
                    <div className={styles.trackTitleText}>
                        <Link className={styles.trackTitleLink} href="http://">
                            {name} <span className={styles.trackTitleSpan} />
                        </Link>
                    </div>
                </div>
                <div className={styles.trackAuthor}>
                    <Link className={styles.trackAuthorLink} href="http://">
                        {author}
                    </Link>
                </div>
                <div className={styles.trackAlbum}>
                    <Link className={styles.trackAlbumLink} href="http://">
                        {album}
                    </Link>
                </div>
                <div className={styles.trackTime}>
                    <svg className={styles.trackTimeSvg}>
                        <use href="/image/icon/sprite.svg#icon-like" />
                    </svg>
                    <span className={styles.trackTimeText}>{`${minutes}:${seconds}`}</span>
                </div>
            </div>
        </div>
    )
}