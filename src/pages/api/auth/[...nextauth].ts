import NextAuth, { NextAuthOptions } from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";

export const authOptions: NextAuthOptions = {
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
    colorScheme: "dark",
    buttonText: "Login please",
    // brandColor?: #
  },
};

export default NextAuth(authOptions);
