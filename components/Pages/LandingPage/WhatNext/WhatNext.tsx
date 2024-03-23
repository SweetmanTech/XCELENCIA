import FadeInWhenVisible from "@/components/FadeInWhenVisible"

const WhatNext = () => {
    return (
        <>
            <div className="w-full flex justify-center text-white text-[35px] font-[600] mt-[30px]">What to do next?</div>
            <div className="w-full grid lg:grid-cols-3 gri-col-1 text-white mt-[70px] gap-[30px]">
                <FadeInWhenVisible className="font-[600] flex flex-col items-center">
                    <p className="text-[35px]">Join Community</p>
                    <p className="text-[20px] text-[italic]">whatsapp community channel</p>
                </FadeInWhenVisible>
                <FadeInWhenVisible className="font-[600] flex flex-col items-center">
                    <p className="text-[35px]">Claim experience</p>
                    <p className="text-[20px]">DM xcelencia</p>
                </FadeInWhenVisible>
                <FadeInWhenVisible className="font-[600] flex flex-col items-center">
                    <p className="text-[35px]">Enjoy the album</p>
                    <p className="text-[20px]">Imagination sub page to see<br /> leaderboard and assets</p>
                </FadeInWhenVisible>
            </div>
        </>
    )
}

export default WhatNext