import React from "react";
import {useLocation} from "react-router";
import {Descriptions} from "@codingapi/form-mobile";
import {fields} from "./fields";

const LeaveDetailPage = () => {

    const location = useLocation();
    const state = location.state;

    return (
        <>
            <Descriptions
                columns={fields}
                request={async ()=>{
                    return state;
                }}
            />
        </>
    )
}

export default LeaveDetailPage;
