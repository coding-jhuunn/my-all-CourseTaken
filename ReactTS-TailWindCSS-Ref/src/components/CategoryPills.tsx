import { useState,useRef,useEffect} from "react"
import Button from "./Button"
import {ChevronLeft, ChevronRight} from "lucide-react"
type CategoryPills={
    category:string[],
    selectedCategory:string,
    isSelected:(category:string)=>void
}
const TRANSLATE_AMOUNT = 300;
const CategoryPills = ({category,selectedCategory,isSelected}:CategoryPills) => {
    const [isLeftVisibie,setIsLeftVisibie] = useState(false);
    const [isRightVisibie,setIsRightVisibie] = useState(false);
    const [translate,setTranslate] = useState(300);
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect (()=>{
        if(containerRef.current==null)return
        const observer = new ResizeObserver (entries=>{
            const container = entries[0]?.target

            if(container==null)return
            setIsLeftVisibie(translate>0)
            setIsRightVisibie(translate+container.clientWidth<container.scrollWidth)
        })
        observer.observe(containerRef.current)
        return ()=>{
            observer.disconnect();
        }
    },[category,translate])

  return (
    <div className="overflow-x-hidden relative" ref={containerRef}>
        <div className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]" 
        style={{transform:`translateX(-${translate}px)`}}>
            {category.map((item:string) =>(
                <Button 
                    onClick={()=> isSelected(item)}
                    key={item}
                    variant={selectedCategory === item?"dark":"default"} 
                    className="py-1 px-3 rounded-lg whitespace-nowrap">{item}
                </Button>
            ))}
        </div>
        {isLeftVisibie&&(<div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white from-50% to-transparent w-48 h-full">
            <Button
                onClick={()=>{setTranslate(translate =>{
                    const newTranslate = translate- TRANSLATE_AMOUNT
                    if(newTranslate <=0){
                        return 0
                    }
                    return newTranslate
                })}} 
                variant={"ghost"} 
                size={"icon"} 
                className="h-full aspect-sqyare w-auto p-1.5">
                <ChevronLeft></ChevronLeft>
            </Button>
        </div>)}
        {isRightVisibie&&(<div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white from-50% to-transparent w-48 h-full flex justify-end">
            <Button
                
                onClick={()=>{
                setTranslate(translate =>{
                    if(containerRef.current ==null) {
                        return translate
                    } 
                    const newTranslate = translate + TRANSLATE_AMOUNT
                    const edge = containerRef.current.scrollWidth;
                    const width = containerRef.current.clientWidth;
                    if(newTranslate + width >=edge){
                        return edge-width
                    }
                    return newTranslate
                    })
                }} 
                variant={"ghost"} 
                size={"icon"} 
                className="h-full aspect-sqyare w-auto p-1.5">
                    <ChevronRight></ChevronRight>
            </Button>
        </div>)}
    </div>

  )
        
}

export default CategoryPills