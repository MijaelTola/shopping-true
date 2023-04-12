import {NavStyled, NavItems, NavLogo, ItemsSections, LinkStyled} from "./navbar.styled";
import {NavBarProps} from "./navbar.interface";

export const Navbar = (props: NavBarProps) => {

    return (
        <NavStyled>
            <NavLogo>
                {props.logo}
            </NavLogo>
            <ItemsSections>
                <NavItems>
                    {props.items?.map(item => (
                        <LinkStyled data-testid={item.key} to={item.name ?? ''}>  {item.label } </LinkStyled>
                    ))}
                </NavItems>
                <NavItems>
                    { props.extra }
                </NavItems>
            </ItemsSections>
        </NavStyled>
    )
}
