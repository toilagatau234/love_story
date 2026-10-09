export type FinalGiftConfig = {
  enabled: boolean;
  title: string;
  message: string;
  image: string;
  ctaLabel: string;
  letterSender: string;
  letterRecipient: string;
  letterContent: string[];
};

export const finalGift: FinalGiftConfig = {
  enabled: true,
  title: "Một món quà nhỏ gửi đến bạn…",
  message: "Một điều bất ngờ được chuẩn bị cho bạn.",
  image: "/images/flower-bouquet.webp",
  ctaLabel: "Chạm để mở món quà",
  letterSender: "Người gửi",
  letterRecipient: "Bạn",
  letterContent: [
    "Đây là những dòng chữ tượng trưng lưu giữ những kỷ niệm đẹp đẽ của thanh xuân. Mỗi chặng đường đi qua đều để lại những trải nghiệm và cảm xúc đáng quý.",
    "Chúc bạn luôn mỉm cười rạng rỡ, gặp nhiều may mắn, niềm vui và luôn tìm thấy sự bình yên trên hành trình phía trước."
  ]
};
