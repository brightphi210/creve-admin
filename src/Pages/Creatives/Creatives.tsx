import ReusableTable from '../../Components/Table/Reuseabletable'

import { useGetCreatives } from '../../hooks/queries/useCreatives';

const Creatives = () => {

    const { data, isLoading, error } = useGetCreatives();
    const allTalents = data?.data
    
  return (
    <div className='lg:p-10 p-3 pt-5'>
      <h2 className="text-2xl font-bold pb-5">All Talents</h2>
        <ReusableTable 
            allTalents={allTalents}
            isLoading={isLoading}
            error={error}
        />
    </div>
  )
}

export default Creatives
