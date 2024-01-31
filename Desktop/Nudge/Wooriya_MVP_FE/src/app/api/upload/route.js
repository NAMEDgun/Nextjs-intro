import fs from "fs";
import path from "path";

export async function POST(request) {
    try {
        const formData = await request.formData();
        const file = formData.get("file");

        if (!file) {
            return new Response("No image data provided", {
                status: 400,
            });
        }

        const filename = formData.get("file").name;
        const id = formData.get("id");
        const folder = formData.get("folder");
        const uploadPath = path.join(
            process.cwd(),
            "public",
            "s3",
            folder,
            id,
            filename
        );

        const directory = path.dirname(uploadPath);
        if (!fs.existsSync(directory)) {
            fs.mkdirSync(directory, { recursive: true });
        }

        const reader = file.stream().getReader();
        const writer = fs.createWriteStream(uploadPath);

        let { value, done } = await reader.read();
        while (!done) {
            writer.write(value);
            ({ value, done } = await reader.read());
        }
        writer.end();

        const responseData = {
            message: "Image uploaded successfully!",
            path: `/s3/${folder}/${id}/${filename}`, // 서버가 접근 가능한 URL 경로
        };

        return new Response(JSON.stringify(responseData), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.error("Failed to upload image:", error);
        return new Response("Server error", {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}
