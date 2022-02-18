const NavBar = (props) => {
	const { Username } = props
	return <div>Navbar
		<p>{Username}</p>
		<ul>
			<li>Home</li>
			<li>My list</li>
		</ul>

		<nav>
			<div>
				<button>
					<p>{Username}</p>
				</button>
				<div>
					<a>Sign out</a>
				</div>
			</div>
		</nav>
	</div>
}

export default NavBar;