import React from 'react'
import BrandInfo from '../../components/BrandInfo'
import Infografic from '../../components/Infografic'
import Navbar from '../../components/Navbar'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'

export default function Home() {
	return (
		<div className="mt-4">
			<Navbar />
			<BrandInfo />
			<Infografic />
			<Banner />
			<Footer />
		</div>
	)
}
