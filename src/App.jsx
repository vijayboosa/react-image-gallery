import one from "./assets/images/car_1.jpg"
import two from "./assets/images/car_2.jpg"
import three from "./assets/images/car_3.jpg"
import four from "./assets/images/car_4.jpg"
import five from "./assets/images/five.jpg"
import six from "./assets/images/six.jpg"
import seven from "./assets/images/seven.jpg"
import eight from "./assets/images/eight.jpg"


function Image(p) {
  // p ->  {src: imgData}
  return (<>
    <img src={p.src} alt="car-photos" className="w-1/4 px-1 md:w-1/3 sm:w-full lg:w-1/4" />
  </>)
}

function MainBody() {
  return (<>

    <div className="flex my-6 flex-wrap gap-y-2">
      <Image src={one}/>
      <Image src={two}/>
      <Image src={three}/>
      <Image src={four}/>
      <Image src={five}/>
      <Image src={six}/>
      <Image src={seven}/>
      <Image src={eight}/>
    </div>

  </>)
}


function App() {
  return (<>

    <div className="container m-2 mx-auto">
      <div className="container w-1/2 text-center mx-auto my-6">
        <input type="text" className="border border-indigo-500 w-full text-3xl rounded" />
      </div>


      <MainBody />
    </div>



  </>)
}

export default App
