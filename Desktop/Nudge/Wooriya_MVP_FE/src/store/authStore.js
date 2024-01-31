import create from "zustand";

export const useUserStore = create((set) => ({
    email: null,
    memberRole: null,
    accessToken: null,
    setUserInfo: ({ email, memberRole, accessToken }) =>
        set({ email, memberRole, accessToken }),
    logout: () => set({ email: null, memberRole: null, accessToken: null }), // 로그아웃 시 accessToken도 초기화
}));
