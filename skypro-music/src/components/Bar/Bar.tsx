"use client";
import classNames from "classnames";
import styles from "@components/Bar/Bar.module.css";
import BarVolumeBlock from "@components/BarVolumeBlock/BarVolumeBlock";
import { useEffect, useRef, useState } from "react";
import ProgressBar from "@components/ProgressBar/ProgressBar";
import { formatTime } from "@/lib/formatTime";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { nextTrack, setCurrentTrack } from "@/store/features/playlistSlice";

export default function Bar() {
    const { currentTrack } = useAppSelector(
        (store) => store.playlist);
    const dispatch = useAppDispatch();
    // Использование useRef для получения доступа к элементу <audio>
    const audioRef = useRef<HTMLAudioElement>(null);
    const duration = audioRef.current?.duration || 0;
    const [currentTime, setCurrentTime] = useState(0);
    const [isLoop, setIsLoop] = useState(false);

    // Состояние для управления воспроизведением
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        audioRef.current?.play();
    }, []);

    useEffect(() => {
        audioRef.current?.addEventListener("timeupdate", updateTime);
        return () => {
            audioRef.current?.removeEventListener("timeupdate", updateTime);
        };
    }, []);

    const updateTime = () => {
        setCurrentTime(audioRef.current!.currentTime);
    }

    // Функция для воспроизведения и паузы
    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
        }
        setIsPlaying((prev) => !prev);
    };

    //cледующий трек
    const progressTrack = (value: any) => {
        setCurrentTime(value);
        if (audioRef.current) {
            audioRef.current.currentTime = value;
        }
    };

    //зацикливание
    const handleLoop = () => {
        if (audioRef.current) {
            audioRef.current.loop = !isLoop;
            setIsLoop((prev) => !prev)
        }
    };

    const [volume, setVolume] = useState(0.5);
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume])

    const handleVolume = (value: any) => {
        if (audioRef.current) {
            audioRef.current.volume = value / 100;
        }
    };

    return (
        <>
            {currentTrack && (
                <div className={styles.bar}>
                    <div className={styles.barContent}>
                        <audio src={currentTrack?.track_file} ref={audioRef}></audio>
                        <div className={styles.barTime}>
                            {currentTrack && `${formatTime(currentTime)} / ${formatTime(duration)}`}
                        </div>
                        <ProgressBar
                            value={currentTime}
                            max={duration}
                            onChange={progressTrack}
                        />
                        <div className={styles.barPlayerProgress}>
                        </div>

                        <div className={styles.barPlayerBlock}>
                            <div className={classNames(styles.barPlayer, styles.player)}>
                                <div className={styles.playerControls}>
                                    <div onClick={() => alert(`Эта функция пока недоступна`)} className={styles.playerBtnPrev}>
                                        <svg className={styles.playerBtnPrevSvg}>
                                            <use href="/image/icon/sprite.svg#icon-prev" />
                                        </svg>
                                    </div>
                                    <div onClick={togglePlay} className={classNames(styles.playerBtnPlay, styles._btn)}>
                                        <svg className={styles.playerBtnPlaySvg}>
                                            {isPlaying ? (
                                                <use href="/image/icon/sprite.svg#icon-pause"></use>
                                            ) : (
                                                <use href="/image/icon/sprite.svg#icon-play"></use>
                                            )}
                                        </svg>
                                    </div>
                                    <div onClick={() => dispatch(nextTrack())} className={styles.playerBtnNext}>
                                        <svg className={styles.playerBtnNextSvg}>
                                            <use href="/image/icon/sprite.svg#icon-next" />
                                        </svg>
                                    </div>
                                    <div onClick={handleLoop} className={classNames(styles.playerBtnRepeat, styles._btnIcon)}>
                                        <svg className={styles.playerBtnRepeatSvg}>
                                            {isLoop ? (
                                                <use href="/image/icon/sprite.svg#icon-repeatOn" />
                                            ) : (
                                                <use href="/image/icon/sprite.svg#icon-repeat" />
                                            )}
                                        </svg>
                                    </div>
                                    <div className={classNames(styles.playerBtnShuffle, styles._btnIcon)}>
                                        <svg className={styles.playerBtnShuffleSvg}>
                                            <use href="/image/icon/sprite.svg#icon-shuffle" />
                                        </svg>
                                    </div>
                                </div>
                                <div className={classNames(styles.playerTrackPlay, styles.trackPlay)}>
                                    <div className={styles.trackPlayContain}>
                                        <div className={styles.trackPlayImage}>
                                            <svg className={styles.trackPlaySvg}>
                                                <use href="/image/icon/sprite.svg#icon-note" />
                                            </svg>
                                        </div>
                                        <div className={styles.trackPlayAuthor}>
                                            <a className={styles.trackPlayAuthorLink} href="http://">
                                                {currentTrack?.author}
                                            </a>
                                        </div>
                                        <div className={styles.trackPlayAlbum}>
                                            <a className={styles.trackPlayAlbumLink} href="http://">
                                                {currentTrack?.album}
                                            </a>
                                        </div>
                                    </div>
                                    <div className={styles.trackPlayLikeDis}>
                                        <div className={classNames(styles.trackPlayLike, styles._btnIcon)}>
                                            <svg className={styles.trackPlayLikeSvg}>
                                                <use href="/image/icon/sprite.svg#icon-like" />
                                            </svg>
                                        </div>
                                        <div className={classNames(styles.trackPlayDislike, styles._btnIcon)}>
                                            <svg className={styles.trackPlayDislikeSvg}>
                                                <use href="/image/icon/sprite.svg#icon-dislike" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <BarVolumeBlock handleVolume={handleVolume} />

                        </div>
                    </div>
                </div>
            )}
        </>
    )
}