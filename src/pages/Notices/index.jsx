//! Libs
import { Autoplay, Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCreative } from 'swiper'
import { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroller'

import { css } from '@emotion/css'

//! Components
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Posts } from './components/Posts'
import { HighlightPosts } from './components/HighlightPosts'
import * as C from './styles'

//! Styles
import 'swiper/css/effect-creative'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css'

import { apiProject } from '../../services/api'
import { Link } from 'react-router-dom'
import { Coffee, CookingPot, Hamburger } from 'phosphor-react'
import { padding } from '@mui/system'

export function Notices() {
  const [totalPages, setTotalPages] = useState(0)
  const [hasMore, setHasMore] = useState(true)
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const POSTS_PER_PAGE = 5

  const [cardapio, setCardapio] = useState({})
  const [highlightPosts, setHighlightPosts] = useState([])

  async function getPosts() {
    const postsResponse = await apiProject.get(`/news?page=${page}&limit=${POSTS_PER_PAGE}`).then((response) => {
      const data = response.data

      setPosts([...posts, ...data.data])

      if (page == 1) {
        setHighlightPosts(data.data.slice(0, 3))
        setTotalPages(data.total_pages)
      }

      setPage(page + 1)

      if (page == data.total_pages) {
        setHasMore(false)
      }
    })
  }

  async function getMenuToday() {
    const menuResponse = await apiProject
      .get(`/menus/today`)
      .then((response) => {
        const data = response.data
        setCardapio(data)
      })
      .catch((err) => {
        setCardapio(err.response.data)
      })
  }

  useEffect(() => {
    getMenuToday()
  }, [])

  return (
    <>
      <Header />
      <C.Carrousel id="teste">
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          effect={'creative'}
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
              translate: ['-120%', 0, -500],
            },
            next: {
              shadow: true,
              translate: ['120%', 0, -500],
            },
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation, EffectCreative]}
          className={css`
            width: 100%;
          `}
        >
          {highlightPosts.map(({ image, title, id }, index) => {
            return (
              <SwiperSlide key={index}>
                <HighlightPosts url={image} title={title} id={id} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </C.Carrousel>

      <C.Container>
        <C.Content>
          <InfiniteScroll pageStart={1} loadMore={getPosts} hasMore={hasMore} loader={<p>Carregando</p>} className="infinite-scroll">
            {posts.map((item) => (
              <Link to={`/notices/${item.id}`} key={item.id}>
                <Posts item={item} />
              </Link>
            ))}
          </InfiniteScroll>
        </C.Content>

        <C.Menu>
          <header>Cardápio do dia</header>
          {cardapio.hasOwnProperty('message') ? (
            <p style={{color: "#00A849", padding: "1rem"}}>{cardapio.message}</p>
          ) : (
            <C.Cards>
              <C.Breakfast>
                <C.Info>
                  <Coffee size={32} color="#fff" weight="fill" />
                  <h4>Café da manhã</h4>
                  <p>{cardapio.breakfest}</p>
                  {/* <button>Read More</button> */}
                </C.Info>
              </C.Breakfast>

              <C.Lunch>
                <C.Info>
                  <CookingPot size={32} color="#fff" weight="fill" />
                  <h4>Almoço</h4>
                  <p>{cardapio.lunch}</p>
                  {/* <button>Read More</button> */}
                </C.Info>
              </C.Lunch>

              <C.AfternoonSnack>
                <C.Info>
                  <Hamburger size={32} color="#fff" weight="fill" />
                  <h4>Lanche da tarde</h4>
                  <p>{cardapio.afternoon_snack}</p>
                  {/* <button>Read More</button> */}
                </C.Info>
              </C.AfternoonSnack>
            </C.Cards>
          )}
        </C.Menu>
      </C.Container>
      <Footer />
    </>
  )
}
