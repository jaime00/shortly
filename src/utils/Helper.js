import { getURL } from './Config'

export const getShortenURL = async (url) => {
	let URL = getURL(url)
	return await fetch(URL)
		.then((res) => res.json())
		.then(({ ok, result, error }) => {
			return !ok ? { ok, error: error } : { ok, shortUrl: result.full_short_link }
		})
		.catch(({ ok, error }) => {
			return { ok, error: error }
		})
}
