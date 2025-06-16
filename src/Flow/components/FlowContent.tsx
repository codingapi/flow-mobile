import React, {useContext, useEffect} from "react";
import {Tabs} from "antd-mobile";
import {
    ComponentBus,
    FlowFormViewProps,
    FlowViewChartPropsKey,
    FlowViewOpinionPropsKey,
    FlowViewRecordPropsKey
} from "@codingapi/ui-framework";
import {FlowViewReactContext} from "../view";
import {useSelector} from "react-redux";
import {FlowReduxState} from "../store";
import DefaultFlowViewOpinionView from "../plugins/DefaultFlowViewOpinionView";
import DefaultFlowViewRecordView from "../plugins/DefaultFlowViewRecordView";
import DefaultFlowViewChartView from "../plugins/DefaultFlowViewChartView";

export const FlowContent= () => {
    const flowViewReactContext = useContext(FlowViewReactContext);

    const flowRecordContext = flowViewReactContext?.flowRecordContext;
    const formInstance = flowViewReactContext?.formInstance;

    const FlowFormView = flowRecordContext?.getFlowFormView() as React.ComponentType<FlowFormViewProps>;

    const formParams = flowRecordContext?.getFlowFormParams();

    const opinionVisible = useSelector((state: FlowReduxState) => state.flow.opinionVisible);
    const dataVersion = useSelector((state: FlowReduxState) => state.flow.dataVersion);
    const contentHiddenVisible = useSelector((state: FlowReduxState) => state.flow.contentHiddenVisible);

    const FlowViewOpinionView = ComponentBus.getInstance().getComponent(FlowViewOpinionPropsKey,DefaultFlowViewOpinionView)
    const FlowViewRecordView = ComponentBus.getInstance().getComponent(FlowViewRecordPropsKey,DefaultFlowViewRecordView)
    const FlowViewChartView = ComponentBus.getInstance().getComponent(FlowViewChartPropsKey,DefaultFlowViewChartView)


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

                    {opinionVisible && FlowViewOpinionView && (
                        <FlowViewOpinionView/>
                    )}
                </Tabs.Tab>
                <Tabs.Tab title='流程记录' key='record'>
                    {FlowViewRecordView && (
                        <FlowViewRecordView/>
                    )}
                </Tabs.Tab>
                <Tabs.Tab title='流程图' key='chart'>
                    {FlowViewChartView && (
                        <FlowViewChartView/>
                    )}
                </Tabs.Tab>
            </Tabs>
        </div>
    )
}

