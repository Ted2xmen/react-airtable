import React from 'react'
import moment from 'moment'

const NoteCard = ({ data }) => {
  const {
    fields: { Name, image_url, description, created_time, Tags, category },
  } = data
  return (
    <>
      {description && (
        <div className="flex w-1/1 md:w-1/2 xl:w-1/3 2xl:w-1/3 flex-shrink-0 flex-col rounded-md bg-green-600 p-4">
          <div className="space-y-3 px-2">
            <h2 className="text-lg font-semibold tracking-tight">{Name}</h2>
            <div className="space-x-1">
              {Tags?.map((tag, i) => {
                return (
                  <span
                    key={i}
                    className="rounded-lg bg-slate-900 p-1 text-xs text-gray-400 shadow shadow-green-700">
                    {tag}
                  </span>
                )
              })}
              <span className="rounded-lg bg-red-600 p-1 text-xs text-gray-200">
                {category}
              </span>
            </div>
            <p className="text-xs text-gray-600">
              {moment(created_time).calendar()}
            </p>
          </div>
          <div className=" p-2  py-2">
            <p className="text-sm ">{description}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default NoteCard
