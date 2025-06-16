import React from "react";
import {FlowViewRecordProps} from "@codingapi/ui-framework";
import {Divider} from "antd-mobile";
import {FlowHistory} from "./views/FlowHistory";
import {FlowOpinion} from "./views/FlowOpinion";

const DefaultFlowViewRecordView: React.FC<FlowViewRecordProps> = (props) => {

    return (
        <>
            <FlowHistory/>
            <Divider>审批记录</Divider>
            <FlowOpinion/>
        </>
    )
}

export default DefaultFlowViewRecordView;
