import { Button } from "@/components/aily/Button";

export default function FeatureGrid() {
  return (
    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
      <Button className="h-14 bg-red-100 hover:bg-red-200 text-red-800">
        <span className="truncate">小红薯标题</span>
      </Button>
      <Button className="h-14 bg-yellow-100 hover:bg-yellow-200 text-yellow-800">
        <span className="truncate">小红薯正文</span>
      </Button>
      <Button className="h-14 bg-blue-100 hover:bg-blue-200 text-blue-800">
        <span className="truncate">运营工具箱</span>
      </Button>
      <Button className="h-14 bg-green-100 hover:bg-green-200 text-green-800">
        <span className="truncate">会员活动</span>
      </Button>
    </div>
  );
}
