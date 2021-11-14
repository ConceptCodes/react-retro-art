
const navItems = [
    'discover',
    'artwork',
    'how it works'
]

function Header() {
    return (
        <div className="flex justify-between items-center pb-3">
            <div className="text-3xl">RetroArt</div>
            <ul className="hidden md:flex">
                { navItems.map(x => <li className="capitalize font-bold text-xs mx-3">{x}</li>) }
            </ul>
            <div className="hidden md:inline-block">
                <button className="bg-black px-10 h-10 text-xs text-white">Connect a Wallet</button>
            </div>
        </div>
    )
}

export default Header
