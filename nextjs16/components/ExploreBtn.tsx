"use client";

import Image from "next/image";

function ExploreBtn() {
  return (
    <button
      type="button"
      id="explore-btn"
      className="mt-7 mx-auto"
      onClick={() => console.log("clicked")}
    >
      <a href="#events">Explore</a>
      <Image
        src="/icons/arrow-down.svg"
        alt="Arrow down"
        height={24}
        width={24}
      />
    </button>
  );
}

export default ExploreBtn;
