// Main.js
import React, { useEffect, useState } from "react";
import Playlist1 from "../../assets/playlist/1.jpeg";
import Playlist2 from "../../assets/playlist/2.png";
import Playlist3 from "../../assets/playlist/3.jpeg";
import Playlist4 from "../../assets/playlist/4.jpeg";
import Playlist5 from "../../assets/playlist/5.jpeg";
import Playlist6 from "../../assets/playlist/6.jpeg";
import Playlist7 from "../../assets/playlist/7.jpeg";
import Playlist8 from "../../assets/playlist/8.jpeg";
import Playlist9 from "../../assets/playlist/9.jpeg";
import Playlist10 from "../../assets/playlist/10.jpeg";
import Playlist11 from "../../assets/playlist/11.jpeg";
import Playlist12 from "../../assets/playlist/12.jpeg";
import Playlist13 from "../../assets/playlist/13.jpeg";
import Playlist14 from "../../assets/playlist/14.jpeg";
import Playlist15 from "../../assets/playlist/15.jpeg";

const Main = ({ results }) => {
  const [showArtists, setShowArtists] = useState(false);
  useEffect(() => {
    if (results.length > 0) {
      setShowArtists(true);
    } else {
      setShowArtists(false);
    }
  }, [results]);

  const playlists = [
    { image: Playlist1, text: "Boas festas", bg: "bg-card1" },
    { image: Playlist2, text: "Feitos para você", bg: "bg-card2" },
    { image: Playlist3, text: "Lançamentos", bg: "bg-card3" },
    { image: Playlist4, text: "Creators", bg: "bg-card4" },
    { image: Playlist5, text: "Para treinar", bg: "bg-card5" },
    { image: Playlist6, text: "Podcasts", bg: "bg-card6" },
    { image: Playlist7, text: "Sertanejo", bg: "bg-card7" },
    { image: Playlist8, text: "Samba e pagode", bg: "bg-card8" },
    { image: Playlist9, text: "Funk", bg: "bg-card9" },
    { image: Playlist10, text: "MPB", bg: "bg-card10" },
    { image: Playlist11, text: "Rock", bg: "bg-card11" },
    { image: Playlist12, text: "Hip Hop", bg: "bg-card12" },
    { image: Playlist13, text: "Indie", bg: "bg-card13" },
    { image: Playlist14, text: "Relax", bg: "bg-card14" },
    { image: Playlist15, text: "Música Latina", bg: "bg-card15" },
  ];

  return (
    <div className="grid-in-main h-full w-full">
      <div
        className={`w-full h-full pt-4 rounded-lg bg-playlist-container ${
          showArtists ? "hidden" : ""
        }`}
      >
        <div className="m-6">
          <h1 className="text-white text-[32px] font-bold mb-[48px]">
            Boas vindas
          </h1>
          <h2 className="text-white text-[24px] font-bold">
            Navegar por todas as seções
          </h2>
        </div>
        <div className="max-h-[43vh] m-6 overflow-y-auto overflow-hidden">
          <section className="grid grid-cols-5 justify-items-center gap-4 gap-x-8 mb-16 mx-auto">
            {playlists.map((playlist) => (
              <div
                className={`${playlist.bg} relative w-[220px] h-[200px] overflow-hidden rounded-lg group`}
                key={playlist.text}
              >
                <img
                  className="absolute -bottom-4 -right-4 h-auto w-[107px] rotate-[25deg] rounded-md group-hover:scale-110"
                  src={playlist.image}
                  alt=""
                />
                <span className="p-4 absolute text-white text-2xl font-bold">
                  {playlist.text}
                </span>
              </div>
            ))}
          </section>
        </div>
      </div>

      <div
        id="result-artist"
        className={`py-5 px-10 ${
          showArtists ? "block py-5 px-10" : "hidden"
        }`}
      >
        <div className="grid gap-6 grid-cols-cards">
          {results.map((artist) => (
            <div
              key={artist.id}
              className="bg-artist-card rounded-lg flex-1 isolate p-4 relative transition-colors duration-300 w-full hover:bg-artist-card-hover"
            >
              <div className="pb-[100%] relative w-[100%] mb-4">
                <img
                  src={artist.urlImg}
                  alt={artist.name}
                  className="h-[100%] w-[100%] left-0 top-0 absolute rounded-[50%]"
                />
                <div className="relative">
                  <span className="absolute top-120 right-10 p-4 bg-green-500 rounded-full text-sm opacity-0 transition-all ease-in-out duration-400 hover:cursor-pointer hover:opacity-100 "></span>
                </div>
              </div>
              <div className="flex flex-col text-white overflow-hidden whitespace-nowrap min-h-16">
                <div
                  title={artist.name}
                  className="flex flex-col max-w-full align-middle"
                >
                  <span className="box-border mb-0 text-lg font-bold pb-2">
                    {artist.name}
                  </span>
                  <span className="text-gray-600 font-normal text-sm">
                    {artist.genre}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
