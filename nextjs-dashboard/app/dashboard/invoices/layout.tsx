import SideNav from "@/app/ui/dashboard/sidenav";

export default function Layout (
    { children } : { children: React.ReactNode}
    )
{
    return (
        <div className="flex h-screen flec-col md:flex-row nm:overflow-hidden">
            <div className="w-full flex-none nm:w-64">
                <SideNav />    
            </div>
            <div className="flex-gorw p-6 md:overflow-y-auto md:p=12">{children}</div>        
        </div>
    )
}