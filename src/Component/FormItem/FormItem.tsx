import {FormInput as FormInputStyled, FormTitle, FormValue, FormWrapper} from "./FormItem.styled";
import {FormItemProps, FormSelectProps} from "./FormItem.interface";


export const FormInput = (props: FormItemProps) => {
    return (
        <FormWrapper>
            <FormTitle>
                {props.label}:
            </FormTitle>
            <FormValue>
                <FormInputStyled onChange={(e) => props.onChange?.(e.target.value)} value={props.value}/>
            </FormValue>
        </FormWrapper>
    )
}

export const FormSelect = (props: FormSelectProps) => {
    return (
        <FormWrapper>
            <FormTitle>
                {props.label}
            </FormTitle>
            <FormValue>
                <select onChange={(e) => props.onChange?.(e.target.value)}>
                    {
                        props.options.map(opt => (
                            <option value={opt.value}> {opt.label}</option>
                        ))
                    }
                </select>
            </FormValue>
        </FormWrapper>
    )
}
