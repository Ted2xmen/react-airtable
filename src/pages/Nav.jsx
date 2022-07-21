import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="flex justify-center space-x-4 text-xl text-white">
      <h3 className="font-thin text-gray-300">Menu</h3>
      <Link to="/">Home </Link>
      <Link to="/bookmarks"> Bookmarks</Link>
      <Link to="/youtube"> Video </Link>
    </div>
  )
}

export default Nav
