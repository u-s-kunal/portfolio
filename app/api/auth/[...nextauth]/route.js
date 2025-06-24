import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  debug: true,
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("signIn callback:", { user, account, profile });
      return true; // continue sign in
    },
    async jwt({ token, user, account }) {
      console.log("jwt callback:", { token, user, account });
      return token;
    },
    async session({ session, token }) {
      console.log("session callback:", { session, token });
      return session;
    },
  },
});

export { handler as GET, handler as POST };
