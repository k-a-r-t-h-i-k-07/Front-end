import React, { useEffect, useState } from 'react'
import DatePicker from "react-multi-date-picker";
import {
    Button,
    Form,
} from 'antd';
import AttendanceForm from '../Form/AttendanceForm';
import "../MonthlyRTOUpdates/MonthlySheet.css";
import Toolbar from "react-multi-date-picker/plugins/toolbar"
import { Breadcrumb } from 'antd';
import axios from 'axios'

function MonthlySheet() {
    const [value, setValue] = useState([]);
    const dates = []
    const id = sessionStorage.getItem("associateId");
    const submit = () => {
        for (var i = 0; i < value.length; i++) {
            dates.push(value[i].day + "/" + value[i].month.number + "/" + value[i].year)
        }
        axios.post(("http://localhost:8080/monthlyRtoDates"), { "monthlyRtoDates": dates.toString(), "associate_id": id })
        .then(data => console.log("saved"))
        .catch(error => console.log(error));
    }

    return (
        <div style={{ width: "100%", padding: "2%" }}>
            <Breadcrumb
                items={[
                    {
                        title: <a href="/">Home</a>,
                    },
                    {
                        title: <a href="/RTOUpdates">RTO Updates</a>,
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
                <AttendanceForm />
                <div className='inputs rto' style={{ marginBottom: "2vh" }}>

                    <label>RTO updates:&nbsp;&nbsp;</label>
                    <DatePicker
                        multiple
                        placeholder='click to open'
                        onChange={setValue}
                        arrow={true}
                        style={{ width: "100vh" }}
                        plugins={[
                            <Toolbar position="bottom"
                                sort={["deselect", "close"]} />
                        ]} />
                </div>

                <Button onClick={submit} style={{ background: "#000048", color: "#fff", width: "15%" }}>Submit</Button>
                <Button style={{ width: "15%", marginLeft: "2vh" }}>Reset</Button>
            </Form>
        </div>

    )
}

export default MonthlySheet
