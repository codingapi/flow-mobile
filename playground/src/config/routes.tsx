import {RouteObject} from "react-router";
import FlowRecordPage from "@/pages/record";
import FlowDetailPage from "@/pages/flow/detail";
import Login from "@/pages/login";

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <FlowRecordPage/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/flow/detail",
        element: <FlowDetailPage/>,
    },

]
