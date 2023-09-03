const axios = require("axios");
const fetch = require("node-fetch");
const nodeID3 = require("node-id3");
const youtube = require("youtube-music-api");
const yt = new youtube();
const { ytmp3, ytmp4 } = require("@nechlophomeriaa/ytdl");
const stringFunction = require("./function");

async function searchTrack(query) {
  return new Promise(async (resolve, reject) => {
    await yt
      .initalize()
      .then(async () => {
        const search = await yt.search(query, "song");
        resolve(search.content);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
}

async function downloads(query) {
  try {
    const trackOne = await searchTrack(query);
    const y2Search = await ytmp3(`https://youtu.be/${trackOne[0].videoId}`);
    const bufferThumb = await fetch(
      trackOne[0].thumbnails[1].url.split("=")[0]
    ).then((a) => a.buffer());
    const bufferTrack = await fetch(y2Search.url).then((a) => a.buffer());
    const tags = {
      title: trackOne[0].name,
      artist: trackOne[0].artist.name,
      album: trackOne[0].album.name,
      APIC: {
        description: "Front Cover",
        imageBuffer: bufferThumb,
      },
      time: trackOne[0].duration,
    };
    const bufferAudio = await nodeID3.write(tags, bufferTrack);
    const result = {
      status: true,
      title: trackOne[0].name,
      artist: trackOne[0].artist.name,
      album: trackOne[0].album.name,
      duration: stringFunction(trackOne[0].duration),
      thumbnail: trackOne[0].thumbnails[1].url.split("=")[0],
      audio: bufferAudio,
    };
    console.log(result);
    return result;
  } catch (err) {
    const result = {
      status: false,
      message: String(err),
    };
    return result;
  }
}

module.exports = { searchTrack, downloads };
