import React from 'react'
import Button from '../Button'

export default function LinkBox({ handleChange, url, shortenLink }) {
	return (
		<div className="link-box mx-0 px-4">
			<div className="link-box-input">
				<input value={url} name="url" onChange={handleChange} type="text" className="form-control" placeholder="Shorten a link here..." />
			</div>
			<div className="">
				<Button name="Shorten It!" withBack={true} className="shorten rounded" onClick={shortenLink} />
			</div>
		</div>
	)
}
