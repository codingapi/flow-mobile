import {RouteObject} from "react-router";
import FlowDetailPage from "@/pages/record/detail";
import Login from "@/pages/login";
import Welcome from "@/pages/welcome";
import FlowRecordPage from "@/pages/record";
import LeaveListPage from "@/pages/leave/index";
import LeaveCreatePage from "@/pages/leave/create";
import LeaveDetailPage from "@/pages/leave/detail";

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <Welcome/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/leave",
        element: <LeaveListPage/>,
    },
    {
        path: "/leave/create",
        element: <LeaveCreatePage/>,
    },
    {
        path: "/leave/detail",
        element: <LeaveDetailPage/>,
    },
    {
        path: "/record",
        element: <FlowRecordPage/>,
    },
    {
        path: "/record/detail",
        element: <FlowDetailPage/>,
    },

]
