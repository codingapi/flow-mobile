import {RouteObject} from "react-router";
import FlowRecordPage from "@/pages/record";
import FlowDetailPage from "@/pages/flow/detail";

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <FlowRecordPage/>,
    },

    {
        path: "/flow/detail",
        element: <FlowDetailPage/>,
    },

]