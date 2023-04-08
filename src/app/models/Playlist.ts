import { Song } from './Song';

export interface Playlist {
    id: number,
    name: String,
    songs: Array<Song>
}
