import React from "react";
import {FlowHistoryLine} from "./views/FlowHistoryLine";
import {FlowChart} from "./views/FlowChart";
import {Divider} from "antd-mobile";


const DefaultFlowViewChartView = () => {
    return (
        <>
            <FlowChart/>
            <Divider>流转历史</Divider>
            <FlowHistoryLine/>
        </>
    )
}

export default DefaultFlowViewChartView;
