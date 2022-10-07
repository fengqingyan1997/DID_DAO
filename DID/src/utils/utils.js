import dayjs from 'dayjs'

// 0 0 0 trx
function initFormData (data) {
  const formData = new FormData();
  for (const [key, value] of Object.entries(data)) {
    formData.append(key, value);
  }
  return formData;
}

export default {
  initFormData,
};

export const paytype = (value) => {
  switch (value) {
    case "yhk":
      return "银行卡";
    case "zfb":
      return "支付宝";
    case "wx":
      return "微信支付";
    case "xj":
      return "现金";
  }
};

export function copy (text) {
  const input = document.createElement("input");
  input.style.position = "absolute";
  input.style.zIndex = -1;
  input.style.left = 0;
  input.style.top = 0;
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  this.$toast({
    message: "复制成功",
    duration: 2000,
  });
  document.body.removeChild(input);
}
// 日期格式转换
export function transformUTCDate(str) {
  return dayjs(str).utc().format('YYYY-MM-DD HH:mm:ss')

}
// 浏览远程图片
export function spliceSrc (src) {
  return `${process.env.VUE_APP_LOCATION}${src}`;
}
// 获取审核步骤
export function getAuditStep (step) {
  const arr = ['初审', '二审', '抽审']
  return arr[step]
}
