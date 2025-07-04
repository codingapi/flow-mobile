import React, {useContext} from "react";
import {BackFlowNodeViewProps, ValidateUtils} from "@codingapi/ui-framework";
import {FlowViewReactContext} from "../view";
import {Form, FormSelect, Popup} from "@codingapi/form-mobile";

const DefaultBackFlowNodeView:React.FC<BackFlowNodeViewProps> = (props)=>{

    const formInstance = Form.useForm();
    const flowViewReactContext = useContext(FlowViewReactContext);
    const flowRecordContext = flowViewReactContext?.flowRecordContext;

    return (
        <Popup
            visible={props.visible}
            setVisible={props.setVisible}
            position='bottom'
            title={"流程退回节点选择"}
            bodyStyle={{height: '50vh'}}
            onOk={async () => {
                await formInstance.submit();
            }}
        >
            <Form
                form={formInstance}
                onFinish={async (values)=>{
                    props.setVisible(false);
                    props.onFinish(values.backNode);
                }}
            >
                <FormSelect
                    name={"backNode"}
                    label={"退回流程节点"}
                    tooltip={"退回的流程节点，选择后流程将退回到该节点"}
                    options={flowRecordContext?.getFlowHistoryNodeList()}
                    validateFunction={ValidateUtils.validateNotEmpty}
                />
            </Form>
        </Popup>
    )
}

export default DefaultBackFlowNodeView;
