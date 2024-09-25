import { navBarIcon } from "../../utils/Icon"
import { useNavigate } from "react-router-dom"


interface SideBarProps {
    handleShow: () => void;
    show: boolean;
    show1 : boolean;
}

const Navbar: React.FC<SideBarProps> = ({handleShow, show, show1}) => {
    const navigate = useNavigate()
    const logout = () =>{
      localStorage.removeItem('token')
      navigate('/login')
    }



    

  return (
    <div className="flex p-5 lg:px-10 px-3 border-b border-b-neutral-200 z-50 ">
      <p className="bg-neutral-100 rounded-full  justify-center items-center p-3 text-lg cursor-pointer hidden" onClick={handleShow}>
        {!show ? navBarIcon.menu : navBarIcon.close}
    </p>

    <p className="bg-neutral-100 rounded-full justify-center items-center p-3 text-lg cursor-pointer lg:hidden flex" onClick={handleShow}>
        {!show1 ? navBarIcon.menu : navBarIcon.close}
    </p>
      
      <ul className="ml-auto  flex items-center gap-3">
        <li className="text-3xl">{navBarIcon.personIcon}</li>
        <button onClick={logout} className="bg-black text-white py-2 px-5 rounded-lg">Logout</button>
      </ul>
    </div>
  )
}

export default Navbar
