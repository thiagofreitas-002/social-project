//! Libs
import { Autoplay, Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCreative } from 'swiper'
import { css } from '@emotion/css'
import { Palette } from 'react-palette'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import loadingImg from '../../assets/loading.gif'

//! Components
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Posts } from './components/Posts'
import * as C from './styles'

//! Styles
import 'swiper/css/effect-creative'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css'

import { api } from '../../services/api'

export const Notices = () => {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(0)
  const [postsPage, setPostsPage] = useState(5)
  const [loading, setLoading] = useState(true)

  async function getPostsData() {
    setLoading(true)
    try {
      const response = await api.get(`/comments?_page=${page}&_limit=${postsPage}`, { method: 'GET' }).then((response) => {
        const data = response.data
        setPosts([...posts, ...data])
        setTotalPage(response.headers.get('X-total-count') / postsPage)
        setLoading(false)
        console.log(data)
      })
    } catch (err) {
      console.log(err)
    }
  }

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop < document.documentElement.offsetHeight || page === totalPage || loading) {
      return
    }

    setPage(page + 1)
  }

  useEffect(() => {
    getPostsData()
  }, [page])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [loading])

  return (
    <>
      <Header />
      <C.Carrousel>
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
          <SwiperSlide>
            <Palette src="https://previews.123rf.com/images/marinamandarina/marinamandarina1708/marinamandarina170800003/84119394-back-to-school-textures-for-wallpaper-fills-web-page-background-.jpg">
              {({ data, loading, error }) => (
                <div style={{ backgroundColor: data.vibrant }}>
                  <C.Image imageSrc="https://previews.123rf.com/images/marinamandarina/marinamandarina1708/marinamandarina170800003/84119394-back-to-school-textures-for-wallpaper-fills-web-page-background-.jpg" />
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
                )
              }}
            </Palette>
          </SwiperSlide>
        </Swiper>
      </C.Carrousel>

      <C.Container>
        <C.BoxContainer>
          {posts.map((response) => {
            return (
              <Link key={response.postId} to={`/notices/${response.postId}`}>
                <Posts items={response} />
              </Link>
            )
          })}

          {loading || page > 1 || <img width="100" height="100" src={loadingImg} alt="loading" />}
        </C.BoxContainer>
        <C.Menu>Cardápio</C.Menu>
      </C.Container>
      <Footer />
    </>
  )
}
