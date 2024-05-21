import ChatPage from "./components/chat/Chat";
import DetailPage from "./components/detail/Detail";
import ListPage from "./components/list/List";

const App = () => {
  return (
    <div className="container">
      <ListPage />
      <ChatPage />
      <DetailPage />
    </div>
  );
};

export default App;
