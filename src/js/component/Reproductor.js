import React, { useRef, useEffect, useState } from "react";

export function Reproductor() {
	const [songList, setSongList] = useState([]);

	useEffect(() => {
		obtenerSong();
	}, []);

	const obtenerSong = async () => {
		try {
			const res = await fetch(
				"https://assets.breatheco.de/apis/sound/songs"
			);
			const data = await res.json();
			setSongList(data);
		} catch (error) {
			console.log(error);
		}
	};

	const [isPlaying, setPlaying] = useState(false);

	const controlPlayPause = () => {
		if (reproductor.current.paused) {
			reproductor.current.play();
			setPlaying(true);
		} else if (!reproductor.current.paused) {
			reproductor.current.pause();
			setPlaying(false);
		}
	};

	let reproductor = useRef();

	const cambiarAudioAnterior = () => {
		let anteriorCancion = SongActual - 1;
		// verificar si el song list esta en el final poner la primera si no hacer lo demas
		if (anteriorCancion <= 0) {
			anteriorCancion = songList.length - 1;
		}
		cambiarSrcAudio(songList[anteriorCancion].url, anteriorCancion);
	};

	const cambiarAudioPosterior = () => {
		let siguienteCancion = SongActual + 1;
		// verificar si el song list esta al principio y poner la ultima si no hacer lo demas
		if (siguienteCancion > songList.length - 1) {
			siguienteCancion = 0;
		}
		cambiarSrcAudio(songList[siguienteCancion].url, siguienteCancion);
	};

	const [SongActual, setSongActual] = useState();

	const cambiarSrcAudio = (url, song) => {
		let stringfijo = "https://assets.breatheco.de/apis/sound/";
		reproductor.current.src = stringfijo + url;
		setSongActual(song);
		reproductor.current.play();
		setPlaying(true);
	};

	return (
		<div className="container">
			<table className="table table-hover table-dark oscuro">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Nombre</th>
					</tr>
				</thead>
				<tbody>
					{songList.map((canciones, index) => {
						return (
							<tr
								className={SongActual == index ? "active" : ""}
								key={index}
								onClick={() => {
									cambiarSrcAudio(canciones.url, index);
								}}>
								<th scope="row">{canciones.id}</th>
								<td>{canciones.name}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<div className="oscuro d-flex justify-content-center border-top p-1 text-white botones">
				<div onClick={cambiarAudioAnterior}>
					<i className="fas fa-backward"></i>
				</div>
				<div className="mx-4" onClick={controlPlayPause}>
					{isPlaying ? (
						<i className="fas fa-pause"></i>
					) : (
						<i className="fas fa-play"></i>
					)}
				</div>
				<div onClick={cambiarAudioPosterior}>
					<i className="fas fa-forward"></i>
				</div>
			</div>
			<audio
				ref={reproductor}
				src="https://assets.breatheco.de/apis/sound/files/mario/songs/castle.mp3"
			/>
		</div>
	);
}
//<div></div>
