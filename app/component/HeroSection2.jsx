'use client'
import { Carousel } from "@material-tailwind/react";

export function CarouselCustomNavigation() {
    return (
        <div className="md:h-[85vh] h-full w-full">
            <Carousel
                autoplay={true}
                autoplayDelay={3000}
                loop={true}
                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                        {new Array(length).fill("").map((_, i) => (
                            <span
                                key={i}
                                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                    }`}
                                onClick={() => setActiveIndex(i)}
                            />
                        ))}
                    </div>
                )
                }
            >
                <img
                    src="/image2.jpg"
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                <img
                    src="/image3.jpg"
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                <img
                    src="/image4.jpg"
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                {/* <img
                    src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                    alt="image 3"
                    className="h-full w-full object-cover"
                /> */}
            </Carousel >
        </div>
    );
}