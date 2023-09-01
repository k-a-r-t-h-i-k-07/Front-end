import React, { useEffect, useState } from 'react'
import { Button, Form, Input, Breadcrumb, Table, Modal, Space, Popconfirm, message, Radio } from 'antd';
import "../Admin/Admin.css"
import axios from 'axios';

function Admin() {
    const [isUpdateModalOpen, setisUpdateModalOpen] = useState(false);
    const [data, setData] = useState([])
    const [newData, setNewData] = useState([])
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
    const [isDelModalOpen, setDelIsModalOpen] = useState(false);
    const [associates, setAssociates] = useState([])
    const [delAsso, setAsso] = useState()
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');
    const onFormLayoutChange = ({ layout }) => {
        setFormLayout(layout);
    };
    const [newAssociate, setNewAssociate] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8080/attendance/showAll")
            .then((data) => {
                console.log(associates)
                console.log(data.data)
                setAssociates(data.data)
            })
    }, [])

    const handleDelChange = (e) => {
        setAsso(e.target.value)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewAssociate((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }
    const handleOk = () => {

        setModalText('The modal will be closed after two seconds');

        setConfirmLoading(true);

        axios.post(("http://localhost:8080/attendance/addAssosiate"), {

            newAssociate,

            "associate_id": newAssociate.associate_id,

            "associate_name": newAssociate.associate_name,

            "project_id": newAssociate.project_id,

            "project_desc": newAssociate.project_desc,

            "base_location": newAssociate.base_location,

            "edl_name": newAssociate.edl_name,

            "genc_2022": newAssociate.genc_2022,

            "project_manager_name": newAssociate.project_manager_name,

            "project_manager_id": newAssociate.project_manager_id,

        })

            .then(data => console.log("saved"))

            .catch(error => console.log(error));

        setTimeout(() => {

            setOpen(false);

            setConfirmLoading(false);

            window.location.reload()

        }, 2000);

    };
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };

    const handleAdd = () => {
        setOpen(true)

    };

    const handleDel = () => {
        setDelIsModalOpen(true);
    }


    const columns = [
        {
            title: 'Associate ID',
            dataIndex: 'associate_id',
            key: 'associate_id',
        },
        {
            title: 'Associate Name',
            dataIndex: 'associate_name',
            key: 'associate_name',
        },
        {
            title: 'Project ID',
            dataIndex: 'project_id',
            key: 'project_id',
        },
        {
            title: 'Project Description',
            dataIndex: 'project_desc',
            key: 'project_desc',
        },
        {
            title: 'Base Location',
            dataIndex: 'base_location',
            key: 'base_location',
        },
        {
            title: 'EDL Name',
            dataIndex: 'edl_name',
            key: 'edl_name',
        },
        {
            title: 'Genc 2022',
            dataIndex: 'genc_2022',
            key: 'genc_2022',
        },
        {
            title: 'Project Manager Id',
            dataIndex: 'project_manager_id',
            key: 'project_manager_id',
        },
        {
            title: 'Project Manager Name',
            dataIndex: 'project_manager_name',
            key: 'project_manager_name',
        },

{

            title: 'Action',

            key: 'action',

            render: (_, record) => (

                <Space size="middle">

                    <Button

                        onClick={() => handleUpdate(record)}




                    >

                        Update

                    </Button>

                </Space>

            ),

        },
    ];
    const handleDelOk = () => {
        axios.delete("http://localhost:8080/attendance/deleteAsssosiate/" + delAsso)
            .then(console.log("deleted"))
            .catch(error => console.log(error));
        setDelIsModalOpen(false);
        window.location.reload();
    };
    const handleDelCancel = () => {
        setDelIsModalOpen(false);
    };
    const handleUpdateCancel = () => {

        setisUpdateModalOpen(false);




    }
    const handleUpdate = (value) => {

        axios

            .get("http://localhost:8080/attendance/" + value.associate_id)

            .then(data => setData(data.data))

            .catch(error => console.log(error));

        setisUpdateModalOpen(true);





    }

    // const handleExportDa = () => {
    //     const response="http://localhost:8080/dailyAttendance/download"
    //     const url = window.URL.createObjectURL(new Blob([response]));
        
    //     const link = document.createElement('a');
        
    //     link.href = url;
        
    //     link.setAttribute('download', 'Daily_Attendance.xlsx');
        
    //     document.body.appendChild(link);
        
    //     link.click();




    // }

    // const handleExportMRto = (value) => {

    //     axios

    //         .get("http://localhost:8080/monthlyRtoDates/download")

    //         .then(data => setData(data.data))

    //         .catch(error => console.log(error));






    // }

    const handleUpdateChange = (e) => {

        const { name, value } = e.target;

        setNewData((prevState) => ({

            ...prevState,

            [name]: value

        }));

    }





    const handleUpdateOk = () => {

        setisUpdateModalOpen(false);

        axios

            .put(("http://localhost:8080/attendance/updateAssociate/" + data.associate_id),

                {

                    "project_id": newData.new_project_id,

                    "project_desc": newData.new_project_desc,

                    "project_manager_name": newData.new_project_manager_name,

                    "project_manager_id": newData.new_project_manager_id

                })

            .then(data => console.log("updatedd"))

            .catch(error => console.log(error));

        window.location.reload()

    }
    return (
        <div style={{ width: "100%", padding: "5vh" }}>

            <Breadcrumb

                items={[

                    {

                        title: <a href="/">Home</a>,

                    },

                    {

                        title: <a href="/Admin">Admin</a>,

                    },

                ]}

            />





            <Button danger

                onClick={handleDel}

                style={{

                    marginBottom: 16,

                    marginRight: 15,

                    float: "right",

                    width: "6%"




                }}>Delete</Button>





            <Button

                onClick={handleAdd}

                style={{

                    marginBottom: 16,

                    marginRight: 15,

                    background: "#000048",

                    color: 'white',

                    float: "right",

                    width: "6%"




                }}

            >

                Add
            
            </Button>
            {/* <Button
                
                onClick={handleExportDa}

                style={{

                    marginBottom: 16,

                    marginRight: 15,

                    background: "#000048",

                    color: 'white',

                    float: "right",

                    width: "6%"




                }}

            >

                dA
            
            </Button> */}

           




            <Table style={{ paddingInline: "4vh" }} bordered dataSource={associates} columns={columns} />

            <Modal

                title="Add Associates"

                open={open}

                onOk={handleOk}

                confirmLoading={confirmLoading}

                onCancel={handleCancel}

            >

                <Form

                    layout={"vertical"}

                    form={form}

                    initialValues={{

                        layout: "vertical",

                    }}

                    onValuesChange={onFormLayoutChange}

                    style={{

                        maxWidth: formLayout === 'inline' ? 'none' : 600,

                    }}

                >

                    <Form.Item label="Associate ID" >

                        <Input type='number' placeholder="Enter associate id" name='associate_id' onChange={handleChange} />

                    </Form.Item>

                    <Form.Item label="Associate Name">

                        <Input type='text' placeholder="Enter associate name" name='associate_name' onChange={handleChange} />

                    </Form.Item>

                    <Form.Item label="Project ID">

                        <Input type='number' placeholder="Enter project id" name='project_id' onChange={handleChange} />

                    </Form.Item>

                    <Form.Item label="Project Description">

                        <Input type='text' placeholder="Enter project description" name='project_desc' onChange={handleChange} />

                    </Form.Item>

                    <Form.Item label="Base Location">

                        <Input type='text' placeholder="Enter the base location" name='base_location' onChange={handleChange} />

                    </Form.Item>

                    <Form.Item label="EDL Name">

                        <Input type='text' placeholder="Enter EDL Name" name='edl_name' onChange={handleChange} />

                    </Form.Item>

                    <Form.Item label="Genc 2022">

                        <Input type='text' placeholder="" name='genc_2022' onChange={handleChange} />

                    </Form.Item>

                    <Form.Item label="Project Manager Name">

                        <Input type='text' placeholder="Enter project manager name" name='project_manager_name' onChange={handleChange} />

                    </Form.Item>

                    <Form.Item label="Project Manager ID">

                        <Input type='number' placeholder="Enter project manager id" name='project_manager_id' onChange={handleChange} />

                    </Form.Item>

                </Form>

            </Modal>




            <Modal title="Remove Associate" open={isDelModalOpen} onOk={handleDelOk} onCancel={handleDelCancel}>

                <Form.Item label="Associate ID" >

                    <Input placeholder="Enter associate id" name='associate_id' onChange={handleDelChange} />

                </Form.Item>

            </Modal>




            <Modal title="Update Associate" open={isUpdateModalOpen} onOk={handleUpdateOk} onCancel={handleUpdateCancel}>

                <Form.Item label="Associate ID" >

                    <Input value={data.associate_id} disabled />

                </Form.Item>

                <Form.Item label="Associate Name">

                    <Input value={data.associate_name} disabled />

                </Form.Item>

                <Form.Item label="Project Id" >

                    <Input placeholder="Enter Project ID" name='new_project_id' onChange={(e) => handleUpdateChange(e)} />

                </Form.Item>

                <Form.Item label="Project Desc" >

                    <Input placeholder="Enter Project desc" name='new_project_desc' onChange={(e) => handleUpdateChange(e)} />

                </Form.Item>

                <Form.Item label="Project Manager Name" >

                    <Input placeholder="Enter Manager name" name='new_project_manager_name' onChange={(e) => handleUpdateChange(e)} />

                </Form.Item>

                <Form.Item label="Project Manager Id" >

                    <Input placeholder="Enter associate id" name='new_project_manager_id' onChange={(e) => handleUpdateChange(e)} />

                </Form.Item>

            </Modal>

        </div>
    )
}

export default Admin
