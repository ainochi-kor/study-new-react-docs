import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

type ArticleParams = {
  title: string;
};
const Article: ActivityComponentType<ArticleParams> = ({
  params: { title },
}) => {
  return (
    <AppScreen appBar={{ title: "Article" }}>
      <div>
        <h1>{title}</h1>
      </div>
    </AppScreen>
  );
};

export default Article;
