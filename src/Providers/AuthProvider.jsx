import { createContext } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext(null); //only export kobo not default because from one file only one default can be exported

const AuthProvider = ({ children }) => {
  const authInfo = { name: "Shadman Shahariar" };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};

/**
 * 1.create context and export it but not as default: export const AuthContext = createContext(null);
 * amra jei context ta createcontext use kore banabo setai sob jaygay call korbo,taholei provider component er mddhe ja ja ase sob use korte parbo
 *
 * 2.set provider with value :<AuthContext.Provider value={authInfo}></AuthContext.Provider>;
 * 3.use the auth provider in main jsx file
 * 4.access the children in the main authprovider component as children and use it in the
 * middle of the provider:<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
 */
