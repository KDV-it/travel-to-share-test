import classNames from 'classnames';
import { Rating } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { MdArrowRightAlt } from 'react-icons/md';
import { BsStarFill } from 'react-icons/bs';

const Card = ({
  backgroundUrl,
  rating,
  isFavorited,
  city,
  country,
  avatarUrl,
  isUserOnline,
  detailUrl,
}) => {
  const iconSize = useMemo(() => 32, []);
  const ratingFloored = Math.floor(rating);

  return (
    <div
      className="flex flex-col justify-between items-center w-1/5 min-w-[296px] p-2.5 rounded-xl"
      style={{
        backgroundImage: `url(${backgroundUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="flex flex-row justify-between items-center w-full">
        <Rating size="md">
          {Array(5)
            .fill()
            .map((_, idx) => {
              const isFilled = idx + 1 <= ratingFloored;

              return (
                <Rating.Star
                  key={idx}
                  starIcon={() => (
                    <BsStarFill
                      size={iconSize * 0.7}
                      className={isFilled ? 'text-[#fcff41]' : 'text-white border-1'}
                    />
                  )}
                  filled={isFilled}
                />
              );
            })}
        </Rating>

        {isFavorited ? (
          <IoHeart size={iconSize} className="text-[#f85959]" />
        ) : (
          <IoHeartOutline size={iconSize} className="text-white" />
        )}
      </div>

      <div className="flex flex-col justify-center items-center my-4">
        <h2 className="font-bold text-2xl mt-4 text-white">{city}</h2>
        <h3 className="font-semibold text-lg mb-4 text-white">{country}</h3>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <div className="relative w-12 h-12">
          <Image
            className="rounded-full border border-gray-100 shadow-sm"
            src={avatarUrl}
            alt="User avatar"
            layout="fill"
          />
          <div
            className={classNames(
              'absolute top-0 right-0 h-3 w-3 border-2 border-white rounded-full z-2',
              isUserOnline ? 'bg-[#00ff51]' : 'bg-gray-300',
            )}
          ></div>
        </div>

        <Link href={detailUrl}>
          <a className="flex flex-row justify-between items-center border-b text-md text-gray border-b-gray hover:text-brand-color hover:border-b-brand-color ">
            Detail <MdArrowRightAlt size={iconSize * 0.7} className="mt-1 " />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Card;