import React, { useContext } from "react"
import MainHeader from "../layout/MainHeader"
import HotelService from "../common/HotelService"
import Parallax from "../common/Parallax"

const Home = () => {
	return (
		<section>
			<MainHeader />
			<div className="container">
				<Parallax />
				<HotelService />
				<Parallax />
			</div>
		</section>
	)
}

export default Home