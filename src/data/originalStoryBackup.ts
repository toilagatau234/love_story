import { StoryConfig } from './story';
import { FinalGiftConfig } from './finalGift';

export const originalStoryData: StoryConfig = {
  meta: {
    sender: "Anh",
    recipient: "Bé Cam",
    duration: "Sáu năm",
    tagline: "Có một điều ước mà anh đã luôn mơ về nó."
  },
  scene00: {
    title: "Bé Cam, có một điều anh muốn nói với em…",
    scrollCue: "CUỘN ĐỂ TIẾP TỤC"
  },
  scene01: {
    title: "Sáu năm.",
    paragraphs: [
      "Anh vẫn luôn thương em suốt thời gian qua.",
      "Và em đã biết điều này rồi.",
      "Hôm nay, với tình cảm chân thành nhất anh muốn trao cho em một danh phận đàng hoàng."
    ]
  },
  scene02: {
    title: "Có những điều nhỏ bé, nhưng anh nhớ rất lâu.",
    quotes: [
      "Những lần bên cạnh nhau.",
      "Những bức ảnh chẳng cần hoàn hảo.",
      "Và những khoảnh khắc mà chỉ cần nhìn lại, anh đã thấy lòng ngập tràn bình yên."
    ]
  },
  scene03: {
    title: "Có những khoảnh khắc, anh chỉ muốn giữ lại thật lâu.",
    subtitle: "Không phải vì mọi thứ đều hoàn hảo, mà vì đó là những khoảnh khắc có ý nghĩa nhất với anh."
  },
  scene04: {
    title: "Có một điều anh không muốn chỉ giữ trong lòng nữa.",
    paragraphs: [
      "Suốt thời gian qua, anh đã thương em quá nhiều.",
      "Anh muốn được nghiêm túc, có thể thương, có thể ghen bằng một mối quan hệ — nếu em cũng cho phép điều đó."
    ],
    ctaButton: "Điều anh dành riêng cho em"
  }
};

export const originalFinalGift: FinalGiftConfig = {
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
