import React from 'react'
import ShortenerSection from '../ShortenerSection'
import Card from '../Card'
import { CARD_LABELS } from '../../utils/constants'
import './index.css'

export default function Infografic() {
	return (
		<section className="infographic">
			<ShortenerSection />
			<header className="main-container infographic-header">
				<h2 className="infographic-title">Advanced Statistics</h2>
				<p className="infographic-desc mt-4">Track how your links are performing across the web with our advanced statistics dashboard.</p>
			</header>
			<div className="main-container infographic-cards">
				{CARD_LABELS.map(({ title, desc, iconURL }, i) => {
					return <Card title={title} desc={desc} iconURL={iconURL} key={i} />
				})}
			</div>
		</section>
	)
}
