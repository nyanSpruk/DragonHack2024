import { cn } from '@/lib/utils';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link to="/">
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}>
                            Home
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <a href="/login">
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}>
                            Login
                        </NavigationMenuLink>
                    </a>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
};

export default Navbar;
