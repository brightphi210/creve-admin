
import { overviewIcon } from "../../utils/Icon"
const Overview = () => {

  return (
    <div className="lg:p-10 p-3 pt-5">
      <h2>Dashboard</h2>

      <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 grid-cols-2 gap-3">
        <div className="bg-yellow-100 lg:p-8 p-4 rounded-lg border border-yellow-200">
          <p className="p-4 rounded-full flex bg-yellow-600 text-white w-fit">{overviewIcon.allTalentsIcon}</p>
          <p className="my-3 text-lg">Total Clients</p>
          <h2 className="text-4xl font-bold">100</h2>
        </div>

        <div className="bg-blue-50 lg:p-8 p-4 rounded-lg border border-blue-100">
          <p className="p-4 rounded-full flex bg-blue-600 text-white w-fit">{overviewIcon.PendingTalent}</p>
          <p className="my-3 text-lg">Total Talents</p>
          <h2 className="text-4xl font-bold">100</h2>
        </div>
        
        <div className="bg-green-50 lg:p-8 p-4 rounded-lg border border-green-200">
          <p className="p-4 rounded-full flex bg-green-600 text-white w-fit">{overviewIcon.allClienstIcon}</p>
          <p className="my-3 text-lg">Pending Talents</p>
          <h2 className="text-4xl font-bold">100</h2>
        </div>

        <div className="bg-purple-50 lg:p-8 p-4 rounded-lg border border-purple-200">
          <p className="p-4 rounded-full flex bg-purple-600 text-white w-fit">{overviewIcon.allRequest}</p>
          <p className="my-3 text-lg">Total Request</p>
          <h2 className="text-4xl font-bold">100</h2>
        </div>
      </div>

    </div>
  )
}

export default Overview
