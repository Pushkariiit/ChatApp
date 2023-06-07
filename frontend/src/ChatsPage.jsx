import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style={{height:"100vh"}}>
      <PrettyChatWindow
        projectId="79d91551-ad90-4789-b541-0f59aee81202"
        username={props.user.username}
        secret={props.user.secret}
        style={{height:"100%"}}
      />
    </div>
  );
};

export default ChatsPage;