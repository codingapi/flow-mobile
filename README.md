[![npm](https://img.shields.io/npm/v/@codingapi/flow-mobile.svg)](https://www.npmjs.com/package/@codingapi/flow-mobile)
# Flow-Mobile

基于Mobile的流程引擎

## 安装

```bash
# npm
npm install @codingapi/flow-mobile

# yarn
yarn add @codingapi/flow-mobile

# pnpm
pnpm add @codingapi/flow-mobile
```

## 使用

### 流程审批

```tsx
import React from "react";
import {useLocation, useNavigate} from "react-router";
import {FlowView} from "@codingapi/flow-mobile";
import {Result} from "antd-mobile";
import {flowViews} from "@/config/flows";

const FlowDetailPage = () => {

    const location = useLocation();
    const state = location.state;
    const navigate = useNavigate();

    if (state) {
        return (
            <>
                <FlowView
                    view={flowViews}
                    id={state.id}
                    visible={true}
                    setVisible={()=>{
                        navigate(-1);
                    }}
                />
            </>
        )
    }

    return (
        <>
            <Result
                status={"error"}
                title={"页面参数错误"}
            />
        </>
    )
}

export default FlowDetailPage;

```

### 自定义视图拓展

* 自定义延期提醒
```tsx
import React from "react";
import {PostponedFormProps} from "@codingapi/ui-framework";
import Popup from "@/components/popup";
import {DatePickerView} from "antd-mobile";
import dayjs from "dayjs";
import {dateLabelRenderer} from "@codingapi/form-mobile";

const PostponedFormView: React.FC<PostponedFormProps> = (props) => {

    const [value, setValue] = React.useState(new Date());
    // 获取一小时后的日期
    const now = dayjs().add(1, 'hour').toDate();

    return (
        <Popup
            visible={props.visible}
            setVisible={props.setVisible}
            position='bottom'
            title={"延期截止日期"}
            bodyStyle={{height: '50vh'}}
            onOk={() => {
                const diff = dayjs(value).diff(dayjs(now), 'hour') + 1;
                props.onFinish(diff);
            }}
        >
            <div>
                <DatePickerView
                    precision={"hour"}
                    renderLabel={dateLabelRenderer}
                    value={value}
                    min={now}
                    onChange={(value) => {
                        setValue(value);
                    }}
                />
            </div>
        </Popup>
    )
}

export default PostponedFormView;


```
添加自定义视图到配置中
```
import {PostponedFormViewKey} from "@codingapi/ui-framework";
import {ComponentBus} from "@codingapi/ui-framework";
import {FlowApiContent,FlowApi} from "@codingapi/flow-mobile";
import PostponedFormView from "@/components/flow/PostponedFormView";

ComponentBus.getInstance().registerComponent(PostponedFormViewKey,PostponedFormView);
```
* 自定义选人组件
```
import React, {useEffect} from "react";
import {UserSelectFormProps} from "@codingapi/ui-framework";
import Popup from "@/components/popup";
import {Form,FormInput} from "@codingapi/form-mobile";

const UserSelectFormView: React.FC<UserSelectFormProps> = (props) => {

    const formInstance = Form.useForm();

    useEffect(() => {
        if(props.visible){
            if(props.specifyUserIds){
                formInstance.setFieldValue("users", props.specifyUserIds.join(","));
            }
        }
    }, [props.visible]);

    return (
        <Popup
            visible={props.visible}
            setVisible={props.setVisible}
            position='bottom'
            title={"选人人员"}
            bodyStyle={{height: '50vh'}}
            onOk={() => {
                const users = formInstance.getFieldValue("users");
                if(users){
                    const userIds = Array.of(...users.split(",")).map(item =>{
                        return {
                            id: item,
                            name: item
                        }
                    });
                    props.onFinish(userIds);
                }
            }}
        >
            <div>
                <Form
                    form={formInstance}
                >
                    <FormInput
                        name={"users"}
                        label={"人员"}
                        placeholder={"请选择人员"}
                    />
                </Form>

            </div>
        </Popup>
    )
}

export default UserSelectFormView;

```
然后再注册到配置中。

更多的实例请参考：https://github.com/codingapi/flow-mobile/tree/main/playground

## 开发

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Run tests
yarn test
```
## 许可

Apache-2.0 © [CodingAPI](https://github.com/codingapi/flow-mobile/blob/main/LICENSE)


