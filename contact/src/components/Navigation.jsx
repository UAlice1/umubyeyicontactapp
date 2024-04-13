import { NavLink } from "react-router-dom"

const Navigation = () => {
  return (
    <nav className="flex">
        <h1 className="bg-yellow-600 ">Contact APP</h1>
        <div className="flex">
            <NavLink to={'/'}>Home</NavLink>
        </div>
    </nav>
  )
}

export default Navigation