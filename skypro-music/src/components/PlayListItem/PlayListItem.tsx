import classNames from "classnames";
import styles from "@components/PlayListItem/PlayListItem.module.css";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setCurrentTrack } from "@/store/features/playlistSlice";
import { trackType } from "@/types";
import { RootState } from "../../store/store";
type PlayListItemPros = { isCurrentTrack: boolean, playlist: trackType[], track: trackType, time: number, name: string, album: string, author: string, onClick: () => void, }

export default function PlayListItem({ isCurrentTrack, track, playlist, onClick, time, name, author, album }: PlayListItemPros) {
    const dispatch = useAppDispatch();
    const { isPlaying } = useAppSelector((state: RootState) => state.playlist);
    function handleClick() {

        dispatch(setCurrentTrack({ currentTrack: track, playlist }))
    }
    let minutes = Math.floor(time / 60);
    let seconds = (time % 60).toString().padStart(2, "0")
    return (
        <div onClick={handleClick} className={styles.playlistItem}>
            <div className={classNames(styles.playlistTrack, styles.track)}>
                <div className={styles.trackTitle}>
                    <div className={styles.trackTitleImage}>
                        {isCurrentTrack ? (
                            <div
                                className={classNames(styles.trackImagePlaying, {
                                    [styles.trackAnimation]: isPlaying,
                                })}
                            ></div>
                        ) : (
                            <svg className={styles.trackTitleSvg}>
                                <use href="/image/icon/sprite.svg#icon-note" />
                            </svg>
                        )}
                    </div>
                    <div className={styles.trackTitleText}>
                        <div className={styles.trackTitleLink}>
                            {name} <span className={styles.trackTitleSpan} />
                        </div>
                    </div>
                </div>
                <div className={styles.trackAuthor}>
                    <div className={styles.trackAuthorLink}>
                        {author}
                    </div>
                </div>
                <div className={styles.trackAlbum}>
                    <div className={styles.trackAlbumLink}>
                        {album}
                    </div>
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