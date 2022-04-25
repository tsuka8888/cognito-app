import { Amplify, I18n } from "aws-amplify";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "./aws-exports";
import { vocabularies } from "./vocablaries";
Amplify.configure(awsExports);

I18n.putVocabularies(vocabularies);
I18n.setLanguage('ja');

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user ? user.username : ""}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}
