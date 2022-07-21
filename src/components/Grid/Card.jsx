import React from 'react'
import moment from 'moment'

const Card = ({ data }) => {
  const {
    fields: { Name, image_url, description, created_time, Tags, category },
  } = data

  return (
    <>
      {image_url && (
        <div className="flex w-11/12 flex-col items-center space-y-2 rounded-lg bg-slate-800 p-1 text-gray-300 shadow shadow-green-600">
          {image_url && (
            <img
              src={image_url}
              className="w-12/12 rounded-md object-cover shadow"
              alt={Name}
            />
          )}
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
          <div className="space-y-3 px-2">
            <h2 className="text-lg font-semibold tracking-tight">{Name}</h2>
            <p className="text-xs text-gray-500">
              {moment(created_time).startOf('day').fromNow()}
            </p>
          </div>
          
        </div>
      )}
    </>
  )
}

export default Card
