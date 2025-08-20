import { signIn } from "@/auth";

export const LoginGoogleButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button className="flex items-center justify-center w-full rounded-4xl bg-blue-700 text-white hover:bg-blue-600 cursor-pointer">
        Sign In With Google
      </button>
    </form>
  );
};
