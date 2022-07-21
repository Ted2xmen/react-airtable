import React from 'react'

const ListCard = () => {
  return (
    <div>
      <article className="rounded-xl border border-gray-700 bg-gray-800 p-4">
        <ul className="mt-4 space-y-2">
          <li className="">
            <a
              href="https://github.com/andrewmcodes/hyperui"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
              <img
                src="https://unavatar.now.sh/twitter/itsmarkmead"
                className="h-16 w-16 rounded-full"
                alt=""
              />
              <h5 className="font-medium text-white">HyperUI</h5>

              <p className="mt-1 text-xs font-medium text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                consequuntur deleniti, unde ab ut in!
              </p>
            </a>
          </li>
        </ul>
      </article>
    </div>
  )
}

export default ListCard
