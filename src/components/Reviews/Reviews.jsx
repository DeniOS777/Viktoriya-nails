import React from 'react';
import { Swiper } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { ReviewItem } from 'components/ReviewItem';
import reviews from './data.json';
import { Section, Container, Title, SwiperSlideCustom } from './Reviews.styled';

export const Reviews = () => {
  return (
    <Section>
      <Container>
        <Title>Отзывы моих гостей</Title>
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          effect="coverflow"
          coverflowEffect={{ rotate: 5, modifier: 3.5 }}
          slidesPerView={1}
          spaceBetween={50}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1230: { slidesPerView: 3 },
          }}
          loop={true}
          grabCursor={true}
          navigation
          pagination={{ clickable: true }}
          centeredSlides={true}
        >
          {reviews.map((review, idx) => (
            <SwiperSlideCustom key={idx}>
              <ReviewItem review={review} />
            </SwiperSlideCustom>
          ))}
        </Swiper>
      </Container>
    </Section>
  );
};
