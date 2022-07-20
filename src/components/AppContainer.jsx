import Nav from '../pages/Nav'
import { useState, useEffect } from 'react'
import Airtable from 'airtable'
import GridContainer from './Grid/GridContainer'
import NoteContainer from './Notes/NoteContainer'
import BookmarkContainer from './Bookmarks/BookmarkContainer'
import VideoContainer from './Videos/VideoContainer'

const AppContainer = () => {
  const [tableData, setTableData] = useState([])

  useEffect(() => {
    var base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE }).base(
      process.env.REACT_APP_PROJECTID
    )

    base('Projects')
      .select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 12,
        view: 'Grid view',
      })
      .eachPage(
        function page(records, fetchNextPage) {
          // This function (`page`) will get called for each page of records.
          setTableData(records)
          // To fetch the next page of records, call `fetchNextPage`.
          // If there are more records, `page` will get called again.
          // If there are no more records, `done` will get called.
          fetchNextPage()
        },
        function done(err) {
          if (err) {
            console.error(err)
            return
          }
        }
      )
  }, []) // airtable 

  return (
    <div className="mx-auto max-w-8xl text- space-y-6 pt-24 sm:h-full sm:w-full md:h-full md:w-full lg:mx-12 xl:mx-24 2xl:mx-24">
      <Nav />

      <NoteContainer tableData={tableData} />
      <BookmarkContainer />
      <VideoContainer />

      <GridContainer tableData={tableData} />
    </div>
  )
}

export default AppContainer
