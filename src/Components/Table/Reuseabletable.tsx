import React from "react";


interface  TalentProps {
    allTalents : [],
    isLoading : boolean
    error : any
}



const ReusableTable : React.FC<TalentProps> = ({ allTalents, isLoading, error }) => {

    console.log(allTalents);


  return (
    <div className="overflow-x-auto">
        <table className="table">
        {/* head */}
        <thead>
            <tr>
            <th>
                <label>
                <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
            <th></th>
            </tr>
        </thead>

        {allTalents.map((talent : any, index :any)=>(

        <tbody key={index}>
            {/* row 1 */}
            <tr>
            <th><label><input type="checkbox" className="checkbox" /></label></th>
            <td>
                <div className="flex items-center gap-3">
                <div className="avatar">
                    <div className="mask mask-circle h-10 w-10">
                    <img
                        src={talent?.profile_pics}
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
                <div>
                    <div className="font-bold">{talent?.user?.fullname}</div>
                    {/* <div className="text-sm opacity-50">{talent.phone}</div> */}
                </div>
                </div>
            </td>
            <td>{talent?.user?.email}</td>
            <td>{talent?.is_banned === false ? 'Active' : 'Banned'}</td>
            <th><button className="btn btn-ghost btn-xs">Delete</button></th>
            </tr>
    
        </tbody>

        ))}

        </table>
  </div>
  );
};

export default ReusableTable;
