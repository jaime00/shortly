import React from 'react'
import Button from '../Button'
import './index.css'

export default function Banner() {
	return (
		<div>
			<section className="banner">
				<h2 className="banner_title">Boost your links today</h2>
				<Button className="mt-3" name="Get Started" withBack={true} />
			</section>
		</div>
	)
}
