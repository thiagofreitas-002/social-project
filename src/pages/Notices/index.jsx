//! Libs
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroller";

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
import { Link } from "react-router-dom";

const Content = styled.div`
  display: flex;
  min-height: 5rem;
  border-bottom: 1px solid white;
  background: #ddd;
`;

export function Notices() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const POSTS_PER_PAGE = 5;
  const [totalPages, setTotalPages] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const [cardapio, setCardapio] = useState({});
  const [highlightPosts, setHighlightPosts] = useState([]);

  async function getPosts() {
    const postsResponse = await apiProject
      .get(`/news?page=${page}&limit=${POSTS_PER_PAGE}`)
      .then((response) => {
        const data = response.data;
        console.log(data);

        setPosts([...posts, ...data.data]);

        if (page == 1) {
          setHighlightPosts(data.data.slice(0, 3));
          setTotalPages(data.total_pages);
        }

        setPage(page + 1);

        if (page == data.total_pages) {
          setHasMore(false);
        }
      });
  }

  async function getMenuToday() {
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
    getMenuToday();
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
          <InfiniteScroll
            pageStart={1}
            loadMore={getPosts}
            hasMore={hasMore}
            loader={<p>Carregando</p>}
          >
            {posts.map((item) => (
              <C.Margin key={item.id}>
                <Link to={`/notices/${item.id}`}>
                  <Posts item={item} />
                </Link>
              </C.Margin>
            ))}
          </InfiniteScroll>
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
