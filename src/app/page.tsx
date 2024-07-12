import Image from "next/image";
import { SignIn } from "../../components/sign-in";
import { SignUp } from "../../components/sign-up";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  return (
    <main className="flex flex-col gap-4 bg-slate-800 p-4 text-blue-400">
      <SignUp />
      <SignIn />
      <p>{JSON.stringify(session)}</p>
    </main>
  );
}
