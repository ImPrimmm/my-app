import { signIn } from "@/auth";

export const LoginGoogleButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <div className="flex items-center justify-center px-165 py-78 rounded-4xl bg-[#183B4E] text-white ">
        <button className="cursor-pointer bg-[#F3F3E0] hover:bg-[#6c6c65] rounded-4xl text-black font-bold h-10 w-50">
          Sign In With Google
        </button>
      </div>
    </form>
  );
};
