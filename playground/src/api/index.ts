import axios from "axios";
import {Toast} from "antd-mobile";
import {Base64Utils} from "@codingapi/ui-framework";

const api = axios.create({
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

export const sleep = async (time: number) => {
    return new Promise((resolve: any) => {
        setTimeout(() => {
            resolve();
        }, time);
    })
}


api.interceptors.request.use((config: any) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers = {
            Authorization: `${token}`,
        } as any;
    }
    return config;
}, (error: any) => {
    return Promise.reject(error);
});

api.interceptors.response.use(async (response: any) => {
        const headers = response.headers;
        const token = headers['authorization'];

        const state = response.status;
        if (state === 200) {
            if (token) {
                console.log('reset token', token);
                localStorage.setItem("token", token)
            }

            if (response.data) {
                const success = response.data.success;
                if (!success) {
                    const errMessage = response.data.errMessage;
                    const errCode = response.data.errCode;
                    if ("token.expire" === errCode || "token.error" === errCode) {
                        Toast.show('登录已过期，请退出再重新打开');
                        await sleep(1500);
                        localStorage.clear();
                        window.location.href = '/#login';
                    } else {
                        if ("login.error" === errCode) {
                            return response;
                        }
                        Toast.show(errMessage);
                    }
                }
            } else {
                Toast.show('抱歉，该账户无权限访问');
            }
        }
        return response;
    },
    (error: any) => {
        const response = error.response;
        const state = response.data.status;

        if (state === 403) {
            Toast.show('抱歉，该账户无权限访问');
            return {
                data: {
                    success: false,
                }
            }
        }
        return Promise.reject(error);
    }
)


export const get = async (url: string, params?: any) => {
    try {
        const response = await api.get(url, {
            params
        });
        return response.data;
    } catch (e) {
        return {
            success: false,
        }
    }
}

export const post = async (url: string, data: any) => {
    try {
        const response = await api.post(url, data);
        return response.data;
    } catch (e) {
        return {
            success: false,
        }
    }
}

export const page = async (url: string, params: any, sort: any, filter: any, match: {
    key: string,
    type: string
}[]) => {

    const base64Match = Base64Utils.stringToBase64(JSON.stringify(match));
    const base64Sort = Base64Utils.stringToBase64(JSON.stringify(sort));
    const base64Filter = Base64Utils.stringToBase64(JSON.stringify(filter));

    const response = await get(url, {
        ...params,
        sort: base64Sort,
        filter: base64Filter,
        params: base64Match,
    });

    if (response.success) {
        const list = response.data.total > 0 ? response.data.list : [];
        return {
            data: list,
            success: response.success,
            total: response.data.total
        };
    } else {
        return {
            data: [],
            success: response.success,
            total: 0
        }
    }
}
