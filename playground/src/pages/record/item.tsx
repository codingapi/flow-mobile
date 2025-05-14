import React from "react";
import {useNavigate} from "react-router";
import moment from "moment";
import {RightOutline} from "antd-mobile-icons";

interface TodoItemProps {
    item: any;
}

const TodoItem: React.FC<TodoItemProps> = (props) => {

    const item = props.item;

    const navigate = useNavigate();

    return (
        <div className={"flow-todo-item"}>
            <div
                className={"flow-todo-item-content"}
            >
                <div
                    className={"flow-todo-item-title"}
                    dangerouslySetInnerHTML={{__html: item.title}}/>

                <div className={"flow-todo-item-attr"}>
                    <div className={"flow-todo-item-attr-title"}>审批人:</div>
                    <div className={"flow-todo-item-attr-content"}>{item.currentOperatorName}</div>
                </div>
                <div className={"flow-todo-item-attr"}>
                    <div className={"flow-todo-item-attr-title"}>发起人:</div>
                    <div className={"flow-todo-item-attr-content"}>{item.createOperatorName}</div>
                </div>
                <div className={"flow-todo-item-attr"}>
                    <div className={"flow-todo-item-attr-title"}>创建时间:</div>
                    <div
                        className={"flow-todo-item-attr-content"}>{moment(item.createTime).format('YYYY-MM-DD HH:mm:ss')}</div>
                </div>
            </div>
            <div
                className={"flow-todo-item-arrow"}>
                <RightOutline
                    fontSize={20}
                    onClick={() => {
                        navigate('/flow/detail', {state: item});
                    }}
                />
            </div>
        </div>
    )
}

export default TodoItem;
