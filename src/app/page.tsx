import CategoryList from "@/components/category-list";
import Header from "@/components/header";
import Search from "@/components/search";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <Header />
      <Search />
      <CategoryList />
    </div>
  );
}
