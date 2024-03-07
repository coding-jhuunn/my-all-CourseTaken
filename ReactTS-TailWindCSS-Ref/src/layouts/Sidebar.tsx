import { ChevronDown, ChevronUp, Clapperboard,Clock,Film,Flame,Gamepad2,History,Home, Library, Lightbulb, ListVideo, Music2, Newspaper, PlaySquare, Podcast, Radio, Repeat, Shirt, ShoppingBag, Trophy } from "lucide-react"
import { ElementType, ReactNode,Children, useState } from "react"
import { buttonStyles } from "../components/buttonstyle"
import { twMerge } from "tailwind-merge"
import Button from "../components/Button"
import { playlists,subscriptions } from "../data/playlists"
import { useSideBarContext } from "../contexts/SideBarContext"
import { PageHeaderFirstSection } from "./PageHeader"
const Sidebar = () => {
    const {isLargeOpen,isSmallOpen,close} = useSideBarContext();

  return (
    <>
        <aside className={`sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 ${isLargeOpen?"lg:hidden":"lg:flex"}`}>
            <SmallSideBarIitem Icon={Home} url="/home" title="Home"/>
            <SmallSideBarIitem Icon={Repeat} url="/shorts" title="Shorts"/>
            <SmallSideBarIitem Icon={Clapperboard} url="/subscriptions" title="Subscriptions"/>
            <SmallSideBarIitem Icon={Library} url="/library" title="Library"/>
        </aside>
        {isSmallOpen && (<div onClick={close} className="lg:hidden fixed inset-0 z-[999] bg-secondary-dark opacity-50"></div>)}
        <aside   className={`w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2
        ${isLargeOpen ? "lg:flex" : "lg:hidden"} 
        ${isSmallOpen ? "flex z-[999] bg-white max-h-screen" : "hidden"}`}
        >
          <div className="lg:hidden pt-2 pb-4 px-2 sticky top-0 bg-white">
            <PageHeaderFirstSection></PageHeaderFirstSection>

          </div>
            <LargeSideBarSection >
                <LargeSideBarItem isActive IconOrImgURL={Home} url="/home" title="Home"/>
                <LargeSideBarItem  IconOrImgURL={Clapperboard} url="/subscriptions" title="Subscriptions"/>
            </LargeSideBarSection>
            <hr />
            <LargeSideBarSection visibleItemCount={5}>
                <LargeSideBarItem  IconOrImgURL={Library} url="/library" title="Library"/>
                <LargeSideBarItem  IconOrImgURL={History} url="/history" title="History"/>
                <LargeSideBarItem  IconOrImgURL={PlaySquare} url="/yourvideos" title="Your Videos"/>
                <LargeSideBarItem  IconOrImgURL={Clock} url="/watchlater" title="Watch Later"/>
                {playlists.map(playlist =>
                    <LargeSideBarItem 
                    key={playlist.id}
                    IconOrImgURL={ListVideo}
                    title={playlist.name} 
                    url={`/playlist?list=${playlist.name}`}
                    />
                )}
            </LargeSideBarSection>
            <hr />
            <LargeSideBarSection>
            {subscriptions.map(subs =>
                    <LargeSideBarItem 
                    key={subs.id}
                    IconOrImgURL={subs.imgUrl}
                    title={subs.channelName} 
                    url={`/@${subs.id}`}
                    />
                )}
            </LargeSideBarSection>
            <hr />
        <LargeSideBarSection title="Explore">
          <LargeSideBarItem
            IconOrImgURL={Flame}
            title="Trending"
            url="/trending"
          />
          <LargeSideBarItem
            IconOrImgURL={ShoppingBag}
            title="Shopping"
            url="/shopping"
          />
          <LargeSideBarItem IconOrImgURL={Music2} title="Music" url="/music" />
          <LargeSideBarItem
            IconOrImgURL={Film}
            title="Movies & TV"
            url="/movies-tv"
          />
          <LargeSideBarItem IconOrImgURL={Radio} title="Live" url="/live" />
          <LargeSideBarItem
            IconOrImgURL={Gamepad2}
            title="Gaming"
            url="/gaming"
          />
          <LargeSideBarItem IconOrImgURL={Newspaper} title="News" url="/news" />
          <LargeSideBarItem
            IconOrImgURL={Trophy}
            title="Sports"
            url="/sports"
          />
          <LargeSideBarItem
            IconOrImgURL={Lightbulb}
            title="Learning"
            url="/learning"
          />
          <LargeSideBarItem
            IconOrImgURL={Shirt}
            title="Fashion & Beauty"
            url="/fashion-beauty"
          />
          <LargeSideBarItem
            IconOrImgURL={Podcast}
            title="Podcasts"
            url="/podcasts"
          />
        </LargeSideBarSection>
        </aside>
    </>

  )
}
export default Sidebar

type SmallSideBarIitemProps ={
    Icon:ElementType,
    title:string,
    url:string
}
const SmallSideBarIitem =({Icon,title,url}:SmallSideBarIitemProps) =>{
    return <a href={url} className={twMerge(buttonStyles({variant:"ghost"}),"py-4 px-1 flex flex-col items-center rounded-lg gap-1")}>
        <Icon className="w-6 h-6"/>
        <div className="text-sm">
            {title}
        </div>
    </a>
}

type LargeSideBarSectionProps ={
    children:ReactNode,
    title?:string,
    visibleItemCount?:number
}
const LargeSideBarSection = ({
    children,
    title,
    visibleItemCount=Number.POSITIVE_INFINITY}:LargeSideBarSectionProps)=>{
    
    const [isExpanded,setIsExpanded] = useState(false);
    const childrenArray =Children.toArray(children).flat()
    const showExpandedButton = childrenArray.length >visibleItemCount;
    const visibleChildren = isExpanded?childrenArray: childrenArray.slice(0,visibleItemCount);
    const ButtonIcon = isExpanded? ChevronUp:ChevronDown;
    return <div>
        {title && <div className="ml-4 mt-2 text-lg mb-1">{title}</div>}
        {visibleChildren}
        {showExpandedButton &&
            <Button
            onClick={()=>setIsExpanded(e=> !e)} 
            variant  = "ghost" className="`w-full flex items-center rounded-lg gap-4 p-3">
                <ButtonIcon className="w-6 h-6"></ButtonIcon>
                <div>{isExpanded?"Show Less":"Show More"}</div>

            </Button>
        }
    </div>
}

type LargeSideBarIitemProps= {
    IconOrImgURL:ElementType|string;
    title:string,
    url:string,
    isActive?:boolean
}

const LargeSideBarItem = ({IconOrImgURL,title,url,isActive = false}:LargeSideBarIitemProps) =>{
    return (
        <a href={url} className = {twMerge(buttonStyles({variant:"ghost"}),`w-full flex items-center rounded-lg gap-4 p-3 ${isActive?"font-bold bg-neutral-100 hover:bg-secondary":undefined}`)}>
            {typeof IconOrImgURL === "string"?(
                <img src={IconOrImgURL} className="w-6 h-6 rounded-full"/>
            ):(
               <IconOrImgURL className="w-6 h-6"/>
            )}
       
            <div className="whitespace-nowrap overflow-hidden text-ellipsis">
                {title}
            </div>
            
        </a>
    )
}


    
     

