import NextAuth, { Session } from "next-auth";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials:any) {
        try {
          const user = credentials?.email;
          if (user) {
            console.log(credentials.email,credentials.password)
            return user;
          } else {
            return null;
          }
        } catch (err) {
          errorMessage(err);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ||"",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  secret:process.env.NEXTSECRET,
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }:{session:any,token:any}) {
      session.user.id = token.id;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

const errorMessage = (err: any) => {
  if (err?.response?.data?.message) {
    throw new Error(err?.response?.data?.message);
  } else if (err.message) throw new Error(err.message);
  else if (typeof err == "string") throw new Error(err);
  else throw new Error("Error");
};

export { handler as GET, handler as POST };
