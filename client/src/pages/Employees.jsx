import { useCallback, useEffect, useState } from "react"
import { dummyEmployeeData, DEPARTMENTS } from "../assets/assets"
import { Plus, Search } from "lucide-react"

const Employee = () => {

  const [employees, setEmployees] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("");
  const [selectedDepartment, setSelectedDepartment] =useState("")

  const fetchEmployees = useCallback(async()=> {
    setLoading(true)
    setEmployees(dummyEmployeeData.filter((emp)=>(
      selectedDepartment ? emp.department === selectedDepartment : emp
    )))
    setTimeout(()=>{
      setLoading(false)
    },1000)
  },[])

  useEffect(()=>{
    fetchEmployees();
  },[])



  return (
    <div className="animate-fade-in">

      {/* Header */}

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="page-title">Employees</h1>
            <p className="page-subtitle">Manage your Team Members</p>
          </div>

          <button className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center">
            <Plus size={16} /> Add Employee
          </button>

        </div>

      {/* Search Bar */}

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/4 transform-translate-y-1/2 text-slate-400 w-4 h-4" />
          <input type="text" placeholder="Search Employee..." className="w-full pl-10" onChange={(e)=>setSearch(e.target.value)} value={search} />
        </div>
        <select value={selectedDepartment} onChange={(e)=>setSelectedDepartment(e.target.value)} className="max-w-40">
          <option value="">All Departments</option>
          {DEPARTMENTS.map((deptName)=>(
            <option key={deptName} value={deptName}>{deptName}</option>
          ))}
        </select>
      </div>


      {/* Employee Cards */}


    </div>
  )
}

export default Employee
