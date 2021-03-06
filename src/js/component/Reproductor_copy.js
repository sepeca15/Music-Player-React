import React, { useRef, useEffect, useState } from "react";

export function Reproductor() {
	const [songList, setSongList] = useState([
		{
			id: 1,
			category: "game",
			name: "Mario Castle",
			url: "files/mario/songs/castle.mp3"
		},
		{
			id: 2,
			category: "game",
			name: "Mario Star",
			url: "files/mario/songs/hurry-starman.mp3"
		},
		{
			id: 3,
			category: "game",
			name: "Mario Overworld",
			url: "files/mario/songs/overworld.mp3"
		},
		{
			id: 4,
			category: "game",
			name: "Mario Stage 1",
			url: "files/mario/songs/stage1.mp3"
		},
		{
			id: 5,
			category: "game",
			name: "Mario Stage 2",
			url: "files/mario/songs/stage2.mp3"
		},
		{
			id: 6,
			category: "game",
			name: "Mario Star",
			url: "files/mario/songs/starman.mp3"
		},
		{
			id: 7,
			category: "game",
			name: "Mario Underworld",
			url: "files/mario/songs/underworld.mp3"
		},
		{
			id: 8,
			category: "game",
			name: "Mario Underwater",
			url: "files/mario/songs/underwater.mp3"
		},
		{
			id: 9,
			category: "game",
			name: "Zelda Castle",
			url: "files/videogame/songs/zelda_castle.mp3"
		},
		{
			id: 10,
			category: "game",
			name: "Zelda Outworld",
			url: "files/videogame/songs/zelda_outworld.mp3"
		},
		{
			id: 11,
			category: "game",
			name: "Zelda Titles",
			url: "files/videogame/songs/zelda_title.mp3"
		},
		{
			id: 11,
			category: "game",
			name: "Sonic Brain Zone",
			url: "files/videogame/songs/sonic_brain-zone.mp3"
		},
		{
			id: 11,
			category: "game",
			name: "Zelda Link To Past",
			url: "files/videogame/songs/zelda_link-to-past.mp3"
		},
		{
			id: 12,
			category: "game",
			name: "Dong KinKong Main",
			url: "files/other/songs/dkng-main.mp3"
		},
		{
			id: 13,
			category: "game",
			name: "Dong KinKong Other",
			url: "files/other/songs/dkng-other.mp3"
		},
		{
			id: 14,
			category: "game",
			name: "mega-man",
			url: "files/other/songs/mega-man.mp3"
		},
		{
			id: 15,
			game: "cartoon",
			name: "Flintstones",
			url: "files/cartoons/songs/flintstones.mp3"
		},
		{
			id: 16,
			game: "cartoon",
			name: "power-rangers",
			url: "files/cartoons/songs/power-rangers.mp3"
		},
		{
			id: 17,
			game: "cartoon",
			name: "simpsons",
			url: "files/cartoons/songs/simpsons.mp3"
		},
		{
			id: 18,
			game: "cartoon",
			name: "south-park",
			url: "files/cartoons/songs/south-park.mp3"
		},
		{
			id: 19,
			game: "cartoon",
			name: "thundercats",
			url: "files/cartoons/songs/thundercats.mp3"
		},
		{
			id: 20,
			game: "cartoon",
			name: "x-men",
			url: "files/cartoons/songs/x-men.mp3"
		}
	]);

	const controlPlayPause = () => {
		if (reproductor.current.paused) {
			reproductor.current.play();
		} else if (!reproductor.current.paused) {
			reproductor.current.pause();
		}
	};

	let reproductor = useRef();

	//let approved = students.filter(student => student.score >= 11);

	//let idOfSongList = songList.filter(songList.id);

	//let nameOfSongList = songList.filter(songList.name);

	//let urlOfSongList = songList.filter(songList.url);

	let crearLista = () => {
		songList.map((canciones, index) => {
			return (
				<ul key={index} className="list-group list-group-horizontal">
					<li className="list-group-item">{canciones.id}</li>
					<li className="list-group-item">{canciones.name}</li>
				</ul>
			);
		});
	};

	const cambiarSrcAudio = url => {
		let stringfijo = "https://assets.breatheco.de/apis/sound/";
		reproductor.current.src = stringfijo + url;
	};

	return (
		<div className="container">
			<div className="lista" onClick={() => crearLista()}></div>
			<audio
				ref={reproductor}
				src="https://assets.breatheco.de/apis/sound/files/mario/songs/castle.mp3"
			/>
			<div className="botones row">
				<button>icon anterior cancion</button>
				<button onClick={controlPlayPause}>icon de play</button>
				<button>icon posterior cancion</button>
			</div>
		</div>
	);
}
//<div></div>
