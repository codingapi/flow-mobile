import React, {useContext} from "react";
import {ActionSheet, Button, Modal} from "antd-mobile";
import {FlowViewReactContext} from "../view";
import {useSelector} from "react-redux";
import {FlowReduxState} from "../store";

interface FlowFooterProps {
    maxButtonCount?: number;
    closeFlowView: () => void;
}

export const FlowFooter: React.FC<FlowFooterProps> = (props) => {
    const flowViewReactContext = useContext(FlowViewReactContext);

    const flowRecordContext = flowViewReactContext?.flowRecordContext;

    const flowButtonClickContext = flowViewReactContext?.flowButtonClickContext;

    const buttons = flowRecordContext?.getFlowButtons()||[];
    const maxButtonCount = props.maxButtonCount || 4;
    const requestLoading = useSelector((state: FlowReduxState) => state.flow.requestLoading);
    const contentHiddenVisible = useSelector((state: FlowReduxState) => state.flow.contentHiddenVisible);
    const [visible, setVisible] = React.useState(false);

    const style = contentHiddenVisible ? {"display":"none"} : {};

    const dangerTypes = ['REMOVE', 'VOIDED'];

    if(flowRecordContext?.isFlowManager()){
        if(!buttons.find(item=> item.id === 'back')) {
            buttons.push({
                id: 'back',
                name: '退回流程',
                type: 'BACK',
            } as any);
        }
        if(!buttons.find(item=> item.id === 'voided')) {
            buttons.push({
                id: 'voided',
                name: '作废流程',
                type: 'VOIDED',
            } as any);
        }
    }

    if(flowRecordContext?.isWithdraw()){
        return (
            <div className={"flow-view-footer"} style={style}>
                <Button
                    loading={requestLoading}
                    color={"default"}
                    className={"flow-view-footer-button"}
                    onClick={async () => {
                        const result = await Modal.confirm({
                            content: '确认要撤回流程吗？',
                        })
                        if (result) {
                            flowButtonClickContext?.handlerRecall();
                        }
                    }}
                >
                    撤回
                </Button>

                <Button
                    color={"default"}
                    className={"flow-view-footer-button"}
                    onClick={() => {
                        props.closeFlowView();
                    }}
                >
                    关闭
                </Button>
            </div>
        )
    }
    if(flowRecordContext?.isEditable()){
        return (
            <div className={"flow-view-footer"} style={style}>
                {buttons && buttons.length <= maxButtonCount && buttons.map((item) => {
                    const style = item.style && JSON.parse(item.style) || {};
                    if(dangerTypes.includes(item.type)) {
                        return (
                            <Button
                                loading={requestLoading}
                                style={{
                                    ...style
                                }}
                                className={"flow-view-footer-button"}
                                onClick={async () => {
                                    const result = await Modal.confirm({
                                        content: `确认要执行 ${item.name} 操作吗？`,
                                    })
                                    if (result) {
                                        flowButtonClickContext?.handlerClick(item);
                                    }
                                }}
                            >
                                {item.name}
                            </Button>
                        )
                    }else {
                        return (
                            <Button
                                loading={requestLoading}
                                key={item.id}
                                className={"flow-view-footer-button"}
                                style={{
                                    ...style
                                }}
                                onClick={() => {
                                    flowButtonClickContext?.handlerClick(item);
                                }}
                            >{item.name}</Button>
                        )
                    }
                })}
                {buttons && buttons.length > maxButtonCount && (
                    <>
                        {buttons && buttons.slice(0, maxButtonCount - 1).map(item => {
                            const style = item.style && JSON.parse(item.style) || {};
                            return (
                                <Button
                                    loading={requestLoading}
                                    key={item.id}
                                    className={"flow-view-footer-button"}
                                    style={{
                                        ...style
                                    }}
                                    onClick={() => {
                                        flowButtonClickContext?.handlerClick(item);
                                    }}
                                >{item.name}</Button>
                            )
                        })}

                        <Button
                            loading={requestLoading}
                            color={"default"}
                            className={"flow-view-footer-button"}
                            onClick={() => {
                                setVisible(true);
                            }}
                        >
                            更多
                        </Button>

                        <ActionSheet
                            extra='请选择操作按钮'
                            cancelText='取消'
                            visible={visible}
                            actions={buttons.slice(maxButtonCount - 1).map((item, index) => {
                                return {
                                    text: item.name,
                                    key: item.id,
                                    onClick: () => {
                                        flowButtonClickContext?.handlerClick(item);
                                        setVisible(false);
                                    }
                                }
                            })}
                            onClose={() => setVisible(false)}
                        />
                    </>
                )}


            </div>
        )
    }else {
        return (
            <div className={"flow-view-footer"} style={style}>
                <Button
                    loading={requestLoading}
                    style={{
                        marginLeft:'15%',
                        marginRight:'15%'
                    }}
                    className={"flow-view-footer-button"}
                    onClick={() => {
                        props.closeFlowView();
                    }}
                >关闭</Button>
            </div>
        )
    }
}
