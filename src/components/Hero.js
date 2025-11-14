import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="overlay">
        <div className="hero-content">
          <h4>Tattoo Studio</h4>
          <h1>Altar Tattoo Sofia</h1>
          <p>
            It's not all about the tools; it's about design, precision and attention to detail as well.
            It's not all about the tools; it's about design, precision and attention to detail as well.
          </p>
          <button className="btn">View More</button>
        </div>
        <div className="destination_gallery">
          <div className="gallery_wrapper">
            <Image
              className="gallery_img"
              src="https://images.pexels.com/photos/2183132/pexels-photo-2183132.jpeg"
              alt="Art 3"
              width={1260}
              height={750}
            />
            <Image
              className="gallery_img"
              src="https://images.pexels.com/photos/2192237/pexels-photo-2192237.jpeg"
              alt="Art 5"
              width={1260}
              height={750}
            />
            <Image
              className="gallery_img"
              src="https://images.pexels.com/photos/2231633/pexels-photo-2231633.jpeg"
              alt="Art 6"
              width={1260}
              height={750}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
