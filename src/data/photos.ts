export interface PhotoItem {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  objectPosition: string;
  role: string;
}

export const photos: PhotoItem[] = [
  {
    id: 'photo-01',
    src: '/images/photo-01-selfie-gate.webp',
    alt: 'Bé Cam giơ tay chữ V và Anh trước cửa cuốn',
    caption: 'Những ngày bình dị nhưng ấm áp',
    objectPosition: 'center 30%',
    role: 'Những điều nhỏ bé'
  },
  {
    id: 'photo-02',
    src: '/images/photo-02-beach.webp',
    alt: 'Hai người đứng cạnh biển, trời mây xanh lạnh',
    caption: 'Chuyến đi biển kỷ niệm',
    objectPosition: 'center 35%',
    role: 'Hero mở đầu & Đi biển'
  },
  {
    id: 'photo-03',
    src: '/images/photo-03-close-selfie.webp',
    alt: 'Selfie cận mặt hai người ấm áp trong nhà',
    caption: 'Khoảnh khắc thân thuộc',
    objectPosition: 'center 35%',
    role: 'Cận cảnh chân thành'
  },
  {
    id: 'photo-04',
    src: '/images/photo-04-photobooth.webp',
    alt: 'Ảnh photobooth film viền trắng',
    caption: 'Bức ảnh photobooth gìn giữ',
    objectPosition: 'center 30%',
    role: 'Khoảnh khắc giữ lại'
  },
  {
    id: 'photo-05',
    src: '/images/photo-05-red-accessories.webp',
    alt: 'Bé Cam cười tươi với phụ kiện đỏ cùng Anh',
    caption: 'Nụ cười rạng rỡ của Bé Cam',
    objectPosition: 'center 25%',
    role: 'Nụ cười tươi tắn'
  },
  {
    id: 'photo-06',
    src: '/images/photo-06-photo-wall.webp',
    alt: 'Hai người đội mũ trước bức tường đầy ảnh',
    caption: 'Những kỷ niệm ngập tràn',
    objectPosition: 'center 30%',
    role: 'Khoảnh khắc đáng yêu'
  },
  {
    id: 'photo-07',
    src: '/images/photo-07-peace-selfie.webp',
    alt: 'Cả hai cùng giơ tay chữ V tươi cười',
    caption: 'Đồng điệu và an yên',
    objectPosition: 'center 30%',
    role: 'Gắn kết bền chặt'
  }
];
