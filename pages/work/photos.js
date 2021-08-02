import React, { useState } from 'react'
import Metadata from '../../components/Metadata'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import PortfolioHero from '../../components/PortfolioHero'
import ProjectInfo from '../../components/ProjectInfo'
import data from '../../data/work'
import ProjectApps from '../../components/ProjectApps'
import styled from 'styled-components'
import Image from 'next/image'
import FormBox from '../../components/FormBox'
import FsLightbox from 'fslightbox-react'

const ImgWrapper = styled.div`
  grid-column: 3 / span 8;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    grid-column: 1 / -1;
  }
`

export default function Detail({}) {
  const { photos } = data
  const [showPhotos, setShowPhotos] = useState(false)
  return (
    <>
      <Metadata title="A Collection Of Photos" />
      <Nav />
      <main>
        <PortfolioHero src={photos.img} />
        <ProjectInfo title={photos.title} text={photos.text} />
        <ProjectApps apps={photos.appsUsed} />
        <ImgWrapper>
          <div className="image" onClick={() => setShowPhotos(!showPhotos)}>
            <Image
              src="/photos-forest.jpg"
              width={5760}
              height={3840}
              className="border-image image"
            />
          </div>
          <div className="image" onClick={() => setShowPhotos(!showPhotos)}>
            <Image
              src="/photos-reload.jpg"
              width={5635}
              height={3757}
              className="border-image"
            />
          </div>

          <div className="image" onClick={() => setShowPhotos(!showPhotos)}>
            <Image
              src="/photos-leo.jpg"
              width={5452}
              height={3635}
              className="border-image"
              quality={100}
            />
          </div>

          <div className="image" onClick={() => setShowPhotos(!showPhotos)}>
            <Image
              src="/photos-snowball.jpg"
              width={5106}
              height={3404}
              className="border-image"
            />
          </div>

          <div className="image" onClick={() => setShowPhotos(!showPhotos)}>
            <Image
              src="/photos-israel.jpg"
              width={5706}
              height={3840}
              className="border-image"
            />
          </div>

          <div className="image" onClick={() => setShowPhotos(!showPhotos)}>
            <Image
              src="/photos-coconut.jpg"
              width={5616}
              height={3744}
              className="border-image"
            />
          </div>

          <div className="image" onClick={() => setShowPhotos(!showPhotos)}>
            <Image
              src="/photos-tori-kelly.jpg"
              width={5616}
              height={3744}
              className="border-image"
            />
          </div>

          <div className="image" onClick={() => setShowPhotos(!showPhotos)}>
            <Image
              src="/photos-friends.jpg"
              width={5760}
              height={3840}
              className="border-image"
            />
          </div>

          <div className="image" onClick={() => setShowPhotos(!showPhotos)}>
            <Image
              src="/photos-joshua-tree.jpg"
              width={5760}
              height={3840}
              className="border-image"
            />
          </div>

          <div className="image" onClick={() => setShowPhotos(!showPhotos)}>
            <Image
              src="/photos-sax.jpg"
              width={5760}
              height={3840}
              className="border-image"
            />
          </div>

          <div className="image" onClick={() => setShowPhotos(!showPhotos)}>
            <Image
              src="/photos-ebony.jpg"
              width={5760}
              height={3840}
              className="border-image"
            />
          </div>
        </ImgWrapper>
        <FsLightbox
          toggler={showPhotos}
          sources={[
            '/_next/image?url=%2Fphotos-forest.jpg&w=3840&q=75',
            '/_next/image?url=%2Fphotos-reload.jpg&w=3840&q=75',
            '/_next/image?url=%2Fphotos-leo.jpg&w=3840&q=75',
            '/_next/image?url=%2Fphotos-snowball.jpg&w=3840&q=75',
            '/_next/image?url=%2Fphotos-israel.jpg&w=3840&q=75',
            '/_next/image?url=%2Fphotos-coconut.jpg&w=3840&q=75',
            '/_next/image?url=%2Fphotos-tori-kelly.jpg&w=3840&q=75',
            '/_next/image?url=%2Fphotos-friends.jpg&w=3840&q=75',
            '/_next/image?url=%2Fphotos-joshua-tree.jpg&w=3840&q=75',
            '/_next/image?url=%2Fphotos-sax.jpg&w=3840&q=75',
            '/_next/image?url=%2Fphotos-ebony.jpg&w=3840&q=75',
          ]}
        />
      </main>
      <Footer />
    </>
  )
}
