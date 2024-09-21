
import { overviewIcon } from "../../utils/Icon"
const Overview = () => {

  return (
    <div className="lg:p-10 p-3 pt-5">
      <h2>Dashboard</h2>

      <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 grid-cols-2 gap-3">
        <div className="bg-red-100 lg:p-8 p-4 rounded-lg">
          <p className="p-4 rounded-full flex bg-orange-900 text-white w-fit">{overviewIcon.allTalentsIcon}</p>
          <p className="my-3">Total Talents</p>
          <h2>100</h2>
        </div>

        <div className="bg-blue-100 lg:p-8 p-4 rounded-lg">
          <p className="p-4 rounded-full flex bg-blue-900 text-white w-fit">{overviewIcon.PendingTalent}</p>
          <p className="my-3">Total Talents</p>
          <h2>100</h2>
        </div>
        
        <div className="bg-green-100 lg:p-8 p-4 rounded-lg">
          <p className="p-4 rounded-full flex bg-green-900 text-white w-fit">{overviewIcon.allClienstIcon}</p>
          <p className="my-3">Total Clients</p>
          <h2>100</h2>
        </div>

        <div className="bg-purple-100 lg:p-8 p-4 rounded-lg">
          <p className="p-4 rounded-full flex bg-purple-900 text-white w-fit">{overviewIcon.allRequest}</p>
          <p className="my-3">Total Talents</p>
          <h2>100</h2>
        </div>
      </div>

    </div>
  )
}

export default Overview
