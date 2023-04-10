import {LayoutStyled, PageLayoutStyled} from './layout.styled';
import {LayoutProps, PageLayoutProps} from "./layout.interface";

export const PageLayout = (props: PageLayoutProps) => {
    return (
        <PageLayoutStyled>
            {props.children}
        </PageLayoutStyled>
    )
}


export const Layout = (props: LayoutProps) => {
    return (
        <LayoutStyled>
            {props.children}
        </LayoutStyled>
    )
}
