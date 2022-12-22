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
import { HighlightPosts } from "./components/HighlightPosts";
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
  const [cardapio, setCardapio] = useState({});
  const [highlightPosts, setHighlightPosts] = useState([]);

  async function getPosts() {
    const postsResponse = await apiProject.get(`/news`).then((response) => {
      const data = response.data;
      setPosts(data);
      setHighlightPosts(data.slice(0, 3));
    });

    const menuResponse = await apiProject
      .get(`/menus/today`)
      .then((response) => {
        const data = response.data;
        setCardapio(data);
      })
      .catch((err) => {
        setCardapio(err.response.data);
      });
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
          {highlightPosts.map((post, index) => {
            return (
              <SwiperSlide key={index}>
                <HighlightPosts url={post.image} title={post.title} id={post.id}/>
              </SwiperSlide>
            );
          })}
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
          {cardapio.hasOwnProperty("message") ? (
            <p>{cardapio.message}</p>
          ) : (
            <dl>
              <dt>Café da manhã</dt>
              <dd>{cardapio.breakfest}</dd>
              <dt>Almoço</dt>
              <dd>{cardapio.lunch}</dd>
              <dt>Lanche da tarde</dt>
              <dd>{cardapio.afternoon_snack}</dd>
            </dl>
          )}
        </C.Menu>
      </C.Container>
      <Footer />
    </>
  );
}
