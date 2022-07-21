import Nav from './Nav'
import BookmarkContainer from '../components/Bookmarks/BookmarkContainer'

const AboutPage = () => {
  return (
    <>
      <div className="mx-auto items-center justify-center pt-24 sm:h-full sm:w-full md:h-full md:w-full lg:mx-12 xl:mx-24">
        <Nav />
        <div className=" m-4 p-12">
          <BookmarkContainer />
        </div>
      </div>
    </>
  )
}

export default AboutPage
