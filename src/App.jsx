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
  // p ->  {src: imgData, onClick: function<handleImgClick>}
  return (<>
    <img src={p.src} alt="car-photos" className="w-full px-1 md:w-1/3 lg:w-1/4 2xl:w-1/5 sm:w-1/2  rounded-2xl cursor-pointer" onClick={p.onClick}/>
  </>)
}

function OverlayComp(props) {
  // props -> {imgSrc: two, handleClose: function<handleOverlayClose>}
  const handleParentClick = (event)  => {
    event.preventDefault()
    // console.log(event.target);
    if (event.target === event.currentTarget) {
      props.handleClose()
    }
  }

  return (
<div className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full border bg-slate-400/30 flex justify-center items-center h-full w-1/2 mx-auto" onClick={handleParentClick}>
  <div className="w-1/2 mx-auto relative">
      <img src={props.imgSrc} alt="car-photos"/>
      <div className="absolute bottom-0 left-0 inset-x-0 p-2">
        <div className="flex items-center gap-x-2 text-white font-semibold hover:underline select-none cursor-pointer">
          <img src="https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg" alt="profile-photo" className="h-10 w-10 rounded-full object-cover"/>
          <h1>Abhi</h1>
        </div>
      </div>
  </div>
    </div>
  )
}

// props -> {imageType: 'car'}
function MainBody(props) {
  // useState Hook provides two things
  // 1 -> the value it is holding
  // 2 -> a callback or function to change the value
  const [value, setValue] = useState("")

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

  function handleImgClick(imgSrc) {
    return () => {
      setValue(imgSrc)
    }
  }

  const handleOverlayClose = () => {
    setValue("")
  }


  // [{image: one, tags: ["car"]}, {image: two, tags: ["car"]}]
  const filteredImages = imagesList.filter((e) => {
    if (e.tags.includes(props.imageType.toLowerCase()) || props.imageType === "") {
      return true
    }
  })

  return (<>

    <div className="flex my-6 flex-wrap gap-y-2 ">
      {
        // [<Image src={one} />, <Image src={two}/>]
        filteredImages.map((e) => {
          // e -> {image: three, tags: ["car", "humans", "sunset"]}
          // handleImageClick(e) -> () => {setValue(e)}
          // return <Image src={e.image} onClick={() => {setValue(e)}}/> 
          return <Image src={e.image} onClick={handleImgClick(e.image)}/>
        })
      }
    </div>

      {
          value ? <OverlayComp imgSrc={value} handleClose={handleOverlayClose}/> : null
      }
      {/* <OverlayComp/> */}
  </>)
}


function App() {

  const [value, setValue] = useState("")

  const handleInput = (e) => {
    setValue(e.target.value)
  }

  return (<>

    <div className="m-2 mx-auto w-[80%] ">
      <div className="container w-1/2 text-center mx-auto my-6">
        <input type="text" className="border border-indigo-500 w-full text-3xl rounded"
          onChange={handleInput}
        />
      </div>

      {/* <MainBody imageType={value} /> */}
    </div>



  </>)
}

export default App
