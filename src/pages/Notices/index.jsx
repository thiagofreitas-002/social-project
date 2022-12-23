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
import { Database } from "phosphor-react";

const Content = styled.div`
  display: flex;
  min-height: 5rem;
  border-bottom: 1px solid white;
  background: #ddd;
`;

export function Notices() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const POSTS_PER_PAGE = 5;
  const [loading, setLoading] = useState(true);

  const [cardapio, setCardapio] = useState({});
  const [highlightPosts, setHighlightPosts] = useState([]);

  async function getPosts() {
    setLoading(true)
    const postsResponse = await apiProject
      .get(`/news?page=${page}&limit=${POSTS_PER_PAGE}`)
      .then((response) => {
        const data = response.data;

        console.log(data)

        setTotalPage(data.total_pages)
        setPosts([...posts, ...data.data]);
        setLoading(false)
        
        if (page == 1) {
          setHighlightPosts(data.data.slice(0, 3));
        }
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
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop <
        document.documentElement.offsetHeight ||
      page == totalPage ||
      loading
    ) {
      return;
    }

    setPage(page + 1)
  }

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
                <HighlightPosts
                  url={post.image}
                  title={post.title}
                  id={post.id}
                />
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
          {loading && (<p>Carregando...</p>)}
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
