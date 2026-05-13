import { useCallback, useState } from "react"
import { dummyEmployeeData } from "../assets/assets"

const Employee = () => {

  const [employees, setEmployees] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchEmployees = useCallback(async()=> {
    setLoading(true)
    setEmployees(dummyEmployeeData)
    setTimeout(()=>{
      setLoading(false)
    },1000)
  },[])



  return (
    <div>
      Employees
    </div>
  )
}

export default Employee
