import React from 'react'
import type { Blog } from '../Types';
import { FaBookmark, FaEdit, FaTrash } from 'react-icons/fa';

interface ArticleCardProps{
    article: Blog;
    onDelete: () => void;
    onEdit: () => void;
}
const ArticleCard: React.FC<ArticleCardProps> = ({article, onDelete, onEdit,}) => {
  return (
    <div className='flex p-4 bg-white w-[40rem] mb-6 ml-[2rem] shadow-lg hover:shadow-xl transition-shdaow duration-300 ease-in-out'>
        <img src={article.image} alt={article.title} className='2-36 h-24 object-cover rounded-lg shadow-md' />

        <div className="ml-6 flex-1 flex flex-col">
            <h3 className="text-xl dont-semibold text-gray-800 mb-2">
                {article.title}
            </h3>
            <p className='text-sm text-gray-700 flex-1'>{article.description}</p>
            <div className="flex items-center justify-between mt-4 text-gray-600">
                <span className="text-sm">{article.time}</span>
                <span className="flex space-x-3">
                    <FaBookmark className='text-gray-500 hover:text-gray-700 transition-colors duration-200 cursor-pointer'/>
                    <FaEdit onClick={onEdit} className='text-blue-500 hover:text-blue-600 transition-colors duration-200 cursoru-pointer' />
                    <FaTrash onClick={onDelete} className='text-red-500 hover:text-red-600 transition-colors duration-200 cursor-pointer' />
                </span>
            </div>
        </div>
    </div>
  )
}

export default ArticleCard;  