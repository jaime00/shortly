import React from 'react'
import './index.css'

export default function Button({ name, onClick, withBack, className }) {
	const classExtended = withBack ? 'with-back' : 'not-back'
	return (
		<button className={`${classExtended} ${className}`} onClick={onClick}>
			{name}
		</button>
	)
}
