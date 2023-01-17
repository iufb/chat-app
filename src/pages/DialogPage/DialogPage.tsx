import { withLayout } from "../../layout/ConversationLayout";
import { Dialog } from "../../components/Dialog/Dialog";
const DialogPage = (): JSX.Element => {
  return (
    <div>
      <Dialog />
    </div>
  );
};
export default withLayout(DialogPage);
