import React from 'react'

import "../Home/Home.css"

import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import { PlusCircleOutlined, CalendarOutlined, UserOutlined } from '@ant-design/icons';

import { Avatar, Card, Row, Col } from 'antd';

import admin from "../../admin.svg"

import calendar from "../../calendar.svg"

import attendance from "../../attendance.svg"




const { Meta } = Card;




function Home() {

  const navigate = useNavigate();




  const dailyAttendance = () => {

    navigate('/DailyAttendance')

  }




  const monthlyRto = () => {

    navigate('/RTOUpdates')

  }




  const adminPanel = () => {

    navigate('/admin')

  }




  return (

    <div className='home'>

      <Card

      className='cards-ant'

    cover={

      <img

        alt="admin"

        src={attendance}

        style={{margin: "4vh", width: "85%"}}

      />

    }

    actions={[

      <PlusCircleOutlined />

    ]}

    onClick={dailyAttendance}

  >

    <Meta

      title="Daily Attendance"

      description="Mark your Daily Attendace Here!"

    />

  </Card>




  <Card

        className='cards-ant'




    cover={

      <img

        alt="admin"

        src={calendar}

        style={{margin: "4vh", width: "85%"}}

      />

    }

    actions={[

      <CalendarOutlined />

    ]}

    onClick={monthlyRto}




  >

    <Meta

      title="Monthly RTO Updates"

      description="Enter your monthly RTo updates"

    />

  </Card>





  <Card

        className='cards-ant'




    cover={

      <img

        alt="admin"

        src={admin}

        style={{padding: "2vh"}}

      />

    }

    actions={[

      <UserOutlined />

    ]}

    onClick={adminPanel}




  >

    <Meta

      title="Admin"

      description="Admin Panel"

    />

  </Card>

    </div>

  );

}




export default Home