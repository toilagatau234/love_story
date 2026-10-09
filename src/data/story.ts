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
    sender: "Một người",
    recipient: "Một người",
    duration: "Thời gian",
    tagline: "Một câu chuyện về những ngày tháng đã qua."
  },
  scene00: {
    title: "Có một điều muốn gửi gắm đến bạn…",
    scrollCue: "CUỘN ĐỂ TIẾP TỤC"
  },
  scene01: {
    title: "Thời gian trôi.",
    paragraphs: [
      "Những ngày tháng thanh xuân luôn là kỷ niệm đẹp.",
      "Và những điều bình dị nhất luôn đọng lại sâu sắc.",
      "Một câu chuyện được viết nên từ những khoảnh khắc chân thành nhất."
    ]
  },
  scene02: {
    title: "Những ký ức nhỏ bé theo năm tháng.",
    quotes: [
      "Những chặng đường đã cùng nhau đi qua.",
      "Những bức ảnh lưu giữ nụ cười tuổi trẻ.",
      "Và những khoảnh khắc chỉ cần nhìn lại đã thấy lòng bình yên."
    ]
  },
  scene03: {
    title: "Lưu giữ những khoảnh khắc đẹp.",
    subtitle: "Mỗi bức ảnh là một mảnh ghép ý nghĩa của hành trình thanh xuân."
  },
  scene04: {
    title: "Những dòng cảm xúc chân thành.",
    paragraphs: [
      "Cảm ơn vì những kỷ niệm tuyệt vời trong suốt thời gian qua.",
      "Chúc cho mỗi chúng ta đều tìm thấy hạnh phúc, bình yên và những điều tốt đẹp nhất."
    ],
    ctaButton: "Món quà kỷ niệm"
  }
};
