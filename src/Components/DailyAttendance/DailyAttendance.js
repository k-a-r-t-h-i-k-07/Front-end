import React from 'react'
import {
    Button,
    Form,
    Radio,
} from 'antd';
import { useState, useEffect } from 'react';
import "../DailyAttendance/DailyAttendance.css"
import { Select } from 'antd';
import AttendanceForm from '../Form/AttendanceForm';
import axios from 'axios'
import { Breadcrumb } from 'antd';

function DailyAttendance() {
    const [attendance, setAttendance] = useState([]);
    const [Location, setLocation]=useState();
    const id = sessionStorage.getItem("associateId")
    const onChange = (e) => {
        setAttendance(e.target.value)
    };
    const handleChange = (value) => {
        console.log(`selected ${value}`);
        setLocation(value);
    };

    const submit = () => {
        axios.post(("http://localhost:8080/dailyAttendance/"),{"associate_id":id,"daily_attendance":attendance,"location":Location} )
            .then(data => console.log("saved"))
            .catch(error => console.log(error));
        console.log(attendance)
    }
    return (
        <div style={{ width: "100%", padding: "2%" }}>
            <Breadcrumb
                items={[
                    {
                        title: <a href="/">Home</a>,
                    },
                    {
                        title: <a href="/DailyAttendance">Daily Attendance</a>,
                    },
                ]}
            />
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
                    marginTop: '3vh',
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    padding: "3vh"
                }}
            >
                <div className='inputs'>
                    <AttendanceForm />
                    <div className='attendance'>
                        <Form.Item label="RTO Mode:" className='formitem'>
                            <div className='fields'>
                                <Radio.Group onChange={onChange}>
                                    <Radio value={"WFH"}>WFH</Radio>
                                    <Radio value={"WFO"}>Office</Radio>
                                </Radio.Group>
                                <Select
                                    defaultValue="Office Location"
                                    style={{
                                        width: "25%",
                                    }}
                                    onChange={handleChange}
                                    options={[
                                        {
                                            value: 'CKC',
                                            label: 'CKC',
                                        },
                                        {
                                            value: 'TCO',
                                            label: 'TCO',
                                        },
                                        {
                                            value: 'MEPZ',
                                            label: 'MEPZ',
                                        },
                                        {
                                            value: 'DLF',
                                            label: 'DLF',
                                        },
                                        {
                                            value: 'CCC',
                                            label: 'CCC',
                                        },
                                    ]}
                                />
                            </div>
                        </Form.Item>
                    </div>
                    <Button style={{ background: "#000048", color: "#fff", width: "15%" }} onClick={submit}>Submit</Button>
                    <Button style={{ width: "15%", marginLeft: "2vh" }}>Reset</Button>

                </div>

            </Form>
        </div>
    )
}

export default DailyAttendance
