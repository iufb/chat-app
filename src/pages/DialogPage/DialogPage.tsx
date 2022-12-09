import { useParams } from "react-router-dom";
import { withLayout } from "../../layout/ConversationLayout";

const DialogPage = (): JSX.Element => {
  const { id } = useParams();
  return <div>DialogPage {id}</div>;
};
export default withLayout(DialogPage);
