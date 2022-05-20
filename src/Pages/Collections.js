import Navbar from "../Components/Navbar/Navbar.js";
import CollectionsList from "../Components/CategoriesList/CollectionsList.js";
import Footer from "../Components/Footer/Footer.js";
import { photoInfo } from "../photos.js";

function Collections() {
  const categories = [];

  photoInfo.forEach((e) => {
    if (categories.includes(e.category)) {
      return;
    }
    categories.push(e.category);
  });

  console.log(categories);

  return (
    <div className="page-container">
      <Navbar />
      <CollectionsList categories={categories} />
      <Footer subpage />
    </div>
  );
}

export default Collections;
