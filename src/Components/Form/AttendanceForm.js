import React, { useEffect, useState } from 'react'
import {
    Button,
    Form,
    Input,
} from 'antd';
import axios from "axios"

function AttendanceForm() {
    const [data, setData] = useState([])
    useEffect(()=>{
        const id = sessionStorage.getItem("associateId")  
        axios
        .get("http://localhost:8080/attendance/"+id)
        .then(data => setData(data.data))
        .catch(error => console.log(error));
    },[])
    console.log(data)
    return (
        <Form
        labelCol={{
            span: 4,
        }}
        wrapperCol={{
            span: 14,
        }}
        layout="horizontal"
        initialValues={{
            size: "default",
        }}
        size={"default"}
        style={{
            width: "100%",
            marginTop: '3vh'
        }}
    >
        <div className='inputsAttendance'>
            <Form.Item label="Project Id">
                <Input value={data.project_id} disabled/>
            </Form.Item><br />
            <Form.Item label="Project Name">
                <Input value={data.project_name} disabled/>
            </Form.Item><br />
            <Form.Item label="Project Location">
                <Input value={data.base_location} disabled/>
            </Form.Item><br />
        </div>

          </Form>
    )
}

export default AttendanceForm
