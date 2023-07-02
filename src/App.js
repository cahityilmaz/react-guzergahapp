import { useState } from "react";
//import "./App.css";

function App() {
	const data = {
		guzergahAdi: "",
		duraklar: [],
	};

	const Durak = () => {
		return (
			<div>
				<input
					type="text"
					name="durak"
					value={guzergah.duraklar.durak}
					placeholder="Durak Adı"
					onChange={guzergahOnChange}
				/>
				<input
					type="text"
					name="enlem"
					value={guzergah.duraklar.enlem}
					placeholder="Enlem"
					onChange={guzergahOnChange}
				/>
				<input
					type="text"
					name="boylam"
					value={guzergah.duraklar.boylam}
					placeholder="Boylam"
					onChange={guzergahOnChange}
				/>
			</div>
		);
	};

	const [guzergah, setGuzergah] = useState(data);

	const durakEkleOnClicked = (e) => {
		setGuzergah((guzergah) => ({
			...guzergah,
			duraklar: [
				...guzergah.duraklar,
				{
					durak: "",
					enlem: "",
					boylam: "",
				},
			],
		}));
	};

	const guzergahOnChange = (e) => {
		setGuzergah((guzergah) => ({
			...guzergah,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<div>
			<input type="text" name="guzergahAdi" value={guzergah.guzergahAdi} placeholder="Güzergah" onChange={guzergahOnChange} />
			<button onClick={durakEkleOnClicked}>Yeni Durak Ekle</button>
			<hr />
			{guzergah.duraklar.map((durak, index) => {
				return <Durak key={index} />;
			})}
			<hr />
			<button disabled={!guzergah.guzergahAdi}>Kaydet</button>
		</div>
	);
}

export default App;
