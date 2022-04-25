import { Amplify, I18n } from "aws-amplify";
import { withAuthenticator, translations } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";

Amplify.configure(awsExports);

I18n.putVocabularies(translations);
I18n.setLanguage("ja");

const App = ({ signOut, user }: any) => {
  return (
    <>
      <h1>こんにちは {user.username}</h1>
      <button onClick={signOut}>サインアウト</button>
    </>
  );
};

export default withAuthenticator(App);
