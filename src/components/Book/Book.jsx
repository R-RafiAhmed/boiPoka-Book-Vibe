import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, bookName, author, image, rating, category, tags } = book;

  return (
    <div className="card w-96 shadow-xl p-6 bg-gray-50 rounded-2xl">
      <figure className="bg-gray-300 py-8 rounded-2xl">
        <img className="h-52"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="space-y-4 mt-6">
        <div className="flex gap-2">
            {
                tags.map((tag, idx) => <p key={idx} className="px-3 text-black bg-gray-300 rounded-2xl">{tag}</p>)
            }
        </div>
        <h2 className="text-2xl font-bold text-black">
          {bookName}
        </h2>
        <p className="text-black">By : {author}</p>
        <div className="border-b-2 border-dashed bg-black"></div>
        <div className="card-actions justify-between text-black">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">{rating}</div>
        </div>
      </div>
      <Link to={`books/${bookId}`} className="btn mt-6 text-lg">Show Details</Link>
    </div>
  );
};

export default Book;
