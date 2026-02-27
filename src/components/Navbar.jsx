const Navbar = ({ wishlistCount, watchedCount, onWishlistClick }) => {
  return (
    <div className="navbar bg-base-100 shadow-md px-4">
      {/*Tailwind implementation of a navbar with a title on the left and two buttons on the right.*/}
      {/* Left — title and icon */}
      <div className="flex-1">
        <span className="text-xl font-bold">🎬 CineLog</span>
      </div>

      {/* Right — buttons */}
      <div className="flex gap-2">
        <button className="btn btn-ghost" onClick={onWishlistClick}>
          Wishlist
          {wishlistCount > 0 && (
            <span className="badge badge-primary">{wishlistCount}</span>
          )}
        </button>

        <button className="btn btn-ghost">
          Watched
          {watchedCount > 0 && (
            <span className="badge badge-secondary">{watchedCount}</span>
          )}
        </button>
      </div>

    </div>
  )
}

export default Navbar