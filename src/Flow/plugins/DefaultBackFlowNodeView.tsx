import React, {useContext} from "react";
import {BackFlowNodeViewProps} from "@codingapi/ui-framework";
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
            onOk={ () => {
                 formInstance.submit();
            }}
        >
            <Form
                form={formInstance}
                onFinish={async (values)=>{
                    props.setVisible(false);
                    props.onFinish(values.backNode);
                }}
            >
                <Form.Item
                    name={"backNode"}
                    label={"退回流程节点"}
                    required={true}
                    rules={[
                        {
                            required: true,
                            message: "请选择退回流程节点"
                        },
                    ]}
                >
                    <FormSelect
                        options={flowRecordContext?.getFlowHistoryNodeList()}
                    />
                </Form.Item>
            </Form>
        </Popup>
    )
}

export default DefaultBackFlowNodeView;
