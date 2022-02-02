import iconBrand from '../assets/images/icon-brand-recognition.svg'
import iconRecords from '../assets/images/icon-detailed-records.svg'
import iconCustom from '../assets/images/icon-fully-customizable.svg'

import iconGIT from './../assets/images/icon-github.svg'
import iconLINK from './../assets/images/icon-linkedin.svg'

export const CARD_LABELS = [
	{
		title: 'Brand Recognition',
		desc: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
		iconURL: iconBrand,
	},
	{
		title: 'Detailed Records',
		desc: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
		iconURL: iconRecords,
	},
	{
		title: 'Fully Customizable',
		desc: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
		iconURL: iconCustom,
	},
]

export const SITE_LINK_COLUMN_TITLES = ['Feature', 'Resources', 'Company']

export const SITE_LINK_LABELS = {
	Feature: ['Link Shortening', 'Branded Links', 'Analytics'],
	Resources: ['Blog', 'Developers', 'Support'],
	Company: ['About', 'Our Team', 'Careers', 'Contact'],
}

export const SOCIAL_LABELS = [
	{ title: 'github', icon: iconGIT, url: 'https://github.com/jaime00' },
	{ title: 'linkedin', icon: iconLINK, url: 'https://www.linkedin.com/in/jaime-torres-890113118' },
]
