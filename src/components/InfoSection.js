import Image from 'next/image';

export default function InfoSection() {
  const info = [
    { title: 'Tattoo designs' },
    { title: 'Piercing & jewellery' },
    { title: 'Body Modifications' },
  ];

  return (
    <section className="info">
      {info.map((item, idx) => (
        <div className="info-box" key={idx}>
          <Image src="/Altar-tattoo-studio/logo.png" alt="" width={50} height={50} />
          <h3>{item.title}</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="#">Read more</a>
        </div>
      ))}
    </section>
  );
}
