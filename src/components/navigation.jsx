
const Navigation = () => {
    return (
        <nav className='nav-container container'>
            <div className="logo">
                <img src="/images/brand_logo.png" alt="brand logo" />
            </div>

            <ul className='nav-item-container'>
                <li href="#">Menu</li>
                <li href="#">Location</li>
                <li href="#">About</li>
                <li href="#">Contact</li>
            </ul>

            <button className='btn'>Login</button>
        </nav>
    )
}

export default Navigation;