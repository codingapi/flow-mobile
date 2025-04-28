import React from "react";
import {Button, Result} from "antd-mobile";

interface FlowForm404Props {
    closeFlowView: () => void;
}

export const FlowForm404:React.FC<FlowForm404Props> = (props)=>{

    return (
        <Result
            status='error'
            title={"抱歉，没有配置流程视图"}
            description={(
                <div className={"flow-result-content"}>
                    <Button
                        className={"flow-result-content-button"}
                        block={true}
                        onClick={()=>{
                            props.closeFlowView();
                        }}
                    >关闭页面</Button>
                </div>
            )}
        />
    )
}

