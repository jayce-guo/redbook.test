import ImageUploader from "@/components/ImageUploader";
import UserProfile from "@/components/UserProfile";

export default function Header() {
  return (
    <header 
      className="px-4 py-6 bg-cover bg-center"
      style={{ backgroundImage: 'url(https://aily.feishu.cn/play/api/v1/attachments/effdd963-c485-41ee-b9d0-b0c69929a483/raw)' }}
    >
      <div className="flex justify-between items-center backdrop-blur-sm">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">AI写文案神器</h1>
          <p className="mt-2 text-sm opacity-90 text-gray-700">1分钟1篇小红书笔记</p>
        </div>
        <UserProfile />
      </div>
      <ImageUploader />
    </header>
  );
}
