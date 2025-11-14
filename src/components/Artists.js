import Link from "next/link";
import Image from "next/image";
import artistsData from "@/data/artistsData";

export default function Artists() {
  artistsData;

  return (
    <section id="artists" className="artists">
      <div>
        <p>Check out our</p>
        <h2>Artists</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex hic iure
          amet dolorum explicabo placeat maiores nulla voluptate facilis?
        </p>
      </div>
      <div className="artists-info">
        {artistsData.map((artist, idx) => (
          <Link key={idx} href={`/artists/${artist.slug}`} className="artist">
            <Image
              src={artist.photo}
              alt={artist.name}
              width={300}
              height={300}
            />
            <h3 className="artist-title">{artist.name}</h3>
            <div className="artist-info">
              <p className="info-styles">{artist.styles}</p>
              <p>{artist.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
