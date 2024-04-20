import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

const Navbar = () => {
    return (
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                <div>
                    <a href="/">Podjetje</a>
                </div>
                <div className="ml-auto">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <a href="/login">
                                    <NavigationMenuLink
                                        className={navigationMenuTriggerStyle()}>
                                        Login
                                    </NavigationMenuLink>
                                </a>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <a href="/predmeti">
                                    <NavigationMenuLink
                                        className={navigationMenuTriggerStyle()}>
                                        Predmeti
                                    </NavigationMenuLink>
                                </a>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
