import delve from 'dlv';

import Link from 'next/link';

import { getStrapiMedia } from '../../../../utils';

const RestaurantCard = ({
  slug,
  images,
  name,
  information,
  category,
  locale,
}) => {
  const description = delve(information, 'description');

  return (
    <Link href={`/restaurants/${slug}?lang=${locale}`}>
      <div className="overflow-hidden shadow-lg rounded-lg h-90 w-full cursor-pointer">
        <img
          alt="blog photo"
          src={getStrapiMedia(delve(images[0], 'url'))}
          className="max-h-40 w-full object-cover"
        />
        <div className="bg-white dark:bg-gray-800 w-full p-4">
          <p className="text-secondary text-md font-medium">Restaurant</p>
          {name && (
            <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
              {name}
            </p>
          )}

          {description && (
            <p className="text-gray-400 dark:text-gray-300 font-light text-md">
              {description}
            </p>
          )}

          {category && (
            <div className="flex flex-wrap justify-starts items-center mt-4">
              <div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                #{delve(category, 'name')}
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;