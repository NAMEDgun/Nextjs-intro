import Head from "next/head"

export default function Lee({ title }) {
    return (
        // HTML의 <head> 요소를 동적으로 설정하기 위해 Head 컴포넌트 사용
        <Head>
            {/* 페이지의 제목을 동적으로 설정, "Next Movies"는 고정된 부분 */}
            <title>{title} | Next Movies</title>
        </Head>
    );
}