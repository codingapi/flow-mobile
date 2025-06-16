import React from "react";
import dayjs from "dayjs";
import {dateLabelRenderer, Popup} from "@codingapi/form-mobile";
import {DatePickerView} from "antd-mobile";
import {PostponedFormProps} from "@codingapi/ui-framework";

const DefaultPostponedFormView: React.FC<PostponedFormProps> = (props) => {

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

export default DefaultPostponedFormView;
