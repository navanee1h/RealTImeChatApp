import ChatPage from "./components/chat/Chat";
import DetailPage from "./components/detail/Detail";
import ListPage from "./components/list/List";
import Login from "./components/login/login";
import Notification from "./components/notification/notification";

const App = () => {
  const user = false;
  return (
    <div className="container">
      {user ? (
        <>
          <ListPage />
          <ChatPage />
          <DetailPage />
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  );
};

export default App;
