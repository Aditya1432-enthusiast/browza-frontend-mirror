"use client"
import { useRouter } from "next/navigation";

export default function Home() {
const router= useRouter();


  return (
<main>
      <h2>Buyer Web (Staging)</h2>
      <p>This is a minimal placeholder to get a Vercel URL.</p>
      <p>Use the <a href="/health">Health</a> page to test the API.</p>


      <button onClick={()=>{router.push("/status")}}>Status page</button>
    </main>
  );
}
