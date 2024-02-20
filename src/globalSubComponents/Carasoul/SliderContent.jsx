import { Button } from "@nextui-org/react";

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div key={index} className={index === activeIndex ? "slides slideActive" : "inactive"}>
          <img className="slide-image" src={slide.urls} alt="" />
          <div>
            <h4 className="slide-caption bg-[rgba(0,0,0,0.15)]">Explore The World</h4>
            <h2 className="slide-title">{slide.title}</h2>
            <h3 className="slide-text flex justify-center">
              <p className="max-w-[35rem] leading-[1.4rem]">{slide.description}</p>
            </h3>
            <div className="slide-btn flex justify-center">
              <Button className="bg-[#13357bff] text-white px-[2rem]" size="lg" radius="full">
                Discover Now
              </Button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
