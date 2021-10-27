import { navigate } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';
import blogFilterToSlug from 'utils/blog-filter-to-slug';

import CiliumLogo from './images/cilium-logo.inline.svg';

const handleCategoryClick = (event, category, type) => {
  event.preventDefault();
  const href = blogFilterToSlug(category, type);
  navigate(href, {
    state: { preventScroll: true },
  });
};
const BlogPostCard = ({ path, ogImage: cover, date, title, ogSummary: summary, categories }) => (
  <div className="flex flex-col p-6 border rounded-lg md:p-8 border-gray-3">
    <Link to={path}>
      {cover ? (
        <GatsbyImage
          className="min-h-[168px] max-h-[168px]"
          imgClassName="rounded-lg"
          image={getImage(cover)}
          alt={title}
        />
      ) : (
        <div className="h-[168px] flex justify-center items-center bg-gray-4 rounded-lg">
          <CiliumLogo />
        </div>
      )}
    </Link>

    <div className="flex flex-col flex-grow mt-7">
      <span className="text-sm font-medium leading-none text-gray-1">{date}</span>
      <Link to={path}>
        <h3 className="mt-3 font-bold leading-normal line-clamp-3 md:text-lg">{title}</h3>
      </Link>
      <p className="mt-2 mb-4 line-clamp-3">{summary}</p>
      <div className="flex flex-wrap mt-auto gap-x-2 gap-y-2">
        {categories?.map((category) => (
          <button
            className="text-primary-1 font-bold bg-additional-4 bg-opacity-70 rounded p-2.5 tracking-wider uppercase text-xs leading-none"
            type="button"
            key={category}
            onClick={(event) => handleCategoryClick(event, category, 'categories')}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  </div>
);

BlogPostCard.propTypes = {
  path: PropTypes.string.isRequired,
  ogImage: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      gatsbyImageData: PropTypes.shape(),
    }),
  }),
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  ogSummary: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.string),
};

BlogPostCard.defaultProps = {
  ogImage: null,
  ogSummary: null,
  categories: null,
};

export default BlogPostCard;
