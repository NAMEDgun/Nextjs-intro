import NavBar from "./NavBar";

export default function Layout({ children }) {
    return (
        // Fragment를 사용하여 여러 요소를 묶음
        <>
            {/* NavBar 컴포넌트를 렌더링 */}
            <NavBar />
            {/* children prop으로 전달된 내용을 감싼 div를 렌더링 */}
            <div>
                {children}
            </div>
        </>
    );
}
