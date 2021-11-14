import Image from "next/image";

const stats = [
  {
    value: 30,
    title: "artwork",
  },
  {
    value: 130,
    title: "auction",
  },
  {
    value: 12,
    title: "artist",
  },
];

function Banner() {
  return (
    <div className="flex  justify-between mt-10 lg:mt-20">
      <div>
        <div className="text-6xl lg:text-8xl pb-4 capitalize">
          Collect RetroArt <br></br>digital artwork
        </div>
        <div className="text-lg pb-4">
          Buy and sell NFT's from the worlds top artist's
        </div>
        <button className="px-10 py-4 text-xs bg-black text-white capitalize">
          get started
        </button>
        <hr className="my-5 font-bold"></hr>
        <div className="flex justify-start">
          {stats.map((item, index) => (
            <div key={index} class="mr-6">
                <div className="text-4xl">{item.value}K+</div>
                <div className="text-gray-400 text-lg capitalize">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden md:inline-block max-w-xs">
        <Image
          src="https://via.placeholder.com/500"
          width={400}
          height={250}
        />
        <div className="p-5 flex flex-col bg-yellow-200">
          <div className="uppercase text-2xl mb-3">terraforma</div>
          <div className="text-xs text-gray-400 capitalize">reserve price</div>
          <div className="text-xl uppercase mb-3">
            2.00 eth <span className="text-gray-400 text-xs">($4,891.20)</span>
          </div>
          <div className="flex justify-between">
            <button className="bg-black px-5 py-3 text-xs text-white">
              Place a Bid
            </button>
            <button className="border px-5 py-3 text-xs border-black">
              View Artwork
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
