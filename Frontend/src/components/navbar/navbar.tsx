import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { getLogStatus, getUser } from '@/lib/auth';
import { UserNav } from './user-nav';

const Navbar = () => {
    return (
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                <div>
                    <a href="/">ProjectBridge</a>
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
                            {getLogStatus() &&
                                getUser() === 'student@student.si' && (
                                    <>
                                        <NavigationMenuItem>
                                            <a href="/courses">
                                                <NavigationMenuLink
                                                    className={navigationMenuTriggerStyle()}>
                                                    Courses
                                                </NavigationMenuLink>
                                            </a>
                                        </NavigationMenuItem>
                                    </>
                                )}
                            {getLogStatus() &&
                                getUser() === 'zerodays@zerodays.si' && (
                                    <>
                                        <NavigationMenuItem>
                                            <a href="/submitChallenge">
                                                <NavigationMenuLink
                                                    className={navigationMenuTriggerStyle()}>
                                                    Submit Challenge
                                                </NavigationMenuLink>
                                            </a>
                                        </NavigationMenuItem>
                                    </>
                                )}
                            {getLogStatus() && getUser() === 'prof@prof.si' && (
                                <>
                                    <NavigationMenuItem>
                                        <a href="/submitProject">
                                            <NavigationMenuLink
                                                className={navigationMenuTriggerStyle()}>
                                                Submit Project
                                            </NavigationMenuLink>
                                        </a>
                                    </NavigationMenuItem>
                                </>
                            )}
                            {getLogStatus() && (
                                <>
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
