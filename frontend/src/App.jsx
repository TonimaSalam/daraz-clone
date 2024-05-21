import CategoriesContainer from "./components/CategoriesContainer";
import CategoryAndSliderContainer from "./components/CategoryAndSliderContainer";
import FlashSaleContainer from "./components/FlashSaleContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import JustForYouContainer from "./components/JustForYouContainer";

function App() {
  return (
    <div className="h-full w-full grid grid-cols-1 gap-3 pb-10">
      <Header></Header>
      <div className="pl-20 pr-20 grid grid-cols-1 gap-8">
        <CategoryAndSliderContainer></CategoryAndSliderContainer>
        <FlashSaleContainer></FlashSaleContainer>
        <CategoriesContainer></CategoriesContainer>
        <JustForYouContainer></JustForYouContainer>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
