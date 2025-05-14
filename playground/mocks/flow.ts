import webpackMockServer from "webpack-mock-server";

export default webpackMockServer.add((app, helper) => {
    app.get('/api/app/query/flowRecord/findTodoByOperatorId',(req,res)=>{
        res.json(
            {
                "success": true,
                "errCode": null,
                "errMessage": null,
                "data": {
                    "total": 1,
                    "list": [
                        {
                            "id": 88,
                            "preId": 87,
                            "workId": 1,
                            "workCode": "leave",
                            "processId": "2c0b8d54-ed6e-40ca-bfd1-04e5b2ccbfc9",
                            "nodeCode": "flow",
                            "title": "admin-请假流程-流程节点",
                            "currentOperatorId": 1,
                            "currentOperatorName": "admin",
                            "flowType": "TODO",
                            "flowSourceDirection": null,
                            "createTime": 1747189044592,
                            "updateTime": 0,
                            "finishTime": 0,
                            "timeoutTime": 1747189044602,
                            "postponedCount": 0,
                            "createOperatorId": 1,
                            "createOperatorName": "admin",
                            "opinionAdvice": null,
                            "opinionResult": null,
                            "opinionType": null,
                            "flowStatus": "RUNNING",
                            "errMessage": null,
                            "bindClass": "com.codingapi.example.infra.flow.form.LeaveForm",
                            "snapshotId": 158,
                            "read": true,
                            "interfere": false,
                            "interferedOperatorId": null,
                            "interferedOperatorName": null,
                            "readTime": 1747189050946
                        },
                    ]
                }
            }
        )
    });

    app.get('/api/query/flowRecord/detail',(req,res)=>{
        const id = req.query.id;
        res.json(
            {
                "success": true,
                "errCode": null,
                "errMessage": null,
                "data": {
                    "flowRecord": {
                        "id": 88,
                        "preId": 87,
                        "workId": 1,
                        "workCode": "leave",
                        "processId": "2c0b8d54-ed6e-40ca-bfd1-04e5b2ccbfc9",
                        "nodeCode": "flow",
                        "title": "admin-请假流程-流程节点",
                        "currentOperator": {
                            "name": "admin",
                            "flowManager": true,
                            "userId": 1
                        },
                        "flowType": "TODO",
                        "flowSourceDirection": null,
                        "createTime": 1747189044592,
                        "updateTime": 0,
                        "finishTime": 0,
                        "timeoutTime": 1747189044602,
                        "postponedCount": 0,
                        "createOperator": {
                            "name": "admin",
                            "flowManager": true,
                            "userId": 1
                        },
                        "opinion": null,
                        "flowStatus": "RUNNING",
                        "errMessage": null,
                        "bindClass": "com.codingapi.example.infra.flow.form.LeaveForm",
                        "snapshotId": 158,
                        "read": true,
                        "interfere": false,
                        "interferedOperator": null,
                        "readTime": 1747189050946,
                        "done": false,
                        "todo": true,
                        "pass": false,
                        "finish": false,
                        "overNode": false,
                        "waiting": false,
                        "reject": false,
                        "initiated": false,
                        "unRead": false,
                        "transfer": false,
                        "timeout": true,
                        "postponed": false,
                        "startRecord": false
                    },
                    "flowWork": {
                        "id": 1,
                        "code": "leave",
                        "title": "请假流程",
                        "description": "请假流程22",
                        "createUser": {
                            "name": "admin",
                            "flowManager": true,
                            "userId": 1
                        },
                        "createTime": 1730282362039,
                        "updateTime": 1745846400022,
                        "enable": true,
                        "skipIfSameApprover": false,
                        "postponedMax": 1,
                        "nodes": [
                            {
                                "id": "2ecdb8aa-00b2-42af-b3ed-c776d2431b38",
                                "code": "circulate",
                                "name": "抄送节点",
                                "titleGenerator": {
                                    "script": "def run(content){ return content.getCurrentOperator().getName() + '-' + content.getFlowWork().getTitle() + '-' + content.getFlowNode().getName();}"
                                },
                                "type": "CIRCULATE",
                                "view": "default",
                                "approvalType": "CIRCULATE",
                                "operatorMatcher": {
                                    "script": "def run(content) {return [content.getCreateOperator().getUserId()];}",
                                    "any": false,
                                    "creator": true,
                                    "specify": false
                                },
                                "editable": true,
                                "createTime": 1745846400022,
                                "updateTime": 1745846400022,
                                "timeout": 0,
                                "errTrigger": null,
                                "buttons": null,
                                "sign": false,
                                "overNode": false,
                                "unSign": false,
                                "startNode": false,
                                "circulate": true,
                                "anyOperatorMatcher": false
                            },
                            {
                                "id": "3c2c420a-003b-4f51-9489-3cdcda0bbe35",
                                "code": "flow",
                                "name": "流程节点",
                                "titleGenerator": {
                                    "script": "def run(content){ return content.getCurrentOperator().getName() + '-' + content.getFlowWork().getTitle() + '-' + content.getFlowNode().getName();}"
                                },
                                "type": "APPROVAL",
                                "view": "default",
                                "approvalType": "SIGN",
                                "operatorMatcher": {
                                    "script": "def run(content) {return [content.getCurrentOperator().getUserId()];}",
                                    "any": true,
                                    "creator": false,
                                    "specify": false
                                },
                                "editable": true,
                                "createTime": 1745846400022,
                                "updateTime": 1745846400022,
                                "timeout": 10,
                                "errTrigger": null,
                                "buttons": [
                                    {
                                        "id": "b41cc904-f718-4374-8ed1-979baaf9f6fb",
                                        "name": "提交",
                                        "style": null,
                                        "type": "SUBMIT",
                                        "groovy": null,
                                        "eventKey": null,
                                        "order": 1
                                    }
                                ],
                                "sign": true,
                                "overNode": false,
                                "unSign": false,
                                "startNode": false,
                                "circulate": false,
                                "anyOperatorMatcher": true
                            },
                            {
                                "id": "b527b4a5-f11f-4052-9848-2c0426da970c",
                                "code": "over",
                                "name": "结束节点",
                                "titleGenerator": {
                                    "script": "def run(content){ return content.getCurrentOperator().getName() + '-' + content.getFlowWork().getTitle() + '-' + content.getFlowNode().getName();}"
                                },
                                "type": "OVER",
                                "view": "default",
                                "approvalType": "UN_SIGN",
                                "operatorMatcher": {
                                    "script": "def run(content) {return [content.getCurrentOperator().getUserId()];}",
                                    "any": true,
                                    "creator": false,
                                    "specify": false
                                },
                                "editable": true,
                                "createTime": 1745846400022,
                                "updateTime": 1745846400022,
                                "timeout": 0,
                                "errTrigger": null,
                                "buttons": null,
                                "sign": false,
                                "overNode": true,
                                "unSign": true,
                                "startNode": false,
                                "circulate": false,
                                "anyOperatorMatcher": true
                            },
                            {
                                "id": "b82a84e7-2c1d-4e15-a3c5-6f7f6e263acd",
                                "code": "start",
                                "name": "开始节点",
                                "titleGenerator": {
                                    "script": "def run(content){ return content.getCurrentOperator().getName() + '-' + content.getFlowWork().getTitle() + '-' + content.getFlowNode().getName();}"
                                },
                                "type": "START",
                                "view": "default",
                                "approvalType": "UN_SIGN",
                                "operatorMatcher": {
                                    "script": "def run(content) {return [1];}",
                                    "any": false,
                                    "creator": false,
                                    "specify": true
                                },
                                "editable": true,
                                "createTime": 1745846400021,
                                "updateTime": 1745846400021,
                                "timeout": 0,
                                "errTrigger": null,
                                "buttons": [
                                    {
                                        "id": "4d051679-b584-4bbe-a60c-2af378ce847d",
                                        "name": "保存",
                                        "style": null,
                                        "type": "SAVE",
                                        "groovy": "def run(content){\n    // 你的代码\n    print(123)\n}",
                                        "eventKey": null,
                                        "order": 1
                                    },
                                    {
                                        "id": "d00c9150-9c7c-43e4-85e5-048f7b1c2080",
                                        "name": "提交",
                                        "style": null,
                                        "type": "SUBMIT",
                                        "groovy": null,
                                        "eventKey": null,
                                        "order": 2
                                    },
                                    {
                                        "id": "02436d3f-374f-4d4c-8b17-a76e35838c61",
                                        "name": "测试1",
                                        "style": null,
                                        "type": "CUSTOM",
                                        "groovy": "def run(content){\n    return content.submitFlow();\n}",
                                        "eventKey": null,
                                        "order": 3
                                    },
                                    {
                                        "id": "b9864099-f539-4f04-b8fb-c1fdd8022460",
                                        "name": "预提交",
                                        "style": null,
                                        "type": "TRY_SUBMIT",
                                        "groovy": null,
                                        "eventKey": null,
                                        "order": 4
                                    },
                                    {
                                        "id": "e97f4d64-d4de-4b99-be43-0a28c35c14fe",
                                        "name": "测试2",
                                        "style": null,
                                        "type": "CUSTOM",
                                        "groovy": "def run(content){\n    // 你的代码\n    return content.createMessageResult('我是自定义标题').resultState('WARNING');\n}",
                                        "eventKey": null,
                                        "order": 5
                                    },
                                    {
                                        "id": "3fd92d0c-c58e-4b00-9615-a13add6d2ddd",
                                        "name": "选人提交",
                                        "style": null,
                                        "type": "SPECIFY_SUBMIT",
                                        "groovy": null,
                                        "eventKey": null,
                                        "order": 6
                                    },
                                    {
                                        "id": "183cfa77-797c-46a7-bcf3-ea4dcb9e4374",
                                        "name": "自定义前端",
                                        "style": null,
                                        "type": "VIEW",
                                        "groovy": null,
                                        "eventKey": null,
                                        "order": 7
                                    }
                                ],
                                "sign": false,
                                "overNode": false,
                                "unSign": true,
                                "startNode": true,
                                "circulate": false,
                                "anyOperatorMatcher": false
                            }
                        ],
                        "relations": [
                            {
                                "id": "b68837fb-dca8-41d2-908c-dc079a7f61de",
                                "name": null,
                                "source": {
                                    "id": "b82a84e7-2c1d-4e15-a3c5-6f7f6e263acd",
                                    "code": "start",
                                    "name": "开始节点",
                                    "titleGenerator": {
                                        "script": "def run(content){ return content.getCurrentOperator().getName() + '-' + content.getFlowWork().getTitle() + '-' + content.getFlowNode().getName();}"
                                    },
                                    "type": "START",
                                    "view": "default",
                                    "approvalType": "UN_SIGN",
                                    "operatorMatcher": {
                                        "script": "def run(content) {return [1];}",
                                        "any": false,
                                        "creator": false,
                                        "specify": true
                                    },
                                    "editable": true,
                                    "createTime": 1745846400021,
                                    "updateTime": 1745846400021,
                                    "timeout": 0,
                                    "errTrigger": null,
                                    "buttons": [
                                        {
                                            "id": "4d051679-b584-4bbe-a60c-2af378ce847d",
                                            "name": "保存",
                                            "style": null,
                                            "type": "SAVE",
                                            "groovy": "def run(content){\n    // 你的代码\n    print(123)\n}",
                                            "eventKey": null,
                                            "order": 1
                                        },
                                        {
                                            "id": "d00c9150-9c7c-43e4-85e5-048f7b1c2080",
                                            "name": "提交",
                                            "style": null,
                                            "type": "SUBMIT",
                                            "groovy": null,
                                            "eventKey": null,
                                            "order": 2
                                        },
                                        {
                                            "id": "02436d3f-374f-4d4c-8b17-a76e35838c61",
                                            "name": "测试1",
                                            "style": null,
                                            "type": "CUSTOM",
                                            "groovy": "def run(content){\n    return content.submitFlow();\n}",
                                            "eventKey": null,
                                            "order": 3
                                        },
                                        {
                                            "id": "b9864099-f539-4f04-b8fb-c1fdd8022460",
                                            "name": "预提交",
                                            "style": null,
                                            "type": "TRY_SUBMIT",
                                            "groovy": null,
                                            "eventKey": null,
                                            "order": 4
                                        },
                                        {
                                            "id": "e97f4d64-d4de-4b99-be43-0a28c35c14fe",
                                            "name": "测试2",
                                            "style": null,
                                            "type": "CUSTOM",
                                            "groovy": "def run(content){\n    // 你的代码\n    return content.createMessageResult('我是自定义标题').resultState('WARNING');\n}",
                                            "eventKey": null,
                                            "order": 5
                                        },
                                        {
                                            "id": "3fd92d0c-c58e-4b00-9615-a13add6d2ddd",
                                            "name": "选人提交",
                                            "style": null,
                                            "type": "SPECIFY_SUBMIT",
                                            "groovy": null,
                                            "eventKey": null,
                                            "order": 6
                                        },
                                        {
                                            "id": "183cfa77-797c-46a7-bcf3-ea4dcb9e4374",
                                            "name": "自定义前端",
                                            "style": null,
                                            "type": "VIEW",
                                            "groovy": null,
                                            "eventKey": null,
                                            "order": 7
                                        }
                                    ],
                                    "sign": false,
                                    "overNode": false,
                                    "unSign": true,
                                    "startNode": true,
                                    "circulate": false,
                                    "anyOperatorMatcher": false
                                },
                                "target": {
                                    "id": "3c2c420a-003b-4f51-9489-3cdcda0bbe35",
                                    "code": "flow",
                                    "name": "流程节点",
                                    "titleGenerator": {
                                        "script": "def run(content){ return content.getCurrentOperator().getName() + '-' + content.getFlowWork().getTitle() + '-' + content.getFlowNode().getName();}"
                                    },
                                    "type": "APPROVAL",
                                    "view": "default",
                                    "approvalType": "SIGN",
                                    "operatorMatcher": {
                                        "script": "def run(content) {return [content.getCurrentOperator().getUserId()];}",
                                        "any": true,
                                        "creator": false,
                                        "specify": false
                                    },
                                    "editable": true,
                                    "createTime": 1745846400022,
                                    "updateTime": 1745846400022,
                                    "timeout": 10,
                                    "errTrigger": null,
                                    "buttons": [
                                        {
                                            "id": "b41cc904-f718-4374-8ed1-979baaf9f6fb",
                                            "name": "提交",
                                            "style": null,
                                            "type": "SUBMIT",
                                            "groovy": null,
                                            "eventKey": null,
                                            "order": 1
                                        }
                                    ],
                                    "sign": true,
                                    "overNode": false,
                                    "unSign": false,
                                    "startNode": false,
                                    "circulate": false,
                                    "anyOperatorMatcher": true
                                },
                                "order": 1,
                                "back": false,
                                "outTrigger": {
                                    "script": "def run(content) {return true;}"
                                },
                                "createTime": 1745846400022,
                                "updateTime": 1745846400022
                            },
                            {
                                "id": "ca59430e-8be5-41cd-a2c2-e54ad6b3dcc1",
                                "name": null,
                                "source": {
                                    "id": "3c2c420a-003b-4f51-9489-3cdcda0bbe35",
                                    "code": "flow",
                                    "name": "流程节点",
                                    "titleGenerator": {
                                        "script": "def run(content){ return content.getCurrentOperator().getName() + '-' + content.getFlowWork().getTitle() + '-' + content.getFlowNode().getName();}"
                                    },
                                    "type": "APPROVAL",
                                    "view": "default",
                                    "approvalType": "SIGN",
                                    "operatorMatcher": {
                                        "script": "def run(content) {return [content.getCurrentOperator().getUserId()];}",
                                        "any": true,
                                        "creator": false,
                                        "specify": false
                                    },
                                    "editable": true,
                                    "createTime": 1745846400022,
                                    "updateTime": 1745846400022,
                                    "timeout": 10,
                                    "errTrigger": null,
                                    "buttons": [
                                        {
                                            "id": "b41cc904-f718-4374-8ed1-979baaf9f6fb",
                                            "name": "提交",
                                            "style": null,
                                            "type": "SUBMIT",
                                            "groovy": null,
                                            "eventKey": null,
                                            "order": 1
                                        }
                                    ],
                                    "sign": true,
                                    "overNode": false,
                                    "unSign": false,
                                    "startNode": false,
                                    "circulate": false,
                                    "anyOperatorMatcher": true
                                },
                                "target": {
                                    "id": "2ecdb8aa-00b2-42af-b3ed-c776d2431b38",
                                    "code": "circulate",
                                    "name": "抄送节点",
                                    "titleGenerator": {
                                        "script": "def run(content){ return content.getCurrentOperator().getName() + '-' + content.getFlowWork().getTitle() + '-' + content.getFlowNode().getName();}"
                                    },
                                    "type": "CIRCULATE",
                                    "view": "default",
                                    "approvalType": "CIRCULATE",
                                    "operatorMatcher": {
                                        "script": "def run(content) {return [content.getCreateOperator().getUserId()];}",
                                        "any": false,
                                        "creator": true,
                                        "specify": false
                                    },
                                    "editable": true,
                                    "createTime": 1745846400022,
                                    "updateTime": 1745846400022,
                                    "timeout": 0,
                                    "errTrigger": null,
                                    "buttons": null,
                                    "sign": false,
                                    "overNode": false,
                                    "unSign": false,
                                    "startNode": false,
                                    "circulate": true,
                                    "anyOperatorMatcher": false
                                },
                                "order": 1,
                                "back": false,
                                "outTrigger": {
                                    "script": "def run(content) {return true;}"
                                },
                                "createTime": 1745846400022,
                                "updateTime": 1745846400022
                            },
                            {
                                "id": "f6929c79-b168-4c3c-9f8f-9dc21fcaf29d",
                                "name": null,
                                "source": {
                                    "id": "2ecdb8aa-00b2-42af-b3ed-c776d2431b38",
                                    "code": "circulate",
                                    "name": "抄送节点",
                                    "titleGenerator": {
                                        "script": "def run(content){ return content.getCurrentOperator().getName() + '-' + content.getFlowWork().getTitle() + '-' + content.getFlowNode().getName();}"
                                    },
                                    "type": "CIRCULATE",
                                    "view": "default",
                                    "approvalType": "CIRCULATE",
                                    "operatorMatcher": {
                                        "script": "def run(content) {return [content.getCreateOperator().getUserId()];}",
                                        "any": false,
                                        "creator": true,
                                        "specify": false
                                    },
                                    "editable": true,
                                    "createTime": 1745846400022,
                                    "updateTime": 1745846400022,
                                    "timeout": 0,
                                    "errTrigger": null,
                                    "buttons": null,
                                    "sign": false,
                                    "overNode": false,
                                    "unSign": false,
                                    "startNode": false,
                                    "circulate": true,
                                    "anyOperatorMatcher": false
                                },
                                "target": {
                                    "id": "b527b4a5-f11f-4052-9848-2c0426da970c",
                                    "code": "over",
                                    "name": "结束节点",
                                    "titleGenerator": {
                                        "script": "def run(content){ return content.getCurrentOperator().getName() + '-' + content.getFlowWork().getTitle() + '-' + content.getFlowNode().getName();}"
                                    },
                                    "type": "OVER",
                                    "view": "default",
                                    "approvalType": "UN_SIGN",
                                    "operatorMatcher": {
                                        "script": "def run(content) {return [content.getCurrentOperator().getUserId()];}",
                                        "any": true,
                                        "creator": false,
                                        "specify": false
                                    },
                                    "editable": true,
                                    "createTime": 1745846400022,
                                    "updateTime": 1745846400022,
                                    "timeout": 0,
                                    "errTrigger": null,
                                    "buttons": null,
                                    "sign": false,
                                    "overNode": true,
                                    "unSign": true,
                                    "startNode": false,
                                    "circulate": false,
                                    "anyOperatorMatcher": true
                                },
                                "order": 1,
                                "back": false,
                                "outTrigger": {
                                    "script": "def run(content) {return true;}"
                                },
                                "createTime": 1745846400022,
                                "updateTime": 1745846400022
                            }
                        ],
                        "schema": "{\"nodes\":[{\"id\":\"b82a84e7-2c1d-4e15-a3c5-6f7f6e263acd\",\"type\":\"start-node\",\"x\":927,\"y\":73,\"properties\":{\"name\":\"开始节点\",\"code\":\"start\",\"type\":\"START\",\"view\":\"default\",\"operatorMatcher\":\"def run(content) {return [1];}\",\"editable\":true,\"titleGenerator\":\"def run(content){ return content.getCurrentOperator().getName() + '-' + content.getFlowWork().getTitle() + '-' + content.getFlowNode().getName();}\",\"errTrigger\":\"\",\"approvalType\":\"UN_SIGN\",\"timeout\":0,\"id\":\"b82a84e7-2c1d-4e15-a3c5-6f7f6e263acd\",\"width\":200,\"height\":45,\"operatorMatcherType\":\"custom\",\"titleGeneratorType\":\"default\",\"errTriggerType\":\"custom\",\"buttons\":[{\"name\":\"保存\",\"type\":\"SAVE\",\"groovy\":\"def run(content){\\n    // 你的代码\\n    print(123)\\n}\",\"order\":1,\"id\":\"4d051679-b584-4bbe-a60c-2af378ce847d\"},{\"name\":\"提交\",\"type\":\"SUBMIT\",\"order\":2,\"id\":\"d00c9150-9c7c-43e4-85e5-048f7b1c2080\"},{\"name\":\"测试1\",\"type\":\"CUSTOM\",\"groovy\":\"def run(content){\\n    return content.submitFlow();\\n}\",\"order\":3,\"id\":\"02436d3f-374f-4d4c-8b17-a76e35838c61\"},{\"name\":\"预提交\",\"type\":\"TRY_SUBMIT\",\"order\":4,\"id\":\"b9864099-f539-4f04-b8fb-c1fdd8022460\"},{\"name\":\"测试2\",\"type\":\"CUSTOM\",\"groovy\":\"def run(content){\\n    // 你的代码\\n    return content.createMessageResult('我是自定义标题').resultState('WARNING');\\n}\",\"order\":5,\"id\":\"e97f4d64-d4de-4b99-be43-0a28c35c14fe\"},{\"name\":\"选人提交\",\"type\":\"SPECIFY_SUBMIT\",\"order\":6,\"id\":\"3fd92d0c-c58e-4b00-9615-a13add6d2ddd\"},{\"name\":\"自定义前端\",\"type\":\"VIEW\",\"order\":7,\"id\":\"183cfa77-797c-46a7-bcf3-ea4dcb9e4374\"}]}},{\"id\":\"3c2c420a-003b-4f51-9489-3cdcda0bbe35\",\"type\":\"node-node\",\"x\":852,\"y\":299,\"properties\":{\"name\":\"流程节点\",\"code\":\"flow\",\"type\":\"APPROVAL\",\"view\":\"default\",\"operatorMatcher\":\"def run(content) {return [content.getCurrentOperator().getUserId()];}\",\"editable\":true,\"titleGenerator\":\"def run(content){ return content.getCurrentOperator().getName() + '-' + content.getFlowWork().getTitle() + '-' + content.getFlowNode().getName();}\",\"errTrigger\":\"\",\"approvalType\":\"SIGN\",\"timeout\":10,\"id\":\"3c2c420a-003b-4f51-9489-3cdcda0bbe35\",\"width\":200,\"height\":45,\"operatorMatcherType\":\"any\",\"titleGeneratorType\":\"custom\",\"errTriggerType\":\"custom\",\"buttons\":[{\"name\":\"提交\",\"type\":\"SUBMIT\",\"order\":1,\"id\":\"b41cc904-f718-4374-8ed1-979baaf9f6fb\"}]}},{\"id\":\"b527b4a5-f11f-4052-9848-2c0426da970c\",\"type\":\"over-node\",\"x\":1024,\"y\":599,\"properties\":{\"name\":\"结束节点\",\"code\":\"over\",\"type\":\"OVER\",\"view\":\"default\",\"operatorMatcher\":\"def run(content) {return [content.getCurrentOperator().getUserId()];}\",\"editable\":true,\"titleGenerator\":\"def run(content){ return content.getCurrentOperator().getName() + '-' + content.getFlowWork().getTitle() + '-' + content.getFlowNode().getName();}\",\"errTrigger\":\"\",\"approvalType\":\"UN_SIGN\",\"timeout\":0,\"id\":\"b527b4a5-f11f-4052-9848-2c0426da970c\",\"width\":200,\"height\":45,\"operatorMatcherType\":\"any\",\"titleGeneratorType\":\"default\",\"errTriggerType\":\"custom\"}},{\"id\":\"2ecdb8aa-00b2-42af-b3ed-c776d2431b38\",\"type\":\"circulate-node\",\"x\":1248,\"y\":394,\"properties\":{\"name\":\"抄送节点\",\"code\":\"circulate\",\"type\":\"CIRCULATE\",\"view\":\"default\",\"operatorMatcher\":\"def run(content) {return [content.getCreateOperator().getUserId()];}\",\"editable\":true,\"titleGenerator\":\"def run(content){ return content.getCurrentOperator().getName() + '-' + content.getFlowWork().getTitle() + '-' + content.getFlowNode().getName();}\",\"errTrigger\":\"\",\"approvalType\":\"CIRCULATE\",\"timeout\":0,\"id\":\"2ecdb8aa-00b2-42af-b3ed-c776d2431b38\",\"width\":200,\"height\":45}}],\"edges\":[{\"id\":\"b68837fb-dca8-41d2-908c-dc079a7f61de\",\"type\":\"bezier\",\"properties\":{\"outTrigger\":\"def run(content) {return true;}\",\"order\":1,\"back\":false},\"sourceNodeId\":\"b82a84e7-2c1d-4e15-a3c5-6f7f6e263acd\",\"targetNodeId\":\"3c2c420a-003b-4f51-9489-3cdcda0bbe35\",\"sourceAnchorId\":\"b82a84e7-2c1d-4e15-a3c5-6f7f6e263acd_0\",\"targetAnchorId\":\"3c2c420a-003b-4f51-9489-3cdcda0bbe35_3\",\"startPoint\":{\"x\":927,\"y\":95.5},\"endPoint\":{\"x\":852,\"y\":276.5},\"pointsList\":[{\"x\":927,\"y\":95.5},{\"x\":927,\"y\":195.5},{\"x\":852,\"y\":176.5},{\"x\":852,\"y\":276.5}]},{\"id\":\"f6929c79-b168-4c3c-9f8f-9dc21fcaf29d\",\"type\":\"bezier\",\"properties\":{\"outTrigger\":\"def run(content) {return true;}\",\"order\":1,\"back\":false},\"sourceNodeId\":\"2ecdb8aa-00b2-42af-b3ed-c776d2431b38\",\"targetNodeId\":\"b527b4a5-f11f-4052-9848-2c0426da970c\",\"sourceAnchorId\":\"2ecdb8aa-00b2-42af-b3ed-c776d2431b38_2\",\"targetAnchorId\":\"b527b4a5-f11f-4052-9848-2c0426da970c_0\",\"startPoint\":{\"x\":1248,\"y\":416.5},\"endPoint\":{\"x\":1024,\"y\":576.5},\"pointsList\":[{\"x\":1248,\"y\":416.5},{\"x\":1248,\"y\":516.5},{\"x\":1024,\"y\":476.5},{\"x\":1024,\"y\":576.5}]},{\"id\":\"ca59430e-8be5-41cd-a2c2-e54ad6b3dcc1\",\"type\":\"bezier\",\"properties\":{\"outTrigger\":\"def run(content) {return true;}\",\"order\":1,\"back\":false},\"sourceNodeId\":\"3c2c420a-003b-4f51-9489-3cdcda0bbe35\",\"targetNodeId\":\"2ecdb8aa-00b2-42af-b3ed-c776d2431b38\",\"sourceAnchorId\":\"3c2c420a-003b-4f51-9489-3cdcda0bbe35_0\",\"targetAnchorId\":\"2ecdb8aa-00b2-42af-b3ed-c776d2431b38_2\",\"startPoint\":{\"x\":977,\"y\":299},\"endPoint\":{\"x\":1123,\"y\":394},\"pointsList\":[{\"x\":977,\"y\":299},{\"x\":1077,\"y\":299},{\"x\":1023,\"y\":394},{\"x\":1123,\"y\":394}]}]}",
                        "startNode": {
                            "id": "b82a84e7-2c1d-4e15-a3c5-6f7f6e263acd",
                            "code": "start",
                            "name": "开始节点",
                            "titleGenerator": {
                                "script": "def run(content){ return content.getCurrentOperator().getName() + '-' + content.getFlowWork().getTitle() + '-' + content.getFlowNode().getName();}"
                            },
                            "type": "START",
                            "view": "default",
                            "approvalType": "UN_SIGN",
                            "operatorMatcher": {
                                "script": "def run(content) {return [1];}",
                                "any": false,
                                "creator": false,
                                "specify": true
                            },
                            "editable": true,
                            "createTime": 1745846400021,
                            "updateTime": 1745846400021,
                            "timeout": 0,
                            "errTrigger": null,
                            "buttons": [
                                {
                                    "id": "4d051679-b584-4bbe-a60c-2af378ce847d",
                                    "name": "保存",
                                    "style": null,
                                    "type": "SAVE",
                                    "groovy": "def run(content){\n    // 你的代码\n    print(123)\n}",
                                    "eventKey": null,
                                    "order": 1
                                },
                                {
                                    "id": "d00c9150-9c7c-43e4-85e5-048f7b1c2080",
                                    "name": "提交",
                                    "style": null,
                                    "type": "SUBMIT",
                                    "groovy": null,
                                    "eventKey": null,
                                    "order": 2
                                },
                                {
                                    "id": "02436d3f-374f-4d4c-8b17-a76e35838c61",
                                    "name": "测试1",
                                    "style": null,
                                    "type": "CUSTOM",
                                    "groovy": "def run(content){\n    return content.submitFlow();\n}",
                                    "eventKey": null,
                                    "order": 3
                                },
                                {
                                    "id": "b9864099-f539-4f04-b8fb-c1fdd8022460",
                                    "name": "预提交",
                                    "style": null,
                                    "type": "TRY_SUBMIT",
                                    "groovy": null,
                                    "eventKey": null,
                                    "order": 4
                                },
                                {
                                    "id": "e97f4d64-d4de-4b99-be43-0a28c35c14fe",
                                    "name": "测试2",
                                    "style": null,
                                    "type": "CUSTOM",
                                    "groovy": "def run(content){\n    // 你的代码\n    return content.createMessageResult('我是自定义标题').resultState('WARNING');\n}",
                                    "eventKey": null,
                                    "order": 5
                                },
                                {
                                    "id": "3fd92d0c-c58e-4b00-9615-a13add6d2ddd",
                                    "name": "选人提交",
                                    "style": null,
                                    "type": "SPECIFY_SUBMIT",
                                    "groovy": null,
                                    "eventKey": null,
                                    "order": 6
                                },
                                {
                                    "id": "183cfa77-797c-46a7-bcf3-ea4dcb9e4374",
                                    "name": "自定义前端",
                                    "style": null,
                                    "type": "VIEW",
                                    "groovy": null,
                                    "eventKey": null,
                                    "order": 7
                                }
                            ],
                            "sign": false,
                            "overNode": false,
                            "unSign": true,
                            "startNode": true,
                            "circulate": false,
                            "anyOperatorMatcher": false
                        }
                    },
                    "flowNode": {
                        "id": "3c2c420a-003b-4f51-9489-3cdcda0bbe35",
                        "code": "flow",
                        "name": "流程节点",
                        "titleGenerator": {
                            "script": "def run(content){ return content.getCurrentOperator().getName() + '-' + content.getFlowWork().getTitle() + '-' + content.getFlowNode().getName();}"
                        },
                        "type": "APPROVAL",
                        "view": "default",
                        "approvalType": "SIGN",
                        "operatorMatcher": {
                            "script": "def run(content) {return [content.getCurrentOperator().getUserId()];}",
                            "any": true,
                            "creator": false,
                            "specify": false
                        },
                        "editable": true,
                        "createTime": 1745846400022,
                        "updateTime": 1745846400022,
                        "timeout": 10,
                        "errTrigger": null,
                        "buttons": [
                            {
                                "id": "b41cc904-f718-4374-8ed1-979baaf9f6fb",
                                "name": "提交",
                                "style": null,
                                "type": "SUBMIT",
                                "groovy": null,
                                "eventKey": null,
                                "order": 1
                            }
                        ],
                        "sign": true,
                        "overNode": false,
                        "unSign": false,
                        "startNode": false,
                        "circulate": false,
                        "anyOperatorMatcher": true
                    },
                    "historyRecords": [
                        {
                            "id": 88,
                            "preId": 87,
                            "workId": 1,
                            "workCode": "leave",
                            "processId": "2c0b8d54-ed6e-40ca-bfd1-04e5b2ccbfc9",
                            "nodeCode": "flow",
                            "title": "admin-请假流程-流程节点",
                            "currentOperator": {
                                "name": "admin",
                                "flowManager": true,
                                "userId": 1
                            },
                            "flowType": "TODO",
                            "flowSourceDirection": null,
                            "createTime": 1747189044592,
                            "updateTime": 0,
                            "finishTime": 0,
                            "timeoutTime": 1747189044602,
                            "postponedCount": 0,
                            "createOperator": {
                                "name": "admin",
                                "flowManager": true,
                                "userId": 1
                            },
                            "opinion": null,
                            "flowStatus": "RUNNING",
                            "errMessage": null,
                            "bindClass": "com.codingapi.example.infra.flow.form.LeaveForm",
                            "snapshotId": 158,
                            "read": true,
                            "interfere": false,
                            "interferedOperator": null,
                            "readTime": 1747189050946,
                            "done": false,
                            "todo": true,
                            "pass": false,
                            "finish": false,
                            "overNode": false,
                            "waiting": false,
                            "reject": false,
                            "initiated": false,
                            "unRead": false,
                            "transfer": false,
                            "timeout": true,
                            "postponed": false,
                            "startRecord": false
                        },
                        {
                            "id": 87,
                            "preId": 0,
                            "workId": 1,
                            "workCode": "leave",
                            "processId": "2c0b8d54-ed6e-40ca-bfd1-04e5b2ccbfc9",
                            "nodeCode": "start",
                            "title": "admin-请假流程-开始节点",
                            "currentOperator": {
                                "name": "admin",
                                "flowManager": true,
                                "userId": 1
                            },
                            "flowType": "DONE",
                            "flowSourceDirection": "PASS",
                            "createTime": 1747189044464,
                            "updateTime": 1747189044586,
                            "finishTime": 0,
                            "timeoutTime": 0,
                            "postponedCount": 0,
                            "createOperator": {
                                "name": "admin",
                                "flowManager": true,
                                "userId": 1
                            },
                            "opinion": {
                                "advice": "同意",
                                "result": 2,
                                "type": 0,
                                "operatorIds": null,
                                "waiting": false,
                                "circulate": false,
                                "success": true,
                                "reject": false
                            },
                            "flowStatus": "RUNNING",
                            "errMessage": null,
                            "bindClass": "com.codingapi.example.infra.flow.form.LeaveForm",
                            "snapshotId": 158,
                            "read": true,
                            "interfere": true,
                            "interferedOperator": {
                                "name": "admin",
                                "flowManager": true,
                                "userId": 1
                            },
                            "readTime": 1747189044586,
                            "done": true,
                            "todo": false,
                            "pass": true,
                            "finish": false,
                            "overNode": false,
                            "waiting": false,
                            "reject": false,
                            "initiated": true,
                            "unRead": false,
                            "transfer": false,
                            "timeout": false,
                            "postponed": false,
                            "startRecord": true
                        }
                    ],
                    "bindData": {
                        "id": 0,
                        "desc": "世界那么大，我想要出去看看",
                        "days": 10,
                        "username": "admin",
                        "createTime": 0,
                        "clazzName": "com.codingapi.example.infra.flow.form.LeaveForm"
                    },
                    "operators": [
                        {
                            "name": "admin",
                            "flowManager": true,
                            "userId": 1
                        },
                        {
                            "name": "admin",
                            "flowManager": true,
                            "userId": 1
                        },
                        {
                            "name": "admin",
                            "flowManager": true,
                            "userId": 1
                        },
                        {
                            "name": "admin",
                            "flowManager": true,
                            "userId": 1
                        },
                        {
                            "name": "admin",
                            "flowManager": true,
                            "userId": 1
                        }
                    ],
                    "flowCreator": {
                        "name": "admin",
                        "flowManager": true,
                        "userId": 1
                    },
                    "flowCreateTime": 1747189044592,
                    "opinions": [
                        {
                            "recordId": 88,
                            "opinion": null,
                            "nodeCode": "flow",
                            "nodeName": "流程节点",
                            "operator": {
                                "name": "admin",
                                "flowManager": true,
                                "userId": 1
                            },
                            "createTime": 0
                        },
                        {
                            "recordId": 87,
                            "opinion": {
                                "advice": "同意",
                                "result": 2,
                                "type": 0,
                                "operatorIds": null,
                                "waiting": false,
                                "circulate": false,
                                "success": true,
                                "reject": false
                            },
                            "nodeCode": "start",
                            "nodeName": "开始节点",
                            "operator": {
                                "name": "admin",
                                "flowManager": true,
                                "userId": 1
                            },
                            "createTime": 1747189044586
                        }
                    ],
                    "canHandle": true
                }
            }
        )
    });
});