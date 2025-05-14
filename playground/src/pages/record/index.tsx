import React, {useEffect} from 'react';
import "./index.scss";
import PullToRefreshList, {ListAction} from "@/components/PullToRefreshList";
import TodoItem from "@/pages/record/item";
import {findTodoByOperatorId} from "@/api/flow";


const FlowRecordPage = () => {

    const listAction = React.useRef<ListAction>(null);

    const loadList = async (last: any, pageSize: number) => {
        return findTodoByOperatorId(last, pageSize);
    }

    const handlerRefresh = async (pageSize: number) => {
        return loadList("", pageSize);
    }

    const handlerLoadMore = async (last: any, pageSize: number) => {
        return loadList(last, pageSize);
    }

    useEffect(() => {
        listAction.current?.reload();
    }, []);


   return (
       <div>
           <PullToRefreshList
               listAction={listAction}
               className={"flow-todo-list"}
               item={(item, index) => {
                   return <TodoItem item={item} key={index}/>
               }}
               onRefresh={handlerRefresh}
               onLoadMore={handlerLoadMore}
           />
       </div>
    );
}

export default FlowRecordPage;
