import React from 'react'
import { Button } from 'antd'

function Report() {
    return (
        <div>
        <h2>Submit excel sheet</h2>
        <input type={"file"}/>
        <Button style={{background: "#000048", color: "#fff", width:"15%"}}>Submit</Button>

    </div>
    )
}

export default Report
