function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div key={index} className={index === activeIndex ? "slides slideActive" : "inactive"}>
          <img className="slide-image" src={slide.urls} alt="" />
          <div className="">
            <h2 className="slide-title bg-[rgba(0,0,0,0.15)]">{slide.title}</h2>
            <h3 className="slide-text">{slide.description}</h3>
          </div>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
