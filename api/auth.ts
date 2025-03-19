// 新增接口定义
  export const wechatLoginAPI = (code: string) => 
    axios.post('/api/auth/wechat', { code });

  export const smsLoginAPI = (phone: string, code: string) =>
    axios.post('/api/auth/sms-login', { phone, code });

  export const sendSMSCodeAPI = (phone: string) =>
    axios.post('/api/auth/sms-code', { phone });
