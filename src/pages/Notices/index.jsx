//! Libs
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Palette } from "react-palette";

import { css } from "@emotion/css";
import styled from "@emotion/styled";

//! Components
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Posts } from "./components/Posts";
import * as C from "./styles";

//! Styles
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

import { apiProject } from "../../services/api";

const Content = styled.div`
  display: flex;
  min-height: 5rem;
  border-bottom: 1px solid white;
  background: #ddd;
`;

export function Notices() {
  const [posts, setPosts] = useState([]);
  const [cardapio, setCardapio] = useState([]);

  async function getPosts() {
    try {
      const response = await apiProject.get(`/news`).then((response) => {
        const data = response.data;
        setPosts(data);
        console.log(data);
      });

      const response1 = await apiProject.get(`/menus/today`).then((response) => {
        const data = response.data;
        setCardapio(data);
        console.log(data);
      });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <Header />
      <C.Carrousel>
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          effect={"creative"}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ["-120%", 0, -500],
            },
            next: {
              shadow: true,
              translate: ["120%", 0, -500],
            },
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation, EffectCreative]}
          className={css`
            width: 100%;
          `}
        >
          <SwiperSlide>
            <Palette src="https://images.template.net/104279/back-to-school-frame-background-6a9jb.jpg">
              {({ data, loading, error }) => (
                <div style={{ backgroundColor: data.vibrant }}>
                  <C.Image imageSrc="https://images.template.net/104279/back-to-school-frame-background-6a9jb.jpg" />
                </div>
              )}
            </Palette>
          </SwiperSlide>

          <SwiperSlide>
            <Palette src="https://images.template.net/104281/back-to-school-chalkboard-background-x7ajc.jpg">
              {({ data, loading, error }) => {
                return (
                  <div style={{ backgroundColor: data.vibrant }}>
                    <C.Image imageSrc="https://images.template.net/104281/back-to-school-chalkboard-background-x7ajc.jpg" />
                  </div>
                );
              }}
            </Palette>
          </SwiperSlide>
          
          <SwiperSlide>
            <Palette src="https://static.vecteezy.com/system/resources/previews/006/617/107/original/seamless-pattern-with-school-doodles-for-wrapping-paper-backgrounds-wallpaper-packaging-textile-prints-etc-eps-10-vector.jpg">
              {({ data, loading, error }) => {
                return (
                  <div style={{ backgroundColor: data.darkVibrant }}>
                    <C.Image imageSrc="https://static.vecteezy.com/system/resources/previews/006/617/107/original/seamless-pattern-with-school-doodles-for-wrapping-paper-backgrounds-wallpaper-packaging-textile-prints-etc-eps-10-vector.jpg" />
                  </div>
                );
              }}
            </Palette>
          </SwiperSlide>
          
          <SwiperSlide>
            <Palette src="https://images.template.net/104278/back-to-school-border-background-5flvc.jpg">
              {({ data, loading, error }) => {
                return (
                  <div style={{ backgroundColor: data.darkVibrant }}>
                    <C.Image imageSrc="https://images.template.net/104278/back-to-school-border-background-5flvc.jpg" />
                  </div>
                );
              }}
            </Palette>
          </SwiperSlide>
        </Swiper>
      </C.Carrousel>

      <C.Container>
        <C.BoxContainer>
          {posts.map((response) => {
            return (
              <Link key={response.id} to={`/notices/${response.id}`}>
                <Posts items={response} />
              </Link>
            );
          })}
        </C.BoxContainer>
        <C.Menu>
          <h1>Cardápio do dia</h1>
          <dl>
            <dt>Café da manhã</dt>
            <dd>{cardapio.breakfest}</dd>
            <dt>Almoço</dt>
            <dd>{cardapio.lunch}</dd>
            <dt>Lanche da tarde</dt>
            <dd>{cardapio.afternoon_snack}</dd>
          </dl>
          
        </C.Menu>
      </C.Container>
      <Footer />
    </>
  );
}
