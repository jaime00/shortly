import React from 'react'
import { Link } from 'wouter'
import { SITE_LINK_COLUMN_TITLES, SITE_LINK_LABELS, SOCIAL_LABELS } from '../../utils/constants'
import './index.css'

const SiteLink = ({ label }) => {
	return (
		<Link className="footer-site-link" to="/shortly">
			{label}
		</Link>
	)
}

const SiteLinkColumn = ({ title, labels }) => {
	return (
		<div className="footer-site-links-col">
			<h2 className="footer-site-links-title">{title}</h2>
			{labels.map((label, i) => (
				<SiteLink label={label} key={i} />
			))}
		</div>
	)
}

const SocialLink = ({ title, icon, url }) => {
	return (
		<a href={url} target="_blank" without="true" rel="noreferrer">
			<span className="footer-social-link">
				<img title={title} src={icon} alt={title} />
			</span>
		</a>
	)
}

export default function Footer() {
	return (
		<footer className="footer">
			<div className="main-container footer-container container px-4">
				<div className="footer-logo">Shortly</div>
				<div className="footer-site-links">
					{SITE_LINK_COLUMN_TITLES.map((title, i) => (
						<SiteLinkColumn title={title} labels={SITE_LINK_LABELS[title]} key={i} />
					))}
				</div>
				<div className="footer-social-links">
					{SOCIAL_LABELS.map(({ title, icon, url }, i) => (
						<SocialLink title={title} icon={icon} url={url} key={i} />
					))}
				</div>
			</div>
			<div className="attribution mt-3">
				Challenge by{' '}
				<a href="https://www.frontendmentor.io?ref=challenge" target="_blank" without="true" rel="noreferrer">
					Frontend Mentor
				</a>
				. &nbsp;Coded by{' '}
				<a href="https://github.com/jaime00" target="_blank" without="true" rel="noreferrer">
					Jaime Torres
				</a>
				.
				<p>
					Check out the{' '}
					<a href="https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G" target="_blank" without="true" rel="noreferrer">
						Original Challenge
					</a>
					.
				</p>
			</div>
		</footer>
	)
}
