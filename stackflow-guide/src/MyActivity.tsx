import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useFlow } from "./stackflow";

const MyActivity: ActivityComponentType = () => {
  const { replace } = useFlow();

  const onClick = () => {
    console.log("Click");
    replace("Article", {
      title: "Hello",
    });
  };

  return (
    <AppScreen appBar={{ title: "My Activity" }}>
      <div>
        My Activity
        <button onClick={onClick}>Go to article page</button>
      </div>
    </AppScreen>
  );
};

export default MyActivity;
