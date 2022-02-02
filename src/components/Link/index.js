import React from 'react'
import './index.css'

export default function Link({ link, index, handleCopy }) {
	const { url, shortUrl, isCopied = false } = link

	const handleClick = () => {
		navigator.clipboard.writeText(shortUrl)
		handleCopy(index)
	}

	const truncateText = (text) => {
		if (text.length > 60) return text.substring(0, 60) + '...'
		return text
	}

	return (
		<div className="row link">
			<div className="link_left">
				<a className="link-input" title={url} href={url} target="_blank" without rel="noreferrer">
					{truncateText(url)}
				</a>
				<a className="link-shortened" title={shortUrl} href={shortUrl} target="_blank" without rel="noreferrer">
					{shortUrl}
				</a>
			</div>
			{isCopied ? (
				<button className="link-btn link-btn-copied" onClick={() => handleCopy(index)}>
					Copied!
				</button>
			) : (
				<button className="link-btn" onClick={handleClick}>
					Copy
				</button>
			)}
		</div>
	)
}
