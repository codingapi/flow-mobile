import React, {useContext, useEffect} from "react";
import {FlowViewReactContext} from "../view";
import {Form} from "@codingapi/form-mobile";
import {FlowViewOpinionProps} from "@codingapi/ui-framework";

const DefaultFlowViewOpinionView:React.FC<FlowViewOpinionProps> = (props)=>{

    const flowViewReactContext = useContext(FlowViewReactContext);
    const opinionInstance = flowViewReactContext?.opinionInstance;
    const flowRecordContext = flowViewReactContext?.flowRecordContext;

    useEffect(() => {
        opinionInstance?.setFieldValue("advice", flowRecordContext?.getOpinionAdvice());
    }, []);

    return (
        <>
            <Form
                form={opinionInstance}
                loadFields={async ()=>{
                    return [
                        {
                            type:'textarea',
                            props:{
                                name:"advice",
                                label:"审批意见",
                                textAreaRows:2,
                                required:true,
                                rules:[
                                    {
                                        required: true,
                                        message: "请输入审批意见"
                                    }
                                ]
                            }
                        }
                    ]
                }}
            >
            </Form>
        </>
    )
}

export default DefaultFlowViewOpinionView;
