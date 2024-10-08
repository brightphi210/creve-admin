
import { useGetOverviews } from "../../hooks/queries/useGetOverview"
import { overviewIcon } from "../../utils/Icon"


const Overview = () => {
  const {isLoading, data } = useGetOverviews()

  const clients = data?.data.no_clients
  const creatives = data?.data.no_creatives
  const request = data?.data.no_requests
  
  return (
    <div className="lg:p-10 p-3 pt-5">
      <h2 className="text-2xl font-bold pb-5">Dashboard</h2>

      <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 grid-cols-2 gap-3">
        <div className="bg-yellow-100 lg:p-8 lg:py-5 p-4 rounded-lg border border-yellow-200">
          <p className="lg:p-4 p-3 rounded-full flex bg-yellow-600 text-white w-fit">{overviewIcon.allTalentsIcon}</p>
          <p className="my-3 lg:text-lg text-sm">Total Clients</p>
          <h2 className="lg:text-4xl text-2xl font-bold">{isLoading ? '- - - -' : clients}</h2>
        </div>

        <div className="bg-blue-50 lg:p-8 lg:py-5 p-4 rounded-lg border border-blue-100">
          <p className="lg:p-4 p-3 rounded-full flex bg-blue-600 text-white w-fit">{overviewIcon.PendingTalent}</p>
          <p className="my-3 lg:text-lg text-sm">Total Talents</p>
          <h2 className="lg:text-4xl text-2xl font-bold">{isLoading ? '- - - -' :  creatives}</h2>
        </div>
        
        <div className="bg-green-50 lg:p-8 lg:py-5 p-4 rounded-lg border border-green-200">
          <p className="lg:p-4 p-3 rounded-full flex bg-green-600 text-white w-fit">{overviewIcon.allClienstIcon}</p>
          <p className="my-3 lg:text-lg text-sm">Pending Request</p>
          <h2 className="lg:text-4xl text-2xl font-bold">{isLoading ? '- - - -' :  request}</h2>
        </div>

        <div className="bg-purple-50 lg:p-8 lg:py-5 p-4 rounded-lg border border-purple-200">
          <p className="lg:p-4 p-3 rounded-full flex bg-purple-600 text-white w-fit">{overviewIcon.allRequest}</p>
          <p className="my-3 lg:text-lg text-sm">Approved Request</p>
          <h2 className="lg:text-4xl text-2xl font-bold">100</h2>
        </div>
      </div>


      <div className="pt-10 pb-5">
        <h2 className="text-2xl font-bold pb-5">Latest Request</h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Titile</th>
                <th>Decription</th>
                <th>Client</th>
                <th>Talent</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className="bg-base-200">
                <th>1</th>
                <td>Haircut</td>
                <td>Quality Control Specialist</td>
                <td>Obi</td>
                <td>Jane Doe</td>
                <td>2022-03-15</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Overview
