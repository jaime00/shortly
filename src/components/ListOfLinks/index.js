import React from 'react'
import Link from '../Link'

export default function ListOfLinks({ links, handleCopy }) {
	return (
		<section className="container mt-4">
			{links.map((link, i) => {
				return <Link link={link} key={i} index={i} handleCopy={handleCopy} />
			})}
		</section>
	)
}
