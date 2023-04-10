import {OnChangeType} from "../Commons/commons.interface";

export interface FormItemProps {
    label: string,
    value: string;
    name: string;
    onChange?: OnChangeType<any>
}

export interface FormSelectProps extends FormItemProps {
    options: {
        label: string;
        value: string;
    }[]
}
