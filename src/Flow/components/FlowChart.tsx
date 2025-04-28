import React, {useContext, useEffect} from "react";
import '@logicflow/core/es/index.css';
import '@logicflow/extension/lib/style/index.css';
import {LogicFlow, Options} from "@logicflow/core";
import {DndPanel, Menu, MiniMap, Snapshot} from "@logicflow/extension";
import {FlowViewReactContext} from "../view";
import {StartNodeConfig} from "../nodes";
import {OverNodeConfig} from "../nodes";
import {CirculateNodeConfig} from "../nodes";
import {NodeNodeConfig} from "../nodes";
import EdgeType = Options.EdgeType;

interface FlowChartProps {
    edgeType?: EdgeType;
}

export const FlowChart: React.FC<FlowChartProps> = (props) => {

    const flowViewReactContext = useContext(FlowViewReactContext);
    const flowRecordContext = flowViewReactContext?.flowRecordContext;
    const flowSchema = flowRecordContext?.getFlowSchema();

    const [url, setUrl] = React.useState<string>('');

    const edgeType = props.edgeType || 'polyline';
    const container = React.useRef<HTMLDivElement>(null);
    const lfRef = React.useRef<LogicFlow>(null);

    useEffect(() => {
        const SilentConfig = {
            isSilentMode: true,
            stopScrollGraph: false,
            stopMoveGraph: false,
            stopZoomGraph: false,
            edgeTextEdit: false,
        };

        //@ts-ignore
        lfRef.current = new LogicFlow({
            //@ts-ignore
            container: container.current,
            ...SilentConfig,
            background: {
                backgroundColor: '#f3f5f8'
            },
            width: 0,
            height: 0,
            plugins: [Menu, DndPanel, MiniMap, Snapshot],
            grid: false,
            edgeType: edgeType,
        });

        lfRef.current.setTheme({
            bezier: {
                stroke: '#8f94e3',
                strokeWidth: 1,
            },
            polyline: {
                stroke: '#8f94e3',
                strokeWidth: 1,
            },
            line: {
                stroke: '#8f94e3',
                strokeWidth: 1,
            },
        });
        lfRef.current.register(StartNodeConfig);
        lfRef.current.register(NodeNodeConfig);
        lfRef.current.register(OverNodeConfig);
        lfRef.current.register(CirculateNodeConfig);
        lfRef.current.render(flowSchema);

        setTimeout(() => {
            lfRef.current?.getSnapshotBlob().then((blob: any) => {
                setUrl(URL.createObjectURL(blob.data));
            });
        }, 100)

    }, [flowViewReactContext]);

    return (
        <div>
            <div className="flow-chart">
                <div className={"flow-chart-content"} ref={container}/>
                {url && (
                    <img src={url} className={"flow-img"}/>
                )}
            </div>
        </div>
    )
}

