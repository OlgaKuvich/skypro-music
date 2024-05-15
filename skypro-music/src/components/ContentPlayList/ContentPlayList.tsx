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

    return (
        <div className={classNames(styles.contentPlaylist, styles.playlist)}>
            <div>{currentTrack?.name}</div>
            {trackList?.map((track) => (
                <PlayListItem
                    key={track.id}
                    track={track}
                    playlist={trackList}
                 
                />
            ))}
        </div>
    )
}