export enum GENRE{All="All",Nature="Nature",Programming="Programming",Tech="Tech",Science="Science",Scientist="Scientist"}

const getGenres=()=>{
    return Object.keys(GENRE)
}
export interface Playlist{
    id: number
    name:string
    genre: GENRE[]
    url:string
}

const playlist:Playlist[]=[
    {
        id:1,
        name:"nature",
        genre:[GENRE.Nature],
        url:"videos/nature.mp4"
    },
    {
        id:2,
        name:"second nature",
        genre:[GENRE.Nature],
        url:"videos/nature2.mp4"
    },
    {
        id:3,
        name:"third nature",
        genre:[GENRE.Nature],
        url:"videos/nature3.mp4"
    },
    {
        id:4,
        name:"programming",
        genre:[GENRE.Programming],
        url:"videos/programming.mp4"
    },
    {
        id:5,
        name:"science",
        genre:[GENRE.Science],
        url:"videos/science.mp4"
    },
    {
        id:6,
        name:"second science",
        genre:[GENRE.Science],
        url:"videos/science2.mp4"
    },
    {
        id:7,
        name:"scientist",
        genre:[GENRE.Scientist],
        url:"videos/scientist.mp4"
    },
    {
        id:8,
        name:"second scientist",
        genre:[GENRE.Scientist],
        url:"videos/science.mp4"
    },
    {
        id:9,
        name:"tech",
        genre:[GENRE.Tech],
        url:"videos/tech.mp4"
    },
    {
        id:10,
        name:"second tech",
        genre:[GENRE.Tech],
        url:"videos/tech1.mp4"
    },
    {
        id:11,
        name:"third tech",
        genre:[GENRE.Tech],
        url:"videos/tech2.mp4"
    },

]

export const db={
    credential:{
        userName:"shahab",
        password:"123"
    },
    playlist,
    allGenre:getGenres()
}
