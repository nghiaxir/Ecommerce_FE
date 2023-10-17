import React from 'react'
import DashboardWrapper, { DashboardWrapperMain, DashboardWrapperRight } from '../components/DashBoardWrapper/DashBoardWrapper'

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <DashboardWrapperMain>
        DashboardMain
      </DashboardWrapperMain>
      <DashboardWrapperRight>
        DashboardRight
      </DashboardWrapperRight>
    </DashboardWrapper>
  )
}

export default Dashboard