
import React from 'react';

interface Props {
    title: string;
}

const TagJobCard: React.FC<Props> = ({title}) => {

    return (
      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
        {title}
      </span>
    );
};

export default TagJobCard;