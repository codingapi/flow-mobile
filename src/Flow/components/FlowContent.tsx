import React, {useContext, useEffect} from "react";
import {Divider, Tabs} from "antd-mobile";
import {FlowFormViewProps} from "@codingapi/ui-framework";
import {FlowViewReactContext} from "../view";
import {FlowHistory} from "../components";
import {FlowFormOpinion} from "../components";
import {useSelector} from "react-redux";
import {FlowReduxState} from "../store";
import {FlowChart} from "../components/FlowChart";
import {FlowHistoryLine} from "../components";
import {FlowOpinion} from "../components";

export const FlowContent= () => {
    const flowViewReactContext = useContext(FlowViewReactContext);

    const flowRecordContext = flowViewReactContext?.flowRecordContext;
    const formInstance = flowViewReactContext?.formInstance;

    const FlowFormView = flowRecordContext?.getFlowFormView() as React.ComponentType<FlowFormViewProps>;

    const formParams = flowRecordContext?.getFlowFormParams();

    const opinionVisible = useSelector((state: FlowReduxState) => state.flow.opinionVisible);
    const dataVersion = useSelector((state: FlowReduxState) => state.flow.dataVersion);
    const contentHiddenVisible = useSelector((state: FlowReduxState) => state.flow.contentHiddenVisible);

    useEffect(() => {
        if(!flowRecordContext?.isEditable()){
            setTimeout(()=>{
                formInstance?.disableAll();
            },100);
        }
    }, []);

    const style = contentHiddenVisible ? {"display":"none"} : {};
    return (
        <div className={"flow-view-content"} style={style}>
            <Tabs>
                <Tabs.Tab title='流程详情' key='detail'>
                    {formInstance && (
                        <FlowFormView
                            data={formParams}
                            form={formInstance}
                            dataVersion={dataVersion}
                        />
                    )}

                    {opinionVisible && (
                        <FlowFormOpinion/>
                    )}
                </Tabs.Tab>
                <Tabs.Tab title='流程记录' key='record'>
                    <FlowHistory/>
                    <Divider>审批记录</Divider>
                    <FlowOpinion/>
                </Tabs.Tab>
                <Tabs.Tab title='流程图' key='chart'>
                    <FlowChart/>
                    <Divider>流转历史</Divider>
                    <FlowHistoryLine/>
                </Tabs.Tab>
            </Tabs>
        </div>
    )
}

