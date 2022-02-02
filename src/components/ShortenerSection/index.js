import React, { useState } from 'react'
import { getShortenURL } from '../../utils/Helper'
import LinkBox from '../LinkBox'
import ListOfLinks from '../ListOfLinks'
import './index.css'

export default function ShortenerSection() {
	const [url, setUrl] = useState('')
	const [links, setLinks] = useState([])
	const shortenLink = async () => {
		if (url) {
			const { ok, shortUrl, error } = await getShortenURL(url)
			if (ok) {
				setLinks([...links, { url, shortUrl }])
			} else {
				alert('ERROR: ' + error)
			}
		} else {
			alert('Please shorten a link')
			document.querySelector('input').focus()
		}
	}
	const handleChangeUrl = (e) => {
		setUrl(`${e.target.value}`)
	}
	const handleCopy = (index) => {
		const newLinks = links.map((link, i) => {
			if (i === index) {
				return {
					...link,
					isCopied: true,
				}
			} else {
				return link
			}
		})
		setLinks(newLinks)
	}
	return (
		<div className="shortener-section mt-5 container px-5">
			<LinkBox handleChange={handleChangeUrl} shortenLink={shortenLink} url={url} />
			<ListOfLinks links={links} handleCopy={handleCopy} />
		</div>
	)
}
