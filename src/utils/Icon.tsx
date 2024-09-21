import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import { GoHomeFill } from "react-icons/go";
import { FaUserAlt } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa6";
import { IoPerson, IoPersonCircleSharp } from "react-icons/io5";
import { FaUserTag } from "react-icons/fa6";
import { GoGitPullRequest } from "react-icons/go";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { LuMenu } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";






export const loginIcon = {
    visible: <VscEye />,
    hidden: <VscEyeClosed />
}

export const sideBarIcon = {
    homeIcon : <GoHomeFill />,
    userIcon: <FaUserAlt />,
    creativeIcon: <FaUserTie />
}

export const navBarIcon = {
    personIcon : <IoPersonCircleSharp />,
    menu : <LuMenu />,
    close : <IoMdClose />,
}

export const overviewIcon = {
    allTalentsIcon : <FaUserTag />,
    allClienstIcon : <IoPerson />,
    allRequest : <IoMdCheckmarkCircleOutline />,
    PendingTalent : <GoGitPullRequest />,

}