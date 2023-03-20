import prisma from "../utils/prisma.mjs";

export default class GetSongsService {
  async handleGetSong() {
    try {
      const songs = await prisma.charlie_brown_jr_songs.findMany();
        return songs
    } catch (err) {
      return err
    }
  }

  
  async handleGetSongById(song){
    try {
      const songs = await prisma.charlie_brown_jr_songs.findUnique({
        where: {
          id: Number(song.id)
        }
      })
      return song

    } catch (err) {
         return err;
    }
  }
}