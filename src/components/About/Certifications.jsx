import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Importar estilos de Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import '../../styles/Certifications.css';

const certs = [
  { id: 1, name: "Certificación ISO 9001", image: "../assets/image/LClaro.png" },
  { id: 2, name: "Project Management Professional", image: "https://via.placeholder.com/200x120?text=PMP" },
  { id: 3, name: "Scrum Alliance", image: "https://via.placeholder.com/200x120?text=SCRUM" },
  { id: 4, name: "Six Sigma Green Belt", image: "https://via.placeholder.com/200x120?text=SIX+SIGMA" },
  { id: 5, name: "Google Cloud Partner", image: "https://via.placeholder.com/200x120?text=GOOGLE" },
];

const Certifications = () => {
  return (
    <section className="certs-section">
      <div className="container">
        <div className="certs-header">
          <h2 className="certs-title">Certificaciones y Avales</h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="certs-swiper"
        >
          {certs.map((cert) => (
            <SwiperSlide key={cert.id}>
              <div className="cert-item">
                <img src={cert.image} alt={cert.name} className="cert-img" />
                <p className="cert-name">{cert.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Certifications;