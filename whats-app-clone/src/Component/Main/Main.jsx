import Chat from "../Chat/Chat";
import SideNav from "../Nav/SideNav";

const Main = () => {
    return (
        <div className="flex bg-main">
          <SideNav> </SideNav>
          <Chat> </Chat>  
        </div>
    );
};

export default Main;