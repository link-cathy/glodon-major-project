/**
 * Created by yuanxh on 2018/7/6.
 */
import React from 'react';
import { DatePicker } from 'antd';

class DateTime extends React.Component {
    state = {
        startValue: null,
        endValue: null,
        endOpen: false,
    };

    disabledStartDate = (startValue) => {
        const endValue = this.state.endValue;
        if (!startValue || !endValue) {
            return false;
        }
        return startValue.valueOf() > endValue.valueOf();
    }

    disabledEndDate = (endValue) => {
        const startValue = this.state.startValue;
        if (!endValue || !startValue) {
            return false;
        }
        return endValue.valueOf() <= startValue.valueOf();
    }

    onChange = (field, value) => {
        this.setState({
            [field]: value,
        });
    }

    onStartChange = (value) => {
        this.onChange('startValue', value);
    }

    onEndChange = (value) => {
        this.onChange('endValue', value);
    }

    handleStartOpenChange = (open) => {
        if (!open) {
            this.setState({ endOpen: true });
        }
    }

    handleEndOpenChange = (open) => {
        this.setState({ endOpen: open });
    }

    render() {
        const { startValue, endValue, endOpen } = this.state;
        return (
            <div>
                <DatePicker
                    disabledDate={this.disabledStartDate}
                    size="small"
                    format="YYYY-MM-DD"
                    value={startValue}
                    placeholder=""
                    showToday={true}
                    onChange={this.onStartChange}
                    onOpenChange={this.handleStartOpenChange}
                />
                <span style={{ display: 'inline-block', width: '6%', textAlign: 'center' }}>
                    <div style={{ width: '30%', border: '1px solid #23faff', margin: '-6px auto' }}></div>
                </span>
                <DatePicker
                    disabledDate={this.disabledEndDate}
                    size="small"
                    format="YYYY-MM-DD"
                    value={endValue}
                    placeholder=""
                    showToday={true}
                    onChange={this.onEndChange}
                    open={endOpen}
                    onOpenChange={this.handleEndOpenChange}
                />
            </div>
        );
    }
}

export default DateTime;
