import { Button } from "@/components/aily/Button";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";

export default function ThirdPartyAuth() {
  const { loginWithWechat, loginWithSMS } = useAuth();
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [countdown, setCountdown] = useState(0);

  const handleWechatLogin = async () => {
    try {
      const wechatCode = await getWechatCode();
      await loginWithWechat(wechatCode);
    } catch (error) {
      console.error("微信登录失败:", error);
    }
  };

  const sendSMSCode = async () => {
    if (!/^1[3-9]\d{9}$/.test(phone)) return;
    try {
      await axios.post("/api/auth/sms-code", { phone });
      startCountdown();
    } catch (error) {
      console.error("发送验证码失败:", error);
    }
  };

  const handleSMSLogin = async () => {
    if (!code) return;
    await loginWithSMS(phone, code);
  };

  const startCountdown = () => {
    setCountdown(60);
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  };

  return (
    <div className="space-y-4">
      <Button 
        className="w-full bg-green-500 hover:bg-green-600 text-white"
        onClick={handleWechatLogin}
      >
        微信登录
      </Button>

      <div className="space-y-2">
        <input
          type="tel"
          placeholder="手机号码"
          className="w-full p-2 border rounded"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="验证码"
            className="flex-1 p-2 border rounded"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <Button
            className="bg-gray-100 hover:bg-gray-200"
            onClick={sendSMSCode}
            disabled={countdown > 0}
          >
            {countdown > 0 ? `${countdown}秒后重发` : "获取验证码"}
          </Button>
        </div>
        <Button 
          className="w-full bg-blue-500 hover:bg-blue-600 text-white"
          onClick={handleSMSLogin}
        >
          手机验证码登录
        </Button>
      </div>
    </div>
  );
}
