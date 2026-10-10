export interface StoryConfig {
  meta: {
    sender: string;
    recipient: string;
    duration: string;
    tagline: string;
  };
  scene00: {
    title: string;
    scrollCue: string;
  };
  scene01: {
    title: string;
    paragraphs: string[];
  };
  scene02: {
    title: string;
    quotes: string[];
  };
  scene03: {
    title: string;
    subtitle: string;
  };
  scene04: {
    title: string;
    paragraphs: string[];
    ctaButton: string;
  };
}

export const storyData: StoryConfig = {
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
