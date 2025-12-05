import Footer from "./Components/Footer/Footer";
import Movieroll from "./Components/Movieroll/Movieroll";
import Navbar from "./Components/Navbar/Navbar";
import Post from "./Components/post.jsx/Post";
import Suggest from "./Components/Suggest/Suggest";
import Title from "./Components/Title/Title";
function App() {
  return(
    <>
      <div className="bdark">
          <Navbar/>
          <Suggest/>
      </div>
      <div className="bg-bl">
          <Title first='مشاهده همه' second='فیلم جدید'/>
          <Movieroll/>
          <Title first='مشاهده همه' second='فیلم اکشن'/>
          <Movieroll />
          <Title first='مشاهده همه' second='فیلم ترسناک'/>
          <Movieroll/>
          <Post/>
          <Footer/>
      </div>
    </>
  )
}

export default App;
