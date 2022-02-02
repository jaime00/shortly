import React from 'react'
import Ilustration from '../../assets/images/illustration-working.svg'
import Button from '../Button'
import './index.css'

export default function BrandInfo() {
	return (
		<>
			<div className="mt-5 pt-5 brand-info container px-5">
				<div className="left">
					<h1>
						<b>
							More than just <br /> shorter links
						</b>
					</h1>
					<p className="text-muted mt-3">
						Build your brand's recognition and get detailed <br /> insights on how your links are perdorming.
					</p>
					<Button className="mt-3" name="Get Started" withBack={true} />
				</div>
				<div className="right">
					<img src={Ilustration} alt="" />
				</div>
			</div>
		</>
	)
}
