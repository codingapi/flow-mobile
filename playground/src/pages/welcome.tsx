import React from "react";
import {useNavigate} from "react-router";
import {Button, Space} from "antd-mobile";


const WelcomePage = () => {

    const navigate = useNavigate();

    return (
        <div style={{
            textAlign:'center'
        }}>
            <div style={{
                margin:50
            }}>
                Flow-pc Playground
            </div>
            <Space>
                <Button onClick={()=>{
                    navigate('/record')
                }}>go record</Button>
                <Button onClick={()=>{
                    navigate('/leave')
                }}>go leave</Button>
            </Space>
        </div>
    );
}


export default WelcomePage;
