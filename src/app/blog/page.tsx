import { Metadata } from "next";
import { resolve } from "path";
export const metadata: Metadata = {
  title: {
    absolute: "Blog",
  },
};

export default async function Blog() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Intenstional delay");
    }, 2000);
  });

  return (
    <div>
      <h1>Blog</h1>
      <h1>Nested Routes</h1>
    </div>
  );
}
