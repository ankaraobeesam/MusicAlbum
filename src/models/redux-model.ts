export interface MusicModel
{
    "artistName": string,
    "collectionName": string,
    "artworkUrl100" :string,
    "collectionId" : number,

}
export interface MusicArrayModel{
    all_music : MusicModel[]
}