// app/page.tsx

import { fetchCategories } from "@/lib/api";
import Navbar from "./componetes/Navbar";
import Banner from "./componetes/Banner";
import HeroCategories from "./componetes/English";



// Server-side data fetching using async function
export default async function Home() {
  const categories = await fetchCategories(); // API থেকে ক্যাটেগরি ফেচ করা
  return (
    <div>
      <Navbar />
      <Banner />
      <HeroCategories categories={categories} />
    </div>
  );
}
