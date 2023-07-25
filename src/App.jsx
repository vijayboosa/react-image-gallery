import one from "./assets/images/car_1.jpg"
import two from "./assets/images/car_2.jpg"
import three from "./assets/images/car_3.jpg"
import four from "./assets/images/car_4.jpg"
import five from "./assets/images/five.jpg"
import six from "./assets/images/six.jpg"
import seven from "./assets/images/seven.jpg"
import eight from "./assets/images/eight.jpg"
import { useState } from "react"


function Image(p) {
  // p ->  {src: imgData}
  return (<>
    <img src={p.src} alt="car-photos" className="w-full px-1 md:w-1/3 lg:w-1/4 sm:w-1/2  rounded-2xl " />
  </>)
}

// props -> {imageType: 'car'}
function MainBody(props) {

  const imagesList = [
    {
      image: one,
      tags: ["car"]
    },
    {
      image: two,
      tags: ["car", "sunset"]
    },
    {
      image: three,
      tags: ["car"]
    },
    {
      image: four,
      tags: ["car"]
    },
    {
      image: five,
      tags: ["sunset", "buildings", "people", "human", "water"]
    },
    {
      image: six,
      tags: ["people", "human", "bridge"]
    },
    {
      image: seven,
      tags: ["sunset", "human", "walking"]
    },
    {
      image: eight,
      tags: ["sun rise", "walking", "human", "mountain"]
    },
  ]

  // [{image: one, tags: ["car"]}, {image: two, tags: ["car"]}]
  const filteredImages = imagesList.filter((e) => {
    if (e.tags.includes(props.imageType.toLowerCase()) || props.imageType === "") {
      return true
    }
  })

  return (<>

    <div className="flex my-6 flex-wrap gap-y-2">
      {
        // [<Image src={one} />, <Image src={two}/>]
        filteredImages.map((e) => {
          return <Image src={e.image} />
        })
      }
    </div>

  </>)
}


function App() {

  const [value, setValue] = useState("")

  const handleInput = (e) => {
    setValue(e.target.value)
  }

  return (<>

    <div className="container m-2 mx-auto">
      <div className="container w-1/2 text-center mx-auto my-6">
        <input type="text" className="border border-indigo-500 w-full text-3xl rounded"
          onChange={handleInput}
        />
      </div>

      <MainBody imageType={value} />
    </div>



  </>)
}

export default App
