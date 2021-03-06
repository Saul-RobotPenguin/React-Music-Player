import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Player from "./components/Player";
import Colors from "./components/Colors";

const App = () => {
  const [songs, setSongs] = useState([
    {
      title: "Overthinker",
      artist: "INZO",
      album: "Overthinker",
      track: "1",
      year: "2018",
      img_src: "./songs-cover-images/overthinker-cover.jpg",
      src: "./songs/Overthinker.mp3",
    },
    {
      title: "Sunsets (Pt.2)",
      artist: "SG Lewis",
      album: "Dusk",
      track: "2",
      year: "2018",
      img_src: "./songs-cover-images/sunsets-cover-album.jpg",
      src: "./songs/SG Lewis - Sunsets (Pt. 2).mp3",
    },
    {
      title: "Enemy",
      artist: "Imagine Dragons, JID, Arcane & League Of Legends",
      album: "Single",
      track: "1",
      year: "2021",
      img_src: "./songs-cover-images/enemy-arcane-cover.jpg",
      src: "./songs/Imagine Dragons, JID - Enemy (Lyrics).mp3",
    },
    {
      title: "Triangle Summer",
      artist: "frederic",
      album: "Ototune",
      track: "6",
      year: "2015",
      img_src: "./songs-cover-images/ototune-cover.jpg",
      src: "./songs/Frederic-Triangle Summer.mp3",
    },
    {
      title: "Lover Is a Day",
      artist: "Cuco",
      album: "Wannabewithu",
      track: "1",
      year: "2016",
      img_src: "./songs-cover-images/lovers-day.jpg",
      src: "./songs/CUCO - Lover Is a Day (Audio).mp3",
    },

    {
      title: "Love In My Pocket",
      artist: "Rich Brian",
      album: "1999",
      track: "1",
      year: "2020",
      img_src: "./songs-cover-images/love-inside-my-pocket.jpg",
      src: "./songs/Love In My Pocket.mp3",
    },
    {
      title: "Makkka Na CAR",
      artist: "frederic",
      album: "Ototune",
      track: "7",
      year: "2015",
      img_src: "./songs-cover-images/ototune-cover.jpg",
      src: "./songs/Frederic - Makkana CAR.mp3",
    },
    {
      title: "I can Wait (Feat.Alana Wonders)",
      artist: "Thiago",
      album: "Single",
      track: "1",
      year: "2020",
      img_src: "./songs-cover-images/I-Can-Wait-Cover-Image.jpg",
      src: "./songs/I-Can-Wait-By-Thiago-feat-Alan Wonders.mp3",
    },
    {
      title: "still feel.",
      artist: "half??alive",
      album: "Now, Not Yet",
      track: "5",
      year: "2019",
      img_src: "./songs-cover-images/Still-Feel-Album-Cover-Half-Alive.jpg",
      src: "./songs/Still-Feel-By-Half-Alive.mp3",
    },
    {
      title: "Colors",
      artist: "Black Pumas",
      album: "Black Pumas (Deluxe Edition)",
      track: "2",
      year: "2019",
      img_src: "./songs-cover-images/Black-Pumas-Cover.jpg",
      src: "./songs/Colors-By-Black-Pumas.mp3",
    },
    {
      title: "What You Know",
      artist: "Two Door Cinema Club",
      album: "Tourist History",
      track: "8",
      year: "2010",
      img_src: "./songs-cover-images/what-you-know.jpg",
      src: "./songs/Two-Door-Cinema-Club-What-You-Know.mp3",
    },
    {
      title: "Say It",
      artist: "Yorushika",
      album: "Natsukusa Gets In The Way",
      track: "3",
      year: "2017",
      img_src: "./songs-cover-images/say-it-cover.jpg",
      src: "./songs/say-it.mp3",
    },
    {
      title: "Apparently",
      artist: "J. Cole",
      album: "2014 Forest Hills Drive",
      track: "11",
      year: "2014",
      img_src: "./songs-cover-images/apparently=cover.jpg",
      src: "./songs/Apparently.mp3",
    },
    {
      title: "Ai No Meiwaku",
      artist: "Frederic",
      album: "Owarase Night",
      track: "6",
      year: "2015",
      img_src: "./songs-cover-images/frederic-cover-owarase.jpg",
      src: "./songs/Ai no Meiwaku - Frederic.mp3",
    },
    {
      title: "Pain (feat.Future)",
      artist: "Pusha T",
      album: "My Name Is My Name",
      track: "11",
      year: "2013",
      img_src: "./songs-cover-images/Pain-PushaT-Album-Cover.jpg",
      src: "./songs/Pain-By-PushaT.mp3",
    },
    {
      title: "Part-Time Lover",
      artist: "Stevie Wonder",
      album: "In Square Circle",
      track: "1",
      year: "1985",
      img_src:
        "./songs-cover-images/Part-Time-Lover-Album-Cover-Stevie-Wonder.jpg",
      src: "./songs/Part-Time-Lover-By-Stevie-Wonder.mp3",
    },
    {
      title: "Curious",
      artist: "Rich Brian",
      album: "The Sailor",
      track: "11",
      year: "2019",
      img_src: "./songs-cover-images/Rich-Brian-Curious-Cover.jpg",
      src: "./songs/Curious-By-RichBrian.mp3",
    },
    {
      title: "Confines",
      artist: "Black Pumas",
      album: "Black Pumas (Deluxe Edition)",
      track: "8",
      year: "2019",
      img_src: "./songs-cover-images/Black-Pumas-Cover.jpg",
      src: "./songs/Confines-By-Black-Pumas.mp3",
    },
    {
      title: "Freeze Me",
      artist: "Death From Above 1979",
      album: " Outrage! Is Now",
      track: "2",
      year: "2017",
      img_src: "./songs-cover-images/Freeze-Me-Cover-By-DFA1979.jpg",
      src: "./songs/Freeze-Me-By-Death-From-Above-1979.mp3",
    },
    {
      title: "Sweater Wo Nugasanaide",
      artist: "Frederic",
      album: "Owarase Night",
      track: "5",
      year: "2015",
      img_src: "./songs-cover-images/frederic-cover-owarase.jpg",
      src: "./songs/Sweater Wo Nugasanaide.mp3",
    },
    {
      title: "Don't Wanna Fight",
      artist: "Alabama Shakes",
      album: "Sound & Color",
      track: "2",
      year: "2015",
      img_src:
        "./songs-cover-images/Alabama-Shakes-Dont-Wanna-Fight-Album-Cover.jpg",
      src: "./songs/Dont-Wanna-Fight-By-Alabama-Shakes.mp3",
    },
    {
      title: "Industry Baby",
      artist: "Lil Nas",
      album: "Single",
      track: "1",
      year: "2021",
      img_src: "./songs-cover-images/Industry-Baby-Cover.jpg",
      src: "./songs/Industry-Baby-Lil-Nas.mp3",
    },
    {
      title: "Mitei",
      artist: "chilldspot",
      album: "Mitei",
      track: "1",
      year: "2021",
      img_src: "./songs-cover-images/childspot-mitei.jpg",
      src: "./songs/childspot-mitei.mp3",
    },
    {
      title: "Everything Black (feat. Mike Taylor)",
      artist: "Unlike Pluto",
      album: "Single",
      track: "1",
      year: "2017",
      img_src: "./songs-cover-images/Everything-Black-Cover.jpg",
      src: "./songs/Unlike Pluto - Everything Black (feat. Mike Taylor) [Official Lyric Video].mp3",
    },
    {
      title: "For You Ufo",
      artist: "frederic",
      album: "Ototune",
      track: "2",
      year: "2015",
      img_src: "./songs-cover-images/ototune-cover.jpg",
      src: "./songs/FREDERIC - For You UFO.mp3",
    },
    {
      title: "Noudouteki Sanpunkan -3 min.-",
      artist: "Tokyo Incidents",
      album: "Sports",
      track: "7",
      year: "2010",
      img_src: "./songs-cover-images/tokyo-incidents-cover.jpg",
      src: "./songs/Tokyo Incidents 3mins.mp3",
    },
    {
      title: "Amsterdam",
      artist: "Nothing But Thieves",
      album: "Broken Machine (Deluxe)",
      track: "2",
      year: "2017",
      img_src: "./songs-cover-images/nothing-but-thieves-amsterdam.jpg",
      src: "./songs/Nothing But Thieves - Amsterdam (Lyrics Video).mp3",
    },
    {
      title: "Through Windows",
      artist: "Wild Nothing",
      album: "Indigo",
      track: "6",
      year: "2018",
      img_src: "./songs-cover-images/thorugh-windows-cover.jpg",
      src: "./songs/Wild Nothing - Through Windows.mp3",
    },
    {
      title: "Okinimesumama",
      artist: "Eve",
      album: "Bunka",
      track: "9",
      year: "2017",
      img_src: "./songs-cover-images/Okinimesumama-Cover.jpg",
      src: "./songs/Okinimesumama.mp3",
    },
    {
      title: "Alrighty Aphrodite",
      artist: "Peach Pit",
      album: "Being So Normal",
      track: "4",
      year: "2017",
      img_src: "./songs-cover-images/alrighty-aphrodite=cover.jpg",
      src: "./songs/Peach Pit - Alrighty Aphrodite.mp3",
    },
    {
      title: "Wildflowers",
      artist: "FARR",
      album: "Weightless",
      track: "6",
      year: "2020",
      img_src: "./songs-cover-images/wildflowers-cover.jpg",
      src: "./songs/FARR ??? Wildflowers.mp3",
    },
    {
      title: "Lately",
      artist: "Forrest., Biskwiq & Ryce",
      album: "Single",
      track: "1",
      year: "2018",
      img_src: "./songs-cover-images/lately-cover.jpg",
      src: "./songs/Forrest - Lately w_ RYCE & Biskwiq.mp3",
    },

    {
      title: "Be There",
      artist: "IAMDYNAMITE ",
      album: "Wasa Tusa",
      track: "1",
      year: "2015",
      img_src: "./songs-cover-images/bethere-cover.jpg",
      src: "./songs/IAMDYNAMITE - Be There.mp3",
    },
    {
      title: "Gamble",
      artist: "Atwood",
      album: "loverboy",
      track: "1",
      year: "2019",
      img_src: "./songs-cover-images/atwood-gamble-cover.jpg",
      src: "./songs/Atwood ??? Gamble (Lyrics) [CC].mp3",
    },

    {
      title: "hours",
      artist: "again&again",
      album: "single",
      track: "1",
      year: "2020",
      img_src: "./songs-cover-images/hours-cover.jpg",
      src: "./songs/again&again ??? Hours (Lyrics) [CC].mp3",
    },
    {
      title: "eighty-five",
      artist: "again&again ",
      album: "Single",
      track: "1",
      year: "2020",
      img_src: "./songs-cover-images/again-85.jpg",
      src: "./songs/again&again ??? Eighty-Five (Lyrics) [CC].mp3",
    },
    {
      title: "Sunflower",
      artist: "Rex Orange County",
      album: "Sunflower",
      track: "1",
      year: "2017",
      img_src: "./songs-cover-images/rex-orange-county-sunflower.jpg",
      src: "./songs/Rex Orange County - Sunflower (Official Audio).mp3",
    },
    {
      title: "Future Icecream",
      artist: "frederic",
      album: "Ototune",
      track: "1",
      year: "2015",
      img_src: "./songs-cover-images/ototune-cover.jpg",
      src: "./songs/Frederic - FUTURE ICE CREAM _FUTURE ICE CREAM.mp3",
    },
    {
      title: "Sadboy",
      artist: "Naaz",
      album: "Single",
      track: "1",
      year: "2016",
      img_src: "./songs-cover-images/sadboy-naaz.jpg",
      src: "./songs/Naaz ??? SADBOY (Lyrics) [CC].mp3",
    },
    {
      title: "strangers",
      artist: "biosphere Feat. love-sadkid, Chris Wright & Ciki",
      album: "Single",
      track: "1",
      year: "2017",
      img_src: "./songs-cover-images/strangers-biopshere-cover.jpg",
      src: "./songs/biosphere ??? strangers (ft. love-sadkid, chris wright & ciki) (lyrics).mp3",
    },
    {
      title: "Oddloop",
      artist: "frederic",
      album: "Frederhythm",
      track: "10",
      year: "2016",
      img_src: "./songs-cover-images/oddloop-cover.jpg",
      src: "./songs/Frederic-oddloop.mp3",
    },
    {
      title: "Cynicalture",
      artist: "frederic",
      album: "Frederhythm",
      track: "11",
      year: "2016",
      img_src: "./songs-cover-images/fredrythym-cover.jpg",
      src: "./songs/CYNICALTURE-frederic.mp3",
    },
    {
      title: "See You Again (feat. Kali Uchis)",
      artist: "Tyler, The Creator",
      album: "Flower Boy",
      track: "4",
      year: "2017",
      img_src: "./songs-cover-images/see-youagain-cover.jpg",
      src: "./songs/SEE YOU AGAIN _ TYLER, THE CREATOR FT. KALI UCHIS (LYRICS).mp3",
    },
    {
      title: "Big Brown Eyes",
      artist: "Benny Sings",
      album: "Art (iTunes)",
      track: "1",
      year: "2011",
      img_src: "./songs-cover-images/big-browneyes.jpg",
      src: "./songs/BENNY SINGS - Big Brown Eyes.mp3",
    },
    {
      title: "Finesse (Remix)",
      artist: "Bruno Mars & Cardi B ",
      album: "Single",
      track: "1",
      year: "2018",
      img_src: "./songs-cover-images/finesse-cover.jpg",
      src: "./songs/Bruno Mars - Finesse (Lyrics) Feat. Cardi B.mp3",
    },
    {
      title: "Stay Tune",
      artist: "Suchmos",
      album: "LOVE&VICE",
      track: "1",
      year: "2016",
      img_src: "./songs-cover-images/suchmos-cover.jpg",
      src: "./songs/STAY TUNE_SUCHMOS.mp3",
    },
    {
      title: "Rererepeat",
      artist: "frederic",
      album: "Frederhythm",
      track: "2",
      year: "2016",
      img_src: "./songs-cover-images/fredrythym-cover.jpg",
      src: "./songs/frederic - Rererepeat.mp3",
    },
    {
      title: "Can't Hold Us (feat. Ray Dalton)",
      artist: "Macklemore & Ryan Lewis",
      album: "The Heist",
      track: "2",
      year: "2012",
      img_src: "./songs-cover-images/the-heist-cover.jpg",
      src: "./songs/Macklemore & Ryan Lewis - Can't Hold Us ft. Ray Dalton .mp3",
    },
    {
      title: "Human",
      artist: "Rag N Bone Man",
      album: "Single",
      track: "1",
      year: "2016",
      img_src: "./songs-cover-images/human-cover.jpg",
      src: "./songs/Rag'n'Bone Man - Human.mp3",
    },
    {
      title: "The List",
      artist: "Moonchild",
      album: "Voyager",
      track: "6",
      year: "2017",
      img_src: "./songs-cover-images/moonlist-voyager-cover.jpg",
      src: "./songs/Moonchild - The List .mp3",
    },
    {
      title: "Clorox Wipe",
      artist: "Chromeo",
      album: "Quarantine Casanova",
      track: "1",
      year: "2020",
      img_src: "./songs-cover-images/chromeo-clorox-wipe-cover.jpg",
      src: "./songs/Chromeo - Clorox Wipe.mp3",
    },
    {
      title: "Owarase Night",
      artist: "frederic",
      album: "Frederhythm",
      track: "14",
      year: "2016",
      img_src: "./songs-cover-images/fredrythym-cover.jpg",
      src: "./songs/OWARASE NIGHT - Frederic.mp3",
    },

    {
      title: "Shiawasetteiu Kaibutsu",
      artist: "frederic",
      album: "Oddloop",
      track: "3",
      year: "2016",
      img_src: "./songs-cover-images/oddloop-cover.jpg",
      src: "./songs/Frederic - Shiawasetteiu Kaibutsu.mp3",
    },
    {
      title: "Hymn for the Weekend",
      artist: "Coldplay",
      album: "A Head Full of Dreams",
      track: "3",
      year: "2015",
      img_src: "./songs-cover-images/coldplay-album-cover.jpg",
      src: "./songs/Hymn for the Weekend Studio Audio.mp3",
    },
    {
      title: "I Don't Know You",
      artist: "The Marias",
      album: "Single",
      track: "1",
      year: "2017",
      img_src: "./songs-cover-images/idont-knowyou-marias.jpg",
      src: "./songs/The Mar??as - I Don't Know You [Lyrics].mp3",
    },
    {
      title: "Kanashii Ureshii",
      artist: "frederic",
      album: "Togenkyo",
      track: "3",
      year: "2017",
      img_src: "./songs-cover-images/tokyoggenko-cover.jpg",
      src: "./songs/(Kanashii Ureshii).mp3",
    },
    {
      title: "Sangria (feat. Arlo Parks)",
      artist: "Easy Life",
      album: "Single",
      track: "1",
      year: "2019",
      img_src: "./songs-cover-images/sangria-easylife-cover.jpg",
      src: "./songs/Easy Life - Sangria (feat. Arlo Parks).mp3",
    },
    {
      title: "Kakattekoiyo",
      artist: "NakamuraEmi",
      album: "Nipponno Onnawo Utau Vol. 5",
      track: "3",
      year: "2018",
      img_src: "./songs-cover-images/nippon-cover-album.jpg",
      src: "./songs/kakatte koi yo - NakamuraEmi.mp3",
    },
    {
      title: "Slow Dances",
      artist: "Winnetka Bowling League",
      album: "Single",
      track: "1",
      year: "2019",
      img_src: "./songs-cover-images/slow-dances-cover.jpg",
      src: "./songs/Winnetka Bowling League - Slow Dances.mp3",
    },
    {
      title: "Only Wonder",
      artist: "frederic",
      album: "Frederhythm",
      track: "1",
      year: "2016",
      img_src: "./songs-cover-images/fredrythym-cover.jpg",
      src: "./songs/frederic-ONLYWONDER.mp3",
    },
    {
      title: "Sense",
      artist: "BAND-MAID",
      album: "Sense",
      track: "1",
      year: "2021",
      img_src: "./songs-cover-images/sense-bandmaid-cover.jpg",
      src: "./songs/BAND-MAID-Sense.mp3",
    },
    {
      title: "Light",
      artist: "frederic",
      album: "LIGHT",
      track: "1",
      year: "2018",
      img_src: "./songs-cover-images/light-cover.jpg",
      src: "./songs/frederic-LIGHT.mp3",
    },
    {
      title: "Night Step",
      artist: "frederic",
      album: "Frederhythm",
      track: "8",
      year: "2016",
      img_src: "./songs-cover-images/fredrythym-cover.jpg",
      src: "./songs/frederic- Night Step.mp3",
    },
    {
      title: "Hello Goodbye",
      artist: "frederic",
      album: "Ototune",
      track: "3",
      year: "2015",
      img_src: "./songs-cover-images/ototune-cover.jpg",
      src: "./songs/FREDERIC - Hello Goodbye.mp3",
    },
    {
      title: "Hyohyo To Emotion",
      artist: "frederic",
      album: "Hyohyo To Emotion - EP",
      track: "1",
      year: "2018",
      img_src: "./songs-cover-images/hyohyo-to-emotion-cover.jpg",
      src: "./songs/frederic-Hyohyo to Emotion.mp3",
    },

    {
      title: "Toumei Ningen",
      artist: "frederic",
      album: "Ototune",
      track: "4",
      year: "2015",
      img_src: "./songs-cover-images/ototune-cover.jpg",
      src: "./songs/Toumei Ningen - Frederic.mp3",
    },
    {
      title: "Ongaku To Iu Namae No Fuku",
      artist: "frederic",
      album: "Frederhythm",
      track: "13",
      year: "2016",
      img_src: "./songs-cover-images/fredrythym-cover.jpg",
      src: "./songs/(Frederic)-Ongaku to Iu Namae no Fuku.mp3",
    },
    {
      title: "ENDLESSTEP",
      artist: "INUMOKUWANEEYO",
      album: "hommage only",
      track: "22",
      year: "2020",
      img_src: "./songs-cover-images/endless-step-cover.jpg",
      src: "./songs/endlessstep.mp3",
    },

    {
      title: "Uso",
      artist: "frederic",
      album: "Ototune",
      track: "5",
      year: "2015",
      img_src: "./songs-cover-images/ototune-cover.jpg",
      src: "./songs/Frederic-USO.mp3",
    },

    {
      title: "Uwasa no Kemuri no Onnanoko",
      artist: "frederic",
      album: "Oddloop",
      track: "6",
      year: "2016",
      img_src: "./songs-cover-images/oddloop-cover.jpg",
      src: "./songs/Frederic - Uwasa no Kemuri no Onnanoko.mp3",
    },
    {
      title: "Kitaku Beats",
      artist: "frederic",
      album: "Frederhythm",
      track: "4",
      year: "2016",
      img_src: "./songs-cover-images/fredrythym-cover.jpg",
      src: "./songs/kitaku beats-frederic.mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <h1>Saul's Music Player</h1>

      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
      <Colors />
    </div>
  );
};

export default App;
