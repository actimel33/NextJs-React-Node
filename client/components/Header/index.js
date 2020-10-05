import Link from 'next/link'

function Header() {
  return (
    <nav>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <br/>
      <Link href='/about'>
        <a>About us</a>
      </Link>
      <br/>

      <Link href='/contact'>
        <a>Contacts</a>
      </Link>
      <br/>

      <Link href='/users'>
        <a>Users</a>
      </Link>
      <br/>
    </nav>
  )
}

export default Header;
