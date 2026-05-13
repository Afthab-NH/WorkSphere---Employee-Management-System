import { Calendar1Icon, DollarSignIcon, FileTextIcon } from 'lucide-react';
import React from 'react'

const EmployeeDashboard = ({data}) => {

    const emp = data.employee;

    const cards = [
        {
            icon: Calendar1Icon,
            value: data.currentMonthAttendence,
            title: "Days Present",
            subtitle: "This Month"
        },
        {
            icon: FileTextIcon,
            value: data.pendingLeaves,
            title: "Pending Leaves",
            subtitle: "Awaiting Approval", 
        },
        {
            icon: DollarSignIcon,
            value: data.latestPayslip ? `$${data.latestPayslip.netSalary?.toLocaleString()}` : "N/A",
            title: "Latest Payslip",
            subtitle: "Most Recent Payout",
        }
    ]

  return (
    <div className='animate-fade-in'>
      <div className='page-header'>
        <h1 className='page-title'>Welcome, {emp?.firstName}! </h1>
        <p className='page-subtitle'>{emp?.position} - {emp?.department || "No Department"}</p>
      </div>
    </div>
  )
}

export default EmployeeDashboard
