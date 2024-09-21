
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { sideLinks } from "./sideData"
import { generalImage } from "../../utils/images"

interface SideBarProps {
  show: boolean;
}

const SideBar: React.FC<SideBarProps> = ({show }) => {

  const location = useLocation()
  return (
    <div className={`bg-neutral-100 fixed top-0 lg:left-0 right-0 h-screen p-10 pl-5 ${show ? 'lg:w-[15%] w-[80%]' : 'hidden'} `}>

      <div className="w-14 h-14">
        <img src={generalImage.logo1} alt="" />
      </div>

      <ul className="flex flex-col gap-6 text-base pt-10">
        {sideLinks.map((link: any, index)=>(
          <li key={index} className={`${location.pathname === link.route ? 'bg-black text-white py-2 px-3 rounded-lg w-full' : 'px-3 py-2'}`}>
            <Link to={link.route}>
              <span className="flex items-center gap-3 font-semibold">{link.icon}{link.title}</span>
            </Link>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default SideBar
