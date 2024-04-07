"use client"
import classNames from "classnames";
import styles from "@components/BarVolumeBlock/BarVolumeBlock.module.css";
import { useState } from "react";
type BarVolumeProps = {
    handleVolume: any;
  };

export default function BarVolumeBlock({handleVolume}: BarVolumeProps) {
    const [volume, setVolume] = useState("");
    const onChange = (e: any) => {
      let newVolume = e.target.value;
      setVolume(newVolume);
      handleVolume(+newVolume)
    };
    return (
        <div className={classNames(styles.barVolumeBlock, styles.volume)}>
            <div className={styles.volumeContent}>
                <div className={styles.volumeImage}>
                    <svg className={styles.volumeSvg}>
                        <use href="/image/icon/sprite.svg#icon-volume" />
                    </svg>
                </div>
                <div className={classNames(styles.volumeProgress, styles._btn)}>
                    <input
                        className={classNames(styles.volumeProgressLine, styles._btn)}
                        type="range"
                        name="range"
                        min={0}
                        value={volume}
                        max={1}
                        onChange={onChange}
                        step={0.01}
                    />
                </div>
            </div>
        </div>
    )
}