import classNames from "classnames";
import styles from "@components/CenterBlock/CenterBlock.module.css";
import BlockFilter from "@components/BlockFilter/BlockFilter";

export default function CenterBlock() {
    return (
        <div className={classNames(styles.mainCenterblock, styles.centerblock)}>
            <div className={classNames(styles.centerblockSearch, styles.search)}>
                <svg className={styles.searchSvg}>
                    <use href="/image/icon/sprite.svg#icon-search" />
                </svg>
                <input
                    className={styles.searchText}
                    type="search"
                    placeholder="Поиск"
                    name="search"
                />
            </div>
            <h2 className={styles.centerblockH2}>Треки</h2>

            <BlockFilter />

            <div className={classNames(styles.centerblockContent, styles.playlistContent)}>
                <div className={classNames(styles.content__title, styles.playlistTitle)}>
                    <div className={classNames(styles.playlistTitleCol, styles.col01)}>Трек</div>
                    <div className={classNames(styles.playlistTitleCol, styles.col02)}>Исполнитель</div>
                    <div className={classNames(styles.playlistTitleCol, styles.col03)}>Альбом</div>
                    <div className={classNames(styles.playlistTitleCol, styles.col04)}>
                        <svg className={styles.playlistTitleSvg}>
                            <use href="/image/icon/sprite.svg#icon-watch" />
                        </svg>
                    </div>
                </div>
                <div className={classNames(styles.contentPlaylist, styles.playlist)}>
                    <div className={styles.playlistItem}>
                        <div className={classNames(styles.playlistTrack, styles.track)}>
                            <div className={styles.trackTitle}>
                                <div className={styles.trackTitleImage}>
                                    <svg className={styles.trackTitleSvg}>
                                        <use href="/image/icon/sprite.svg#icon-note" />
                                    </svg>
                                </div>
                                <div className={styles.trackTitleText}>
                                    <a className={styles.trackTitleLink} href="http://">
                                        Guilt <span className={styles.trackTitleSpan} />
                                    </a>
                                </div>
                            </div>
                            <div className={styles.trackAuthor}>
                                <a className={styles.trackAuthorLink} href="http://">
                                    Nero
                                </a>
                            </div>
                            <div className={styles.trackAlbum}>
                                <a className={styles.trackAlbumLink} href="http://">
                                    Welcome Reality
                                </a>
                            </div>
                            <div className={styles.trackTime}>
                                <svg className={styles.trackTimeSvg}>
                                    <use href="/image/icon/sprite.svg#icon-like" />
                                </svg>
                                <span className={styles.trackTimeText}>4:44</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.playlistItem}>
                        <div className={classNames(styles.playlistTrack, styles.track)}>
                            <div className={styles.trackTitle}>
                                <div className={styles.trackTitleImage}>
                                    <svg className={styles.trackTitleSvg}>
                                        <use href="/image/icon/sprite.svg#icon-note" />
                                    </svg>
                                </div>
                                <div className={styles.trackTitleText}>
                                    <a className={styles.trackTitleLink} href="http://">
                                        Elektro <span className={styles.trackTitleSpan} />
                                    </a>
                                </div>
                            </div>
                            <div className={styles.trackAuthor}>
                                <a className={styles.trackAuthorLink} href="http://">
                                    Dynoro, Outwork, Mr. Gee
                                </a>
                            </div>
                            <div className={styles.trackAlbum}>
                                <a className={styles.trackAlbumLink} href="http://">
                                    Elektro
                                </a>
                            </div>
                            <div className={styles.trackTime}>
                                <svg className={styles.trackTimeSvg}>
                                    <use href="/image/icon/sprite.svg#icon-like" />
                                </svg>
                                <span className={styles.trackTimeText}>2:22</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.playlistItem}>
                        <div className={classNames(styles.playlistTrack, styles.track)}>
                            <div className={styles.trackTitle}>
                                <div className={styles.trackTitleImage}>
                                    <svg className={styles.trackTitleSvg}>
                                        <use href="/image/icon/sprite.svg#icon-note" />
                                    </svg>
                                </div>
                                <div className={styles.trackTitleText}>
                                    <a className={styles.trackTitleLink} href="http://">
                                        I’m Fire <span className={styles.trackTitleSpan} />
                                    </a>
                                </div>
                            </div>
                            <div className={styles.trackAuthor}>
                                <a className={styles.trackAuthorLink} href="http://">
                                    Ali Bakgor
                                </a>
                            </div>
                            <div className={styles.trackAlbum}>
                                <a className={styles.trackAlbumLink} href="http://">
                                    I’m Fire
                                </a>
                            </div>
                            <div className={styles.trackTime}>
                                <svg className={styles.trackTimeSvg}>
                                    <use href="/image/icon/sprite.svg#icon-like" />
                                </svg>
                                <span className={styles.trackTimeText}>2:22</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.playlistItem}>
                        <div className={classNames(styles.playlistTrack, styles.track)}>
                            <div className={styles.trackTitle}>
                                <div className={styles.trackTitleImage}>
                                    <svg className={styles.trackTitleSvg}>
                                        <use href="/image/icon/sprite.svg#icon-note" />
                                    </svg>
                                </div>
                                <div className={styles.trackTitleText}>
                                    <a className={styles.trackTitleLink} href="http://">
                                        Non Stop
                                        <span className={styles.trackTitleSpan}>(Remix)</span>
                                    </a>
                                </div>
                            </div>
                            <div className={styles.trackAuthor}>
                                <a className={styles.trackAuthorLink} href="http://">
                                    Стоункат, Psychopath
                                </a>
                            </div>
                            <div className={styles.trackAlbum}>
                                <a className={styles.trackAlbumLink} href="http://">
                                    Non Stop
                                </a>
                            </div>
                            <div className={styles.trackTime}>
                                <svg className={styles.trackTimeSvg}>
                                    <use href="/image/icon/sprite.svg#icon-like" />
                                </svg>
                                <span className={styles.trackTimeText}>4:12</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.playlistItem}>
                        <div className={classNames(styles.playlistTrack, styles.track)}>
                            <div className={styles.trackTitle}>
                                <div className={styles.trackTitleImage}>
                                    <svg className={styles.trackTitleSvg}>
                                        <use href="/image/icon/sprite.svg#icon-note" />
                                    </svg>
                                </div>
                                <div className={styles.trackTitleText}>
                                    <a className={styles.trackTitleLink} href="http://">
                                        Run Run
                                        <span className={styles.trackTitleSpan}>(feat. AR/CO)</span>
                                    </a>
                                </div>
                            </div>
                            <div className={styles.trackAuthor}>
                                <a className={styles.trackAuthorLink} href="http://">
                                    Jaded, Will Clarke, AR/CO
                                </a>
                            </div>
                            <div className={styles.trackAlbum}>
                                <a className={styles.trackAlbumLink} href="http://">
                                    Run Run
                                </a>
                            </div>
                            <div className={styles.trackTime}>
                                <svg className={styles.trackTimeSvg}>
                                    <use href="/image/icon/sprite.svg#icon-like" />
                                </svg>
                                <span className={styles.trackTimeText}>2:54</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.playlistItem}>
                        <div className={classNames(styles.playlistTrack, styles.track)}>
                            <div className={styles.trackTitle}>
                                <div className={styles.trackTitleImage}>
                                    <svg className={styles.trackTitleSvg}>
                                        <use href="/image/icon/sprite.svg#icon-note" />
                                    </svg>
                                </div>
                                <div className={styles.trackTitleText}>
                                    <a className={styles.trackTitleLink} href="http://">
                                        Eyes on Fire
                                        <span className={styles.trackTitleSpan}>
                                            (Zeds Dead Remix)
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className={styles.trackAuthor}>
                                <a className={styles.trackAuthorLink} href="http://">
                                    Blue Foundation, Zeds Dead
                                </a>
                            </div>
                            <div className={styles.trackAlbum}>
                                <a className={styles.trackAlbumLink} href="http://">
                                    Eyes on Fire
                                </a>
                            </div>
                            <div className={styles.trackTime}>
                                <svg className={styles.trackTimeSvg}>
                                    <use href="/image/icon/sprite.svg#icon-like" />
                                </svg>
                                <span className={styles.trackTimeText}>5:20</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.playlistItem}>
                        <div className={classNames(styles.playlistTrack, styles.track)}>
                            <div className={styles.trackTitle}>
                                <div className={styles.trackTitleImage}>
                                    <svg className={styles.trackTitleSvg}>
                                        <use href="/image/icon/sprite.svg#icon-note" />
                                    </svg>
                                </div>
                                <div className={styles.trackTitleText}>
                                    <a className={styles.trackTitleLink} href="http://">
                                        Mucho Bien
                                        <span className={styles.trackTitleSpan}>
                                            (Hi Profile Remix)
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className={styles.trackAuthor}>
                                <a className={styles.trackAuthorLink} href="http://">
                                    HYBIT, Mr. Black, Offer Nissim, Hi Profile
                                </a>
                            </div>
                            <div className={styles.trackAlbum}>
                                <a className={styles.trackAlbumLink} href="http://">
                                    Mucho Bien
                                </a>
                            </div>
                            <div className={styles.trackTime}>
                                <svg className={styles.trackTimeSvg}>
                                    <use href="/image/icon/sprite.svg#icon-like" />
                                </svg>
                                <span className={styles.trackTimeText}>3:41</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.playlistItem}>
                        <div className={classNames(styles.playlistTrack, styles.track)}>
                            <div className={styles.trackTitle}>
                                <div className={styles.trackTitleImage}>
                                    <svg className={styles.trackTitleSvg}>
                                        <use href="/image/icon/sprite.svg#icon-note" />
                                    </svg>
                                </div>
                                <div className={styles.trackTitleText}>
                                    <a className={styles.trackTitleLink} href="http://">
                                        Knives n Cherries
                                        <span className={styles.trackTitleSpan} />
                                    </a>
                                </div>
                            </div>
                            <div className={styles.trackAuthor}>
                                <a className={styles.trackAuthorLink} href="http://">
                                    minthaze
                                </a>
                            </div>
                            <div className={styles.trackAlbum}>
                                <a className={styles.trackAlbumLink} href="http://">
                                    Captivating
                                </a>
                            </div>
                            <div className={styles.trackTime}>
                                <svg className={styles.trackTimeSvg}>
                                    <use href="/image/icon/sprite.svg#icon-like" />
                                </svg>
                                <span className={styles.trackTimeText}>1:48</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.playlistItem}>
                        <div className={classNames(styles.playlistTrack, styles.track)}>
                            <div className={styles.trackTitle}>
                                <div className={styles.trackTitleImage}>
                                    <svg className={styles.trackTitleSvg}>
                                        <use href="/image/icon/sprite.svg#icon-note" />
                                    </svg>
                                </div>
                                <div className={styles.trackTitleText}>
                                    <a className={styles.trackTitleLink} href="http://">
                                        Knives n Cherries
                                        <span className={styles.trackTitleSpan} />
                                    </a>
                                </div>
                            </div>
                            <div className={styles.trackAuthor}>
                                <a className={styles.trackAuthorLink} href="http://">
                                    minthaze
                                </a>
                            </div>
                            <div className={styles.trackAlbum}>
                                <a className={styles.trackAlbumLink} href="http://">
                                    Captivating
                                </a>
                            </div>
                            <div className={styles.trackTime}>
                                <svg className={styles.trackTimeSvg}>
                                    <use href="/image/icon/sprite.svg#icon-like" />
                                </svg>
                                <span className={styles.trackTimeText}>1:48</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.playlistItem}>
                        <div className={classNames(styles.playlistTrack, styles.track)}>
                            <div className={styles.trackTitle}>
                                <div className={styles.trackTitleImage}>
                                    <svg className={styles.trackTitleSvg}>
                                        <use href="/image/icon/sprite.svg#icon-note" />
                                    </svg>
                                </div>
                                <div className={styles.trackTitleText}>
                                    <a className={styles.trackTitleLink} href="http://">
                                        Knives n Cherries
                                        <span className={styles.trackTitleSpan} />
                                    </a>
                                </div>
                            </div>
                            <div className={styles.trackAuthor}>
                                <a className={styles.trackAuthorLink} href="http://">
                                    minthaze
                                </a>
                            </div>
                            <div className={styles.trackAlbum}>
                                <a className={styles.trackAlbumLink} href="http://">
                                    Captivating
                                </a>
                            </div>
                            <div className={styles.trackTime}>
                                <svg className={styles.trackTimeSvg}>
                                    <use href="image/icon/sprite.svg#icon-like" />
                                </svg>
                                <span className={styles.trackTimeText}>1:48</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.playlistItem}>
                        <div className={classNames(styles.playlistTrack, styles.track)}>
                            <div className={styles.trackTitle}>
                                <div className={styles.trackTitleImage}>
                                    <svg className={styles.trackTitleSvg}>
                                        <use href="/image/icon/sprite.svg#icon-note" />
                                    </svg>
                                </div>
                                <div className={styles.trackTitleText}>
                                    <a className={styles.trackTitleLink} href="http://">
                                        Knives n Cherries
                                        <span className={styles.trackTitleSpan} />
                                    </a>
                                </div>
                            </div>
                            <div className={styles.trackAuthor}>
                                <a className={styles.trackAuthorLink} href="http://">
                                    minthaze
                                </a>
                            </div>
                            <div className={styles.trackAlbum}>
                                <a className={styles.trackAlbumLink} href="http://">
                                    Captivating
                                </a>
                            </div>
                            <div className={styles.trackTime}>
                                <svg className={styles.trackTimeSvg}>
                                    <use href="/image/icon/sprite.svg#icon-like" />
                                </svg>
                                <span className={styles.trackTimeText}>1:48</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.playlistItem}>
                        <div className={classNames(styles.playlistTrack, styles.track)}>
                            <div className={styles.trackTitle}>
                                <div className={styles.trackTitleImage}>
                                    <svg className={styles.trackTitleSvg}>
                                        <use href="/image/icon/sprite.svg#icon-note" />
                                    </svg>
                                </div>
                                <div className={styles.trackTitleText}>
                                    <a className={styles.trackTitleLink} href="http://">
                                        Knives n Cherries
                                        <span className={styles.trackTitleSpan} />
                                    </a>
                                </div>
                            </div>
                            <div className={styles.trackAuthor}>
                                <a className={styles.trackAuthorLink} href="http://">
                                    minthaze
                                </a>
                            </div>
                            <div className={styles.trackAlbum}>
                                <a className={styles.trackAlbumLink} href="http://">
                                    Captivating
                                </a>
                            </div>
                            <div className={styles.trackTime}>
                                <svg className={styles.trackTimeSvg}>
                                    <use href="/image/icon/sprite.svg#icon-like" />
                                </svg>
                                <span className={styles.trackTimeText}>1:48</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.playlistItem}>
                        <div className={classNames(styles.playlistTrack, styles.track)}>
                            <div className={styles.trackTitle}>
                                <div className={styles.trackTitleImage}>
                                    <svg className={styles.trackTitleSvg}>
                                        <use href="/image/icon/sprite.svg#icon-note" />
                                    </svg>
                                </div>
                                <div className={styles.trackTitleText}>
                                    <a className={styles.trackTitleLink} href="http://">
                                        Knives n Cherries
                                        <span className={styles.trackTitleSpan} />
                                    </a>
                                </div>
                            </div>
                            <div className={styles.trackAuthor}>
                                <a className={styles.trackAuthorLink} href="http://">
                                    minthaze
                                </a>
                            </div>
                            <div className={styles.trackAlbum}>
                                <a className={styles.trackAlbumLink} href="http://">
                                    Captivating
                                </a>
                            </div>
                            <div className={styles.trackTime}>
                                <svg className={styles.trackTimeSvg}>
                                    <use href="/image/icon/sprite.svg#icon-like" />
                                </svg>
                                <span className={styles.trackTimeText}>1:48</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.playlistItem}>
                        <div className={classNames(styles.playlistTrack, styles.track)}>
                            <div className={styles.trackTitle}>
                                <div className={styles.trackTitleImage}>
                                    <svg className={styles.trackTitleSvg}>
                                        <use href="/image/icon/sprite.svg#icon-note" />
                                    </svg>
                                </div>
                                <div className={styles.trackTitleText}>
                                    <a className={styles.trackTitleLink} href="http://">
                                        Knives n Cherries
                                        <span className={styles.trackTitleSpan} />
                                    </a>
                                </div>
                            </div>
                            <div className={styles.trackAlbum}>
                                <a className={styles.trackAlbumLink} href="http://">
                                    minthaze
                                </a>
                            </div>
                            <div className={styles.trackAlbum}>
                                <a className={styles.trackAlbumLink} href="http://">
                                    Captivating
                                </a>
                            </div>
                            <div className={styles.trackTime}>
                                <svg className={styles.trackTimeSvg}>
                                    <use href="/image/icon/sprite.svg#icon-like" />
                                </svg>
                                <span className={styles.trackTimeText}>1:48</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.playlistItem}>
                        <div className={classNames(styles.playlistTrack, styles.track)}>
                            <div className={styles.trackTitle}>
                                <div className={styles.trackTitleImage}>
                                    <svg className={styles.trackTitleSvg}>
                                        <use href="/image/icon/sprite.svg#icon-note" />
                                    </svg>
                                </div>
                                <div className={styles.trackTitleText}>
                                    <a className={styles.trackTitleLink} href="http://">
                                        How Deep Is Your Love
                                        <span className={styles.trackTitleSpan} />
                                    </a>
                                </div>
                            </div>
                            <div className={styles.trackAuthor}>
                                <a className={styles.trackAuthorLink} href="http://">
                                    Calvin Harris, Disciples
                                </a>
                            </div>
                            <div className={styles.trackAlbum}>
                                <a className={styles.trackAlbumLink} href="http://">
                                    How Deep Is Your Love
                                </a>
                            </div>
                            <div className={styles.trackTime}>
                                <svg className={styles.trackTimeSvg}>
                                    <use href="/image/icon/sprite.svg#icon-like" />
                                </svg>
                                <span className={styles.trackTimeText}>3:32</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.playlistItem}>
                        <div className={classNames(styles.playlistTrack, styles.track)}>
                            <div className={styles.trackTitle}>
                                <div className={styles.trackTitleImage}>
                                    <svg className={styles.trackTitleSvg}>
                                        <use href="/image/icon/sprite.svg#icon-note" />
                                    </svg>
                                </div>
                                <div className={styles.trackTitleText}>
                                    <a className={styles.trackTitleLink} href="http://">
                                        Morena <span className={styles.trackTitleSpan} />
                                    </a>
                                </div>
                            </div>
                            <div className={styles.trackAuthor}>
                                <a className={styles.trackAuthorLink} href="http://">
                                    Tom Boxer
                                </a>
                            </div>
                            <div className={styles.trackAlbum}>
                                <a className={styles.trackAlbumLink} href="http://">
                                    Soundz Made in Romania
                                </a>
                            </div>
                            <div className={styles.trackTime}>
                                <svg className={styles.trackTimeSvg}>
                                    <use href="/image/icon/sprite.svg#icon-like" />
                                </svg>
                                <span className={styles.trackTimeText}>3:36</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.playlistItem}>
                        <div className={classNames(styles.playlistTrack, styles.track)}>
                            <div className={styles.trackTitle}>
                                <div className={styles.trackTitleImage}>
                                    <svg className={styles.trackTitleSvg}>
                                        <use href="/image/icon/sprite.svg#icon-note" />
                                    </svg>
                                </div>
                                <div className={styles.trackTitleText}>
                                    <a className={styles.trackTitleLink} href="http://">
                                        <span className={styles.trackTitleSpan} />
                                    </a>
                                </div>
                            </div>
                            <div className={styles.trackAuthor}>
                                <a className={styles.trackAuthorLink} href="http://"></a>
                            </div>
                            <div className={styles.trackAlbum}>
                                <a className={styles.trackAlbumLink} href="http://"></a>
                            </div>
                            <div className={styles.trackTime}>
                                <svg className={styles.trackTimeSvg}>
                                    <use href="/image/icon/sprite.svg#icon-like" />
                                </svg>
                                <span className={styles.trackTimeText} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}