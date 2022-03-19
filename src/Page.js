import logo from './logo.svg';

function Page() {
  return (
    <div>
        <header>
            <nav>
                <img style={{width: "100px"}} src={logo} alt="" />
            </nav>
        </header>
        <h1>Fun Facts About React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands if enterprise apps, including mobile apps</li>
            </ul>
        <footer>
            <small>&copy; 2022 ReactSites Development. All rights reserved.</small>
        </footer>
    </div>
  )
}

export default Page