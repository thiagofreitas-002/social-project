import { Autoplay, Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCreative } from 'swiper'

import { Palette } from 'react-palette'

import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react'
import { css } from '@emotion/css'

import { BoxText } from './components/BoxText'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import * as C from './styles'

import 'swiper/css/effect-creative'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css'

export const Notices = () => {
  function handleScrollY() {
    const test = document.getElementById('test')
    let scroll = window.scrollY

    const NavHidden = css`
      transform: translateY(calc(1 * var(--nav-height)));
    `

    window.addEventListener('scroll', () => {
      if (scroll > window.scrollY) {
        test.classList.add(NavHidden)
      } else {
        test.classList.remove(NavHidden)
      }
      scroll = window.scrollY
    })
  }

  useEffect(() => {
    handleScrollY()
  }, [])

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
          {/* Corrigir bug reveal não acontece */}
          <BoxText />
          <BoxText />
          <BoxText />
          <BoxText />
          <BoxText />
          <BoxText />
          <BoxText />
          <BoxText />
          <BoxText />
          <BoxText />
          <BoxText />
        </C.BoxContainer>

        <C.Menu>
          {/* Ajustar para quando houver um scrollY subir o MenuContent descer 4.25rem para baixo */}
          <C.MenuContent id="test">Testando</C.MenuContent>
        </C.Menu>
      </C.Container>
      <Footer />
    </>
  )
}
