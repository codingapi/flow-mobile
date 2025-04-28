import {HtmlNode, HtmlNodeModel} from '@logicflow/core';
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import {NodeState} from "@codingapi/ui-framework";
import {StateLabel} from "../../nodes";
import {PlayOutline, SetOutline} from "antd-mobile-icons";

type StartProperties = {
    id: string;
    name: string;
    code: string;
    type: string;
    view: string;
    operatorMatcher: string;
    editable: boolean;
    titleGenerator: string;
    errTrigger: string;
    approvalType: string;
    timeout: number;
    settingVisible?: boolean;
    state?: NodeState;
}

interface StartProps {
    name: string;
    code?: string;
    settingVisible?: boolean;
    update?: (values: any) => void;
    properties?: StartProperties;
}

export const StartView: React.FC<StartProps> = (props) => {
    const [visible, setVisible] = React.useState(false);

    const state = props.properties?.state;

    return (
        <div className="start-node">
            <PlayOutline
                className={"icon"}
            />
            <div>
                <span className={"code"}>
                    {props.code && (
                        <>({props.code})</>
                    )}
                </span>
                <span className={"title"}>{props.name}</span>
            </div>
            {props.settingVisible && (
                <SetOutline
                    className={"setting"}
                    onClick={() => {
                        setVisible(true);
                    }}
                />
            )}

            {state && (
                <div className={"state"}>
                    <StateLabel
                        state={state}/>
                </div>
            )}

        </div>
    );
}

class StartModel extends HtmlNodeModel {
    setAttributes() {
        const name = this.properties.name as string;
        this.width = 200 + name.length * 10;
        this.height = 45;
        this.text.editable = false;
        this.menu = [];

        this.anchorsOffset = [
            // [this.width / 2, 0],
            [0, this.height / 2],
            // [-this.width / 2, 0],
            // [0, -this.height / 2],
        ];
    }

}

class StartNode extends HtmlNode {
    setHtml(rootEl: SVGForeignObjectElement) {
        const {properties} = this.props.model as HtmlNodeModel<StartProperties>;
        const div = document.createElement('div');

        const settingVisible = properties.settingVisible !== false;

        ReactDOM.createRoot(div).render(
            <StartView
                name={properties.name}
                code={properties.code}
                properties={properties}
                settingVisible={settingVisible}
                update={async (values) => {
                    this.props.model.setProperties(values);
                }}/>,
        );
        //需要清空
        rootEl.innerHTML = '';
        rootEl.appendChild(div);
        super.setHtml(rootEl);
    }
}

export const StartNodeConfig ={
    type: 'start-node',
    view: StartNode,
    model: StartModel,
};

