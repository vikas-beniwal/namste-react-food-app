import { useState } from "react";

const Section = ({title, description , isVisible, setIsVisible})=>{
    return(
        <div className="border border-black p-2 m-1">
            <h3 className="font-bold text-xl">{title}</h3>
            {isVisible ? (<><button className="cursor-pointer underline" onClick={()=>setIsVisible(false)}>Hide</button>
            <p>{description}</p></>)
            :(<button className="cursor-pointer underline" onClick={()=>setIsVisible(true)}>Show</button>)
              }

        
        </div>
    );
}

const Instamart = ()=>{

    const [visibleSection, setIsVisibleSection] = useState("about")
     console.log('gggggggggggggggggggggggg')
    return(
        <div>
            <h1 className="text-3xl p-2 m-2 font-bold"> Instamart u</h1>
            <Section title={"About Instamart"}
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas odio eget purus viverra lobortis. Vestibulum metus augue, dignissim quis volutpat ac, tempus sed felis. Maecenas in gravida neque. Donec quis dui non metus scelerisque porttitor. Pellentesque consequat eu nunc a semper. Donec quis arcu dolor. Etiam fringilla pellentesque ex, sit amet laoreet libero lobortis ut. Aliquam erat volutpat. In hac habitasse platea dictumst. Proin suscipit augue tellus, sed aliquet nisi luctus non. Praesent velit neque, cursus ac tellus vitae, efficitur sodales urna. Vestibulum eu nisl vel ligula rutrum suscipit."} 
            isVisible={visibleSection==="about"}
            setIsVisible={(e)=>{(console.log(e),
                e?setIsVisibleSection("about"):setIsVisibleSection(e))}}
            />
            <Section title={"team  Instamart"}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas odio eget purus viverra lobortis. Vestibulum metus augue, dignissim quis volutpat ac, tempus sed felis. Maecenas in gravida neque. Donec quis dui non metus scelerisque porttitor. Pellentesque consequat eu nunc a semper. Donec quis arcu dolor. Etiam fringilla pellentesque ex, sit amet laoreet libero lobortis ut. Aliquam erat volutpat. In hac habitasse platea dictumst. Proin suscipit augue tellus, sed aliquet nisi luctus non. Praesent velit neque, cursus ac tellus vitae, efficitur sodales urna. Vestibulum eu nisl vel ligula rutrum suscipit."}
            isVisible={visibleSection==="team"}
            setIsVisible={(e)=>{e?setIsVisibleSection("team"):setIsVisibleSection(e)}}
            />

            <Section title={"career Instamart"} 
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas odio eget purus viverra lobortis. Vestibulum metus augue, dignissim quis volutpat ac, tempus sed felis. Maecenas in gravida neque. Donec quis dui non metus scelerisque porttitor. Pellentesque consequat eu nunc a semper. Donec quis arcu dolor. Etiam fringilla pellentesque ex, sit amet laoreet libero lobortis ut. Aliquam erat volutpat. In hac habitasse platea dictumst. Proin suscipit augue tellus, sed aliquet nisi luctus non. Praesent velit neque, cursus ac tellus vitae, efficitur sodales urna. Vestibulum eu nisl vel ligula rutrum suscipit."}
            isVisible={visibleSection==="career"}
            setIsVisible={(e)=>{e?setIsVisibleSection("career"):setIsVisibleSection(e)}}
            />
        </div>
    );

};

export default Instamart;