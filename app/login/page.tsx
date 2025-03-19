// 在登录页面集成第三方登录组件
  import ThirdPartyAuth from "@/components/ThirdPartyAuth";

  // 在登录表单底部添加
  <div className="relative my-6">
    <div className="absolute inset-0 flex items-center">
      <div className="w-full border-t border-gray-300"></div>
    </div>
    <div className="relative flex justify-center text-sm">
      <span className="px-2 bg-white text-gray-500">或使用以下方式登录</span>
    </div>
  </div>
  <ThirdPartyAuth />
