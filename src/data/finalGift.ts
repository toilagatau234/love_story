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
  title: "Anh còn chuẩn bị cho em một điều nhỏ nữa…",
  message: "Một món quà được chuẩn bị bằng tất cả sự chân thành gửi đến Bé Cam.",
  image: "/images/flower-bouquet.webp",
  ctaLabel: "Chạm để mở món quà",
  letterSender: "Anh",
  letterRecipient: "Bé Cam",
  letterContent: [
    "Bó hoa này là bó hoa đầu tiên anh tặng cho một người con gái. Anh muốn tạo cho em bất ngờ cơ, nhưng anh sợ nó chưa đúng ý dù anh biết em sẽ không bận tâm và luôn vui vẻ với những món quà anh tặng cho em. Nhưng anh luôn muốn cho em những cái tốt nhất.",
    "Anh rất hạnh phúc vì em đã hiện diện trong cuộc đời anh, chưa bao giờ hối hận vì đã thương em. Mong rằng em sẽ luôn bên cạnh anh và không rời đi nữa, để anh được là người được đồng hành và che chở cho em."
  ]
};
