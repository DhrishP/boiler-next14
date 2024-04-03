import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes:[] // Add public routes here for example making dashboard
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
  
};