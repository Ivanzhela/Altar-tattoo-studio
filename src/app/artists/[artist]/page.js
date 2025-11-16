import { notFound } from "next/navigation";
import style from "./artist.module.css";
import artistsData from "../../../data/artistsData";
import GalleryCarousel from "@/components/GalleryCarousel";

export function generateStaticParams() {
  return artistsData.map((artist) => ({
    artist: artist.slug,
  }));
}

export default async function ArtistPage({ params }) {
  const resolvedParams = await params;
  const artist = resolvedParams.artist;
  const artistInfo = artistsData.find((a) => a.slug === artist);

  if (!artistInfo) return notFound();

  return (
    <>
      <section className={style["hero-artist"]}>
        <div className={style["artist-img"]}>
          <img src={artistInfo.img} alt="Nino" loading="lazy" />
        </div>
        <div className={style["artist-content"]}>
          <h1>{artistInfo.name}</h1>
          <h2>{artistInfo.styles}</h2>
          <p className={style.bio}>
            {artistInfo.desc}
            {artistInfo.desc}
            {artistInfo.desc}
          </p>
        </div>
      </section>
      <section className={style["artist-category"]}>
        <div className={style.bio}>
          <h2>Bio</h2>
          {artistInfo.desc}
          {artistInfo.desc}
          {artistInfo.desc}
        </div>
        <div className={style.social}>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-facebook-square"></i>
          <i className="fa fa-reddit-square"></i>
        </div>
      </section>
      <section className={style["artist-showcase"]}>
        <div>
          <p>Check out my</p>
          <h2>Work</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex hic
            iure amet dolorum explicabo placeat maiores nulla voluptate facilis?
          </p>
        </div>
        {/* <div className="gallery">
          <div className="img-container">
            <img
              src="https://images.pexels.com/photos/955938/pexels-photo-955938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Art 1"
            />
            <p className="img-title">Nino Dinchev</p>
          </div>
          <div className="img-container">
            <img
              src="https://images.pexels.com/photos/2183132/pexels-photo-2183132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Art 3"
            />
            <p className="img-title">Nino Dinchev</p>
          </div>
          <div className="img-container">
            <img
              src="https://images.pexels.com/photos/2089530/pexels-photo-2089530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Art 4"
            />
            <p className="img-title">Nino Dinchev</p>
          </div>
          <div className="img-container">
            <img
              src="https://images.pexels.com/photos/2192237/pexels-photo-2192237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Art 5"
            />
            <p className="img-title">Nino Dinchev</p>
          </div>

          <div className="img-container">
            <img
              src="https://images.pexels.com/photos/2231633/pexels-photo-2231633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Art 6"
            />
            <p className="img-title">Nino Dinchev</p>
          </div>
          <div className="img-container">
            <img
              src="https://images.pexels.com/photos/4125582/pexels-photo-4125582.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Art 8"
            />
            <p className="img-title">Nino Dinchev</p>
          </div>
          <div className="img-container">
            <img
              src="https://images.pexels.com/photos/2183132/pexels-photo-2183132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Art 3"
            />
            <p className="img-title">Nino Dinchev</p>
          </div>
          <div className="img-container">
            <img
              src="https://images.pexels.com/photos/2134085/pexels-photo-2134085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Art 8"
            />
            <p className="img-title">Nino Dinchev</p>
          </div>

          <div className="img-container">
            <img
              src="https://images.pexels.com/photos/1433271/pexels-photo-1433271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Art 2"
            />
            <p className="img-title">Nino Dinchev</p>
          </div>
          <div className="img-container">
            <img
              src="https://images.pexels.com/photos/4125582/pexels-photo-4125582.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Art 8"
            />
            <p className="img-title">Nino Dinchev</p>
          </div>
          <div className="img-container">
            <img
              src="https://images.pexels.com/photos/2200913/pexels-photo-2200913.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Art 7"
            />
            <p className="img-title">Nino Dinchev</p>
          </div>
          <div className="img-container">
            <img
              src="https://images.pexels.com/photos/2183132/pexels-photo-2183132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Art 3"
            />
            <p className="img-title">Nino Dinchev</p>
          </div>
        </div> */}
        <GalleryCarousel />
      </section>
    </>
  );
}
