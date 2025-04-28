export interface Response{
    success: boolean;
    data: any;
}

export interface FlowApi{
    // 流程启动
    startFlow: (body:any) => Promise<Response>;
    // 流程提交
    submitFlow: (body:any) => Promise<Response>;
    // 删除流程
    removeFlow: (body:any) => Promise<Response>;
    // 保存流程
    saveFlow: (body:any) => Promise<Response>;
    // 延期流程
    postponedFlow: (body:any) => Promise<Response>;
    // 自定义流程
    triggerCustomFlow: (body:any) => Promise<Response>;
    // 转办
    transferFlow: (body:any) => Promise<Response>;
    // 催办流程
    urgeFlow: (body:any) => Promise<Response>;
    // 撤回流程
    recallFlow: (body:any) => Promise<Response>;
    // 预提交流程
    trySubmitFlow: (body:any) => Promise<Response>;
    // 流程详情(根据流程id)
    getDetailById: (id:string) => Promise<Response>;
    // 流程详情(根据工作流code)
    getDetailByWorkCode: (workCode:string) => Promise<Response>;
}

export class FlowApiContent{

    private static instance: FlowApiContent = new FlowApiContent();

    private flowApi:FlowApi| undefined;

    private constructor() {

    }

    public registerFlowApi = (flowApi:FlowApi)=>{
        this.flowApi = flowApi;
    }

    public static getInstance(): FlowApiContent {
        return FlowApiContent.instance;
    }

    public startFlow = async (body:any)=>{
       return this.flowApi?.startFlow(body);
    }

    public submitFlow = async (body:any)=>{
        return this.flowApi?.submitFlow(body);
    }

    public removeFlow = async (body:any)=>{
        return this.flowApi?.removeFlow(body);
    }

    public saveFlow = async (body:any)=>{
        return this.flowApi?.saveFlow(body);
    }

    public postponedFlow = async (body:any)=>{
        return this.flowApi?.postponedFlow(body);
    }

    public triggerCustomFlow = async (body:any)=>{
        return this.flowApi?.triggerCustomFlow(body);
    }

    public transferFlow = async (body:any)=>{
        return this.flowApi?.transferFlow(body);
    }

    public urgeFlow = async (body:any)=>{
        return this.flowApi?.urgeFlow(body);
    }

    public recallFlow = async (body:any)=>{
        return this.flowApi?.recallFlow(body);
    }


    public trySubmitFlow = async (body:any)=>{
        return this.flowApi?.trySubmitFlow(body);
    }

    public getDetailById = async (id:string)=>{
        return this.flowApi?.getDetailById(id);
    }

    public getDetailByWorkCode = async (workCode:string)=>{
        return this.flowApi?.getDetailByWorkCode(workCode);
    }
}
