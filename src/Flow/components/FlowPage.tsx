import React, {useEffect} from "react";
import {
    ComponentBus,
    FlowFormViewProps,
    FlowViewProps,
    PostponedFormProps,
    PostponedFormViewKey,
    UserSelectFormProps,
    UserSelectFormViewKey
} from "@codingapi/ui-framework";
import {useDispatch, useSelector} from "react-redux";
import {FlowReduxState, updateState} from "../store";
import {
    FlowButtonClickContext,
    FlowEventContext,
    FlowRecordContext,
    FlowStateContext,
    FlowTriggerContext
} from "../domain";
import {Form} from "@codingapi/form-mobile";
import {FlowContent, FlowFooter, FlowForm404, FlowResult} from "../components";
import {FlowViewReactContext} from "../view";


interface FlowPageProps extends FlowViewProps {
    // 流程详情数据
    flowData: any;
}

export const FlowPage: React.FC<FlowPageProps> = (props) => {

    const dispatch = useDispatch();

    const currentState = useSelector((state: FlowReduxState) => state.flow);
    const flowRecordContext = new FlowRecordContext(props, props.flowData);
    const formInstance = Form.useForm();
    const opinionInstance = Form.useForm();

    const flowStateContext = new FlowStateContext(currentState, (state: any) => {
        dispatch(updateState({
            ...state
        }));
    });
    const flowTriggerContext = new FlowTriggerContext();
    const flowEvenContext = new FlowEventContext(flowRecordContext, flowTriggerContext, formInstance, opinionInstance, flowStateContext);
    const flowButtonClickContext = new FlowButtonClickContext(flowEvenContext, flowStateContext);
    const FlowFormView = flowRecordContext.getFlowFormView() as React.ComponentType<FlowFormViewProps>;

    // 延期表单视图
    const PostponedFormView = ComponentBus.getInstance().getComponent<PostponedFormProps>(PostponedFormViewKey);
    // 选人表单视图
    const UserSelectFormView = ComponentBus.getInstance().getComponent<UserSelectFormProps>(UserSelectFormViewKey);

    const version = useSelector((state: FlowReduxState) => state.flow.version);

    // 设置流程编号
    useEffect(() => {
        if (props.id) {
            flowStateContext.setRecordId(props.id);
        }
    }, [version]);

    if (FlowFormView) {
        return (
            <FlowViewReactContext.Provider value={{
                flowRecordContext: flowRecordContext,
                flowEventContext: flowEvenContext,
                flowStateContext: flowStateContext,
                flowTriggerContext: flowTriggerContext,
                flowButtonClickContext: flowButtonClickContext,

                formInstance: formInstance,
                opinionInstance: opinionInstance
            }}>
                <div className={"flow-view"}>
                    {currentState.result && (
                        <FlowResult
                            closeFlowView={() => {
                                props.setVisible(false);
                            }}/>
                    )}
                    <FlowContent/>
                    <FlowFooter
                        closeFlowView={() => {
                            props.setVisible(false);
                        }}/>
                </div>

                {PostponedFormView && (
                    <PostponedFormView
                        visible={currentState.postponedVisible}
                        setVisible={(visible: boolean) => {
                            flowStateContext.setPostponedVisible(visible);
                        }}
                        onFinish={(timeOut) => {
                            flowEvenContext.postponedFlow(timeOut, (res) => {
                                flowStateContext.setResult({
                                    title: '延期成功',
                                    state: 'success',
                                    closeable: true,
                                    items: [
                                        {
                                            label: '延期时间',
                                            value: `${timeOut}小时`
                                        }
                                    ]
                                })
                            });
                        }}
                    />
                )}

                {UserSelectFormView && currentState.userSelectMode && (
                    <UserSelectFormView
                        visible={currentState.userSelectVisible}
                        setVisible={(visible: boolean) => {
                            flowStateContext.setUserSelectVisible(visible);
                        }}
                        onFinish={(users) => {
                            // 选择的人
                            flowEvenContext.userSelectCallback(users, currentState.userSelectMode);
                        }}
                        multiple={currentState.userSelectMode.multiple}
                        specifyUserIds={currentState.userSelectMode.specifyUserIds}
                        currentUserIds={currentState.userSelectMode.currentUserIds}
                        userSelectType={currentState.userSelectMode.userSelectType}
                    />
                )}

            </FlowViewReactContext.Provider>
        )
    } else {
        return (
            <FlowForm404
                closeFlowView={()=>{
                    props.setVisible(false);
                }}
            />
        )
    }
}

