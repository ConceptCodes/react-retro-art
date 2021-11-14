
const navItems = [
    'discover',
    'artwork',
    'how it works'
]

function Header() {
    return (
        <div className="flex justify-between items-center pb-5">
            <div className="text-3xl">RetroArt</div>
            <div className="flex">
                { navItems.map(x => <div className="capitalize font-bold text-xs mx-3">{x}</div>) }
            </div>
            <div>
                <button className="bg-black px-10 h-10 text-xs text-white">Connect a Wallet</button>
            </div>
        </div>
    )
}

export default Header
