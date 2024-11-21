import type { FC } from 'hono/jsx'

const Navbar: FC = () => {
    return(
        <header className="h-16 bg-green-900 flex text-green-50 border-b border-b-[#ffd700] items-center shadow-sm">
            <nav className="p-4 md:p-8">
                <h1 className="text-2xl font-extrabold">API Garden</h1>
            </nav>
        </header>
    );
}

export default Navbar;
