import { useMutation } from "@tanstack/react-query";
import { useUserStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import { postLoginInfo } from "@/apis/auth/login";

const useLogin = () => {
    const router = useRouter();
    const setUserInfo = useUserStore((state) => state.setUserInfo);

    return useMutation(
        ({ email, password }) => postLoginInfo(email, password, false),
        {
            onSuccess: (data) => {
                console.log(data);
                setUserInfo(data);
                router.push("/");
            },
            onError: (error) => {
                console.log(error);
                alert("아이디 또는 비밀번호가 일치하지 않습니다.");
            },
        }
    );
};

export { useLogin };
