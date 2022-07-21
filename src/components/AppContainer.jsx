import { useState, useEffect } from 'react'
import Airtable from 'airtable'
import GridContainer from './Grid/GridContainer'
import NoteContainer from './Notes/NoteContainer'
import BookmarkContainer from './Bookmarks/BookmarkContainer'
import VideoContainer from './Videos/VideoContainer'

const AppContainer = () => {
  const [tableData, setTableData] = useState([])
  const maxTableItem = 12 // airtable - notes section

  useEffect(() => {
    var base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE }).base(
      process.env.REACT_APP_PROJECTID
    )

    base('Projects')
      .select({
        maxRecords: maxTableItem,
        view: 'Grid view',
      })
      .eachPage(
        function page(records, fetchNextPage) {
          setTableData(records.reverse()) // show the latest first
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
    <div className="max-w-8xl text- mx-auto space-y-6 pt-24 sm:h-full sm:w-full md:h-full md:w-full lg:mx-12 xl:mx-24 2xl:mx-24">
      <NoteContainer tableData={tableData} />
   
      <VideoContainer length={2} />
    
     
      <GridContainer tableData={tableData} />
    </div>
  )
}

export default AppContainer
