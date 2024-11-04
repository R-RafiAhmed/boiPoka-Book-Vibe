import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {

    const {bookId} = useParams();
    const id = parseInt(bookId);

    const data = useLoaderData();

    const book = data.find(b => b.bookId === id);
    const {bookId: currentBook, image} = book;

    const handleWishlist = () => {

    }

    return (
        <div>
            <h2 className="text-3xl">Book no : {currentBook}</h2>
            <img className="w-80" src={image} alt="" />
            <div className="my-5">
                <button className="btn text-white">Read</button>
                <button onClick={handleWishlist} className="btn text-white bg-cyan-700">Wishlist</button>
            </div>
        </div>
    );
};

export default BookDetails;