import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ProfileList } from "./profile/ProfileList";
import { ProfileCreate } from "./profile/ProfileCreate";
import { ProfileEdit } from "./profile/ProfileEdit";
import { ProfileShow } from "./profile/ProfileShow";
import { LanguageList } from "./language/LanguageList";
import { LanguageCreate } from "./language/LanguageCreate";
import { LanguageEdit } from "./language/LanguageEdit";
import { LanguageShow } from "./language/LanguageShow";
import { UserRoleList } from "./userRole/UserRoleList";
import { UserRoleCreate } from "./userRole/UserRoleCreate";
import { UserRoleEdit } from "./userRole/UserRoleEdit";
import { UserRoleShow } from "./userRole/UserRoleShow";
import { PreferenceList } from "./preference/PreferenceList";
import { PreferenceCreate } from "./preference/PreferenceCreate";
import { PreferenceEdit } from "./preference/PreferenceEdit";
import { PreferenceShow } from "./preference/PreferenceShow";
import { RateList } from "./rate/RateList";
import { RateCreate } from "./rate/RateCreate";
import { RateEdit } from "./rate/RateEdit";
import { RateShow } from "./rate/RateShow";
import { CertificationList } from "./certification/CertificationList";
import { CertificationCreate } from "./certification/CertificationCreate";
import { CertificationEdit } from "./certification/CertificationEdit";
import { CertificationShow } from "./certification/CertificationShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"TranslationCRM"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Profile"
          list={ProfileList}
          edit={ProfileEdit}
          create={ProfileCreate}
          show={ProfileShow}
        />
        <Resource
          name="Language"
          list={LanguageList}
          edit={LanguageEdit}
          create={LanguageCreate}
          show={LanguageShow}
        />
        <Resource
          name="UserRole"
          list={UserRoleList}
          edit={UserRoleEdit}
          create={UserRoleCreate}
          show={UserRoleShow}
        />
        <Resource
          name="Preference"
          list={PreferenceList}
          edit={PreferenceEdit}
          create={PreferenceCreate}
          show={PreferenceShow}
        />
        <Resource
          name="Rate"
          list={RateList}
          edit={RateEdit}
          create={RateCreate}
          show={RateShow}
        />
        <Resource
          name="Certification"
          list={CertificationList}
          edit={CertificationEdit}
          create={CertificationCreate}
          show={CertificationShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
