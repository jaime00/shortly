import React from 'react'
import Logo from '../../assets/images/logo.svg'
import Button from '../Button'

export default function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light px-0 container px-5">
			<a className="navbar-brand mr-4" href="/">
				<img src={Logo} alt="" />
			</a>
			<button
				className="navbar-toggler border-0"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="ml-2 collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item mx-2 active">
						<a className="nav-link" href="/" id="e">
							<b>Features</b>
						</a>
					</li>
					<li className="nav-item mx-2">
						<a className="nav-link" href="/" id="e">
							<b>Pricing</b>
						</a>
					</li>
					<li className="nav-item mx-2">
						<a className="nav-link" href="/" id="e">
							<b>Resources</b>
						</a>
					</li>
				</ul>
				<div className="div navbar-nav">
					<Button name="Login" />
					<Button name="Sign up" />
				</div>
			</div>
		</nav>
	)
}
