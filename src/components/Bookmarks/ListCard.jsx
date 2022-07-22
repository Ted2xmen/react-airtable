import React from 'react'

const ListCard = ({firefox}) => {
  return (
    <div className='w-11/12 py-2 '>
        <ul className="space-y-1">
          <li className="">
            <a
              href={firefox.uri}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 h-full rounded-lg border border-gray-700 p-4 hover:border-green-600">
              <img src={firefox.iconuri} width="35" alt={firefox.title} />
              <h5 className="font-medium font-serif text-lg text-slate-500">{firefox.title}</h5>

            
            </a>
          </li>
        </ul>
    </div>
  )
}

export default ListCard
