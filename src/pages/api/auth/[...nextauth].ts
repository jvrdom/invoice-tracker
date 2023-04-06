import NextAuth from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";

export const authOptions = {
  providers: [
    CognitoProvider({
      clientId: process.env.COGNITO_CLIENT_ID ?? "",
      clientSecret: process.env.COGNITO_CLIENT_SECRET ?? "",
      issuer: process.env.COGNITO_ISSUER,
    }),
  ],
  debug: true,
  theme: {
    logo: "https://www.sngular.com/wp-content/uploads/2022/02/Download-01.png",
    logoDark:
      "https://www.sngular.com/wp-content/uploads/2022/02/Download-01.png",
    bg: "#fff",
    text: "#C17B9E",
    bgDark: "#fff",
    textDark: "#C17B9E",
  },
};

export default NextAuth(authOptions);
