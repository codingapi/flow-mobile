import React from "react";
import {useLocation, useNavigate} from "react-router";
import {FlowView} from "@codingapi/flow-mobile";
import {Result} from "antd-mobile";
import {flowViews} from "@/config/flows";

const FlowDetailPage = () => {

    const location = useLocation();
    const state = location.state;
    const navigate = useNavigate();

    if (state) {
        return (
            <>
                <FlowView
                    view={flowViews}
                    id={state.id}
                    visible={true}
                    setVisible={()=>{
                        navigate(-1);
                    }}
                />
            </>
        )
    }

    return (
        <>
            <Result
                status={"error"}
                title={"页面参数错误"}
            />
        </>
    )
}

export default FlowDetailPage;
