import { Autoplay, Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Palette } from 'react-palette'

import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react'
import { css } from '@emotion/css'

import { BoxText } from './components/BoxText'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import * as C from './styles'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export const Notices = () => {
  function reveal() {
    window.effect = ScrollReveal({ reset: false })
    const mods = {
      duration: 200,
      delay: 50,
      distance: '100px',
      easing: 'ease-in-out',
      interval: 150,
      opacity: 0,
      scale: 0.75,
      origin: 'bottom',
      rotate: {
        x: 100,
        y: 0,
        z: 0,
      },
    }

    effect.reveal('.reveal', mods)
  }

  useEffect(() => {
    reveal()
  }, [])

  return (
    <>
      <Header />
      <C.Carrousel>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className={css`
            min-height: 100%;
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
            <Palette src="https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/School-Clipart/School_Wallpaper.jpg?m=1434276765">
              {({ data, loading, error }) => {
                return (
                  <div style={{ backgroundColor: data.vibrant }}>
                    <C.Image imageSrc="https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/School-Clipart/School_Wallpaper.jpg?m=1434276765" />
                  </div>
                )
              }}
            </Palette>
          </SwiperSlide>
        </Swiper>
      </C.Carrousel>

      <C.Container>
        <C.BoxContainer>
          //! Corrigir bug reveal não acontece
          <BoxText className="reveal" />
          <BoxText className="reveal" />
          <BoxText className="reveal" />
          <BoxText className="reveal" />
          <BoxText className="reveal" />
          <BoxText className="reveal" />
          <BoxText className="reveal" />
          <BoxText className="reveal" />
          <BoxText className="reveal" />
          <BoxText className="reveal" />
          <BoxText className="reveal" />
        </C.BoxContainer>

        <C.Menu>
          //! Ajustar para quando houver um scrollY subir o MenuContent descer 4.25rem para baixo
          <C.MenuContent>Testando</C.MenuContent>
        </C.Menu>
      </C.Container>
      <Footer />
    </>
  )
}
