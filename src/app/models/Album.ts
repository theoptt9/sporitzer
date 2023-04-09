import { Song } from './Song';

export interface Album {
    id: number,
    title: String,
    songs: Array<Song>,
    albumType: {
        id: number,
        name: String
    }
    artist: {
        id: number
    }
    image: String
}
