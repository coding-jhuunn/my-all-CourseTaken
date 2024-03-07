import PageHeader from "./layouts/PageHeader"
import CategoryPills from "./components/CategoryPills"
import VideoGridItem from "./components/VideoGridItem"
import { videos } from "./data/videoItems"
import { category } from "./data/categories"
import { useState } from "react"
import Sidebar from "./layouts/Sidebar"
import SideBarProvider from "./contexts/SideBarContext"

function App() {
  const [selectedCategory, isSelected] = useState(category[0]);
  return (
<SideBarProvider>
        <div className="max-h-screen flex flex-col">
    <PageHeader></PageHeader>
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto" >
        <Sidebar></Sidebar>
          <div className="overflow-x-hidden px-8 pb-4">
            <div className="sticky top-0 bg-white z-10 pb-4">
              <CategoryPills 
                category={category}
                selectedCategory= {selectedCategory}
                isSelected = {isSelected}
              ></CategoryPills>
            </div>
            <div 
            className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
              {videos.map(v=>(
                <VideoGridItem key={v.id} {...v}/>
              ))}
          </div>
          </div>
      </div>
  </div>
</SideBarProvider>

  )
}

export default App
