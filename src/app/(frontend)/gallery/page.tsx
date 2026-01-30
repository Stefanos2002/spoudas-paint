import Image from 'next/image'
import Masonry from '../components/Masonry/Masonry'

export default function Gallery() {
  const images = [
    {
      id: '1',
      img: '/images/interior01.jpg',
      altText: 'Interior Image 1',
      height: 500,
    },
    {
      id: '2',
      img: '/images/exterior01.jpg',
      altText: 'Exterior Image 1',
      height: 500,
    },
    {
      id: '3',
      img: '/images/wall-decoration01.jpg',
      altText: 'Wall Decoration Image 1',
      height: 500,
    },
    {
      id: '4',
      img: '/images/roof1.jpg',
      altText: 'Roof Image 1',
      height: 800,
    },
    {
      id: '5',
      img: '/images/interior01.jpg',
      altText: 'Interior Image 1',
      height: 500,
    },
    {
      id: '6',
      img: '/images/exterior01.jpg',
      altText: 'Exterior Image 1',
      height: 500,
    },
    {
      id: '7',
      img: '/images/wall-decoration01.jpg',
      altText: 'Wall Decoration Image 1',
      height: 500,
    },
    {
      id: '8',
      img: '/images/roof1.jpg',
      altText: 'Roof Image 1',
      height: 800,
    },
  ]
  return (
    <Masonry
      items={images}
      ease="power3.out"
      duration={0.6}
      stagger={0.05}
      animateFrom="bottom"
      scaleOnHover
      hoverScale={0.95}
      blurToFocus
      colorShiftOnHover={false}
    />
  )
}
