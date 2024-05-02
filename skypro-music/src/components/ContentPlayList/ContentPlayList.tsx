"use client";
import classNames from "classnames";
import styles from "@components/ContentPlayList/ContentPlayList.module.css";
import PlayListItem from "@components/PlayListItem/PlayListItem";
import { trackType } from "@/types";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useEffect, useState } from "react";
import { getTracks } from "@/api/tracks";
import { setCurrentTrack, setPlayList } from "@/store/features/playlistSlice";

export default function ContentPlayList() {
    const currentTrack = useAppSelector((store) => store.playlist.currentTrack);
    
    // получаем треки из API
    const [trackList, setTrackList] = useState<trackType[]>([]);
    useEffect(() => {
        getTracks().then((data) => setTrackList(data))
    }, [])

    // настройка воспроизведения трека
    const dispatch = useAppDispatch();
    // const { track } = useAppSelector((state) => state.track);
    const handleTrack = (track: trackType) => {
        // dispatch(setCurrentTrack(track));
        dispatch(setPlayList(trackList));
      };

    return (
        <div className={classNames(styles.contentPlaylist, styles.playlist)}>
            <div>{currentTrack?.name}</div>
            {trackList?.map((track: trackType) => (
                <PlayListItem
                    key={track.id}
                    setTrack={() => handleTrack(track)}
                    name={track.name}
                    author={track.author}
                    album={track.album}
                    time={track.duration_in_seconds}
                />
            ))}
        </div>
    )
}