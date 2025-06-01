import { useState } from "react";
import Icon from "@/components/ui/icon";

const ShareButton = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Не удалось скопировать ссылку:", err);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition-colors flex items-center gap-2"
      title="Поделиться ссылкой"
    >
      <Icon name={copied ? "Check" : "Share2"} size={20} />
      {copied ? "Скопировано!" : "Поделиться"}
    </button>
  );
};

export default ShareButton;
