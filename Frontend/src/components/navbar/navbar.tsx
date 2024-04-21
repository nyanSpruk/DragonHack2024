import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { getLogStatus } from '@/lib/auth';
import { UserNav } from './user-nav';

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
                            {!getLogStatus() && (
                                <NavigationMenuItem>
                                    <a href="/login">
                                        <NavigationMenuLink
                                            className={navigationMenuTriggerStyle()}>
                                            Login
                                        </NavigationMenuLink>
                                    </a>
                                </NavigationMenuItem>
                            )}
                            {getLogStatus() && (
                                <>
                                    <NavigationMenuItem>
                                        <a href="/predmeti">
                                            <NavigationMenuLink
                                                className={navigationMenuTriggerStyle()}>
                                                Predmeti
                                            </NavigationMenuLink>
                                        </a>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <UserNav />
                                    </NavigationMenuItem>
                                </>
                            )}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
