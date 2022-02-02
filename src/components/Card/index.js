import React from 'react'

const Card = ({ iconURL, title, desc }) => {
	return (
		<div className="card">
			<div className="card-icon" style={{ backgroundImage: `url(${iconURL})` }}></div>
			<h3 className="card-title">{title}</h3>
			<p className="card-desc">{desc}</p>
		</div>
	)
}

export default Card
